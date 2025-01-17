function imageOrVideoRandomiser() {
    const imgOrVid = Math.floor(Math.random() * 2);
    if (imgOrVid == 0) {
        showRandomImage();
    } else if (imgOrVid == 1) {
        showRandomVideo();
    }
}

function showRandomImage() {
  const image_quantity = 276; // Number of images available
  const randomIndex = Math.floor(Math.random() * image_quantity);
  const imageElement = document.createElement('img');

  const imgPath = `images/image_${randomIndex}.jpeg`;
  imageElement.src = imgPath;
  console.log("Image path:", imgPath);
  const imageContainer = document.getElementById('image-container');

  imageContainer.append(imageElement);
}


function showRandomVideo() {
    let video_quantity = 49;
    const randomIndex = Math.floor(Math.random() * video_quantity + 1);
    const videoElement = document.createElement('video');

    videoElement.controls = true; 
    videoElement.autoplay = true;
    videoElement.loop = true; 

    const videoSource = `https://dontgetmad.github.io/videos/video_${randomIndex}.MP4`;
    console.log(videoSource);
    const videoSourceElement = document.createElement('source');
    videoSourceElement.src = videoSource;
    videoSourceElement.type = 'video/MP4';
    videoElement.append(videoSourceElement);

    const videoContainer = document.getElementById('video-container');
    videoContainer.append(videoElement);
}

document.addEventListener("DOMContentLoaded", imageOrVideoRandomiser);

function generateBarcode() {
    barcodeContainer.innerHTML = '';
    input = document.getElementById("input").value;
    const lines = input.split('\n').filter(line => line.trim() !== '');
    console.log("starting...");
    try {
        
        for (let i  = 0; i < lines.length; i++) {
            const barcodeDiv = document.createElement('div');
            barcodeDiv.innerHTML = `<svg id="barcode${i}"></svg>`;
            barcodeContainer.appendChild(barcodeDiv);
            JsBarcode(`#barcode${i}`, lines[i]);

            document.getElementById("generatedAmount").innerHTML = lines.length;
        }
    } catch (error) {
        console.log("Error generating barcode:", error);
    }
    console.log(`${lines.length} barcodes generated`);
}
