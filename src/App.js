import logo from "./logo.svg";
import "./App.css";
import React, { useRef } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import { drawHand } from "./Util";

function App() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const loadHandPose = async () => {
        const net = await handpose.load();
        console.log("Handpose model loaded");

        setInterval(() => {
            detect(net);
        }, 100);
    };

    const detect = async (net) => {
        if (
            webcamRef.current !== "undefined" &&
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
            console.log(hand);

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
                        marginRight: "right",
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
                        marginRight: "right",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zIndex: 9,
                        width: 640,
                        height: 480,
                    }}
                />
            </header>
        </div>
    );
}

export default App;
