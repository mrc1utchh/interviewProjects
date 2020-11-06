const videoElement = document.getElementById("video");
const button = document.getElementById("button");
let captureStream = await navigator.mediaDevices.getDisplayMedia();

//prompt to select media stream, pass to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }
    }catch(error){
        //cathc error here
        console.log("Whoops, error here.", error);
    }
}

button.addEventListener("click", async ()=>{
    //disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;
})

// on load
selectMediaStream();

//on load
getDisplayMedia();