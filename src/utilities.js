export const displayKeypoints = (predictions,ctx) =>{
    if (predictions.length > 0) {
        for(var array of predictions){
            const x = array[0];
            const y = array[1];
            ctx.beginPath();
            ctx.arc(x,y,2,0,2*Math.PI);
            ctx.fill();
        }
        // predictions.forEach(prediction => {
        //     //console.log(keypoints.length);
        //     for (let i = 0; i < 16; i++) {
        //         const x = prediction[i][0];
        //         const y = prediction[i][1];
 
        //         ctx.beginPath();
        //         ctx.arc(x, y, 2, 0, 2 * Math.PI);
        //         ctx.fill();
        //     }
        // });
    }
}