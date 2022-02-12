const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// ? Prompt to select media stream, pass to video element, & play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    alert("Oops, something went wrong...");
  }
}

button.addEventListener("click", async () => {
  button.disabled = true;
  // ? Start pic in pic
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

// ? On load
selectMediaStream();
