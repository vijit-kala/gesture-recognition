import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import { drawHand } from "./Util";

// Importing the images and the fingerpose model.
import * as fp from "fingerpose";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";
import ok from "./ok.png";

function App() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [emoji, setEmoji] = useState(null);
    const images = { thumbs_up: thumbs_up, victory: victory };

    const loadHandPose = async () => {
        const net = await handpose.load();
        //console.log("Handpose model loaded");

        setInterval(() => {
            detect(net);
        }, 10);
    };

    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const hand = await net.estimateHands(video);
            //console.log(hand);

            // Making gesture detections.
            if (hand.length > 0) {
                const GE = new fp.GestureEstimator([
                    fp.Gestures.VictoryGesture,
                    fp.Gestures.ThumbsUpGesture,
                ]);

                const gesture = await GE.estimate(hand[0].landmarks, 4);
                //console.log(gesture);
                if (
                    gesture.gestures !== undefined &&
                    gesture.gestures.length > 0
                ) {
                    //console.log(gesture.gestures);
                    const score = gesture.gestures.map(
                        (prediction) => prediction.score
                    );

                    const maxScore = score.indexOf(Math.max.apply(null, score));
                    //console.log(maxScore);
                    //console.log(confidence);

                    setEmoji(gesture.gestures[maxScore].name);
                    console.log(emoji);
                }
            }

            const ctx = canvasRef.current.getContext("2d");
            drawHand(hand, ctx);
        }
    };

    loadHandPose();

    return (
        <div className="App">
            <header className="App-header">
                <Webcam
                    ref={webcamRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zIndex: 9,
                        width: 640,
                        height: 480,
                    }}
                />

                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zIndex: 9,
                        width: 640,
                        height: 480,
                    }}
                />

                {emoji !== null ? (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img
                        src={images[emoji]}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 400,
                            bottom: 300,
                            right: 0,
                            textAlign: "center",
                            height: 100,
                            zIndex: 10,
                        }}
                    />
                ) : (
                    ""
                )}
            </header>

            <footer className="App-footer">
                <p>Life isn't dattebayo anymore!</p>
            </footer>
        </div>
    );
}

export default App;
