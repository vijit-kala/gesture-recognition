// Key points for fingers.
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
};

// Drawing function
export const drawHand = (predictions, ctx) => {
    if (predictions.length > 0) {
        predictions.forEach((prediction) => {
            // Finding the landmarks/points.
            const landmarks = prediction.landmarks;

            // Looping through all fingers to
            // draw the mesh to make a complete structure of
            // the hand.
            for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
                let finger = Object.keys(fingerJoints)[j];

                // Looping through the pairs of joints.
                for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
                    // Get the joints.
                    const firstJointIndex = fingerJoints[finger][k];
                    const secondJointIndex = fingerJoints[finger][k + 1];

                    // Drawing a path between both.
                    ctx.beginPath();
                    ctx.moveTo(
                        landmarks[firstJointIndex][0],
                        landmarks[firstJointIndex][1]
                    );
                    ctx.lineTo(
                        landmarks[secondJointIndex][0],
                        landmarks[secondJointIndex][1]
                    );
                    ctx.strokeStyle = "plum";
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }
            }

            // Loop through them and draw them.
            for (let i = 0; i < landmarks.length; i++) {
                // Getting x and y points.
                const x = landmarks[i][0];
                const y = landmarks[i][1];

                // Drawing them on canvas.
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 3 * Math.PI);

                // Line Style.
                ctx.fillStyle = "red";
                ctx.fill();
            }
        });
    }
};
