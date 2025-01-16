function imageOrVideoRandomiser() {
    const imgOrVid = Math.floor(Math.random() * 2);
    if (imgOrVid == 0) {
        showRandomImage();
    } else if (imgOrVid == 1) {
        showRandomVideo();
    }
}

function showRandomImage() {
    let image_quantity = 276;
    const randomIndex = Math.floor(Math.random() * image_quantity);
    const imgElement = document.getElementById('randomImage');
    if (imgElement) {
        imgElement.src = `images/image_${randomIndex}.jpeg`;
    } else {
        console.error("Image element with id 'randomImage' not found.");
    }
}

function showRandomVideo() {
    let video_quantity = 41;
    const randomIndex = Math.floor(Math.random() * video_quantity + 1);
    const videoElement = document.createElement('video');

    videoElement.controls = true; 
    videoElement.autoplay = true; 
    videoElement.loop = false; 

    const videoSource = `videos/video_${randomIndex}.mp4`;
    console.log(videoSource);
    const videoSourceElement = document.createElement('source');
    videoSourceElement.src = videoSource;
    videoSourceElement.type = 'video/mp4';
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
