document.addEventListener("DOMContentLoaded", imageOrVideoRandomiser);


function imageOrVideoRandomiser() {
    const imgOrVid = Math.floor(Math.random() * 2);
    if (imgOrVid == 0) {
        showRandomImage();
    } else if (imgOrVid == 1) {
        showRandomVideo();
    }
}

function showRandomImage() {
  const image_quantity = 323; // Number of images available
  const randomIndex = Math.floor(Math.random() * image_quantity);
  if (randomIndex >= 252 && randomIndex <= 276) {
    randomIndex = Math.floor(Math.random() * image_quantity);
  }

  const imageElement = document.createElement('img');

  const imgPath = `images/image_${randomIndex}.jpeg`;
  imageElement.src = imgPath;
  console.log("Image path:", imgPath);
  const imageContainer = document.getElementById('image-container');

  imageContainer.append(imageElement);
}


function showRandomVideo() {
    let video_quantity = 63;
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


function generateBarcode() {
    barcodeContainer.innerHTML = '';
    input = document.getElementById("input").value;
    const lines = input.split('\n').filter(line => line.trim() !== '');
    console.log("starting...");
    try {
        
        for (let i  = 0; i < lines.length; i++) {
            const barcodeDiv = document.createElement('div');
            barcodeDiv.innerHTML = `<svg id="barcode${i}"></svg>`;
            const barcodeNumber = document.createElement('div');
            barcodeNumber.textContent = `Barcode ${i + 1}`;
            barcodeNumber.style.color = 'blue';
            barcodeContainer.appendChild(barcodeNumber);
            barcodeContainer.appendChild(barcodeDiv);
            JsBarcode(`#barcode${i}`, lines[i]);
            document.getElementById("generatedAmount").innerHTML = lines.length;
        }
    } catch (error) {
        console.log("Error generating barcode:", error);
    }
    console.log(`${lines.length} barcodes generated`);
}

function clearBarcodes() {
      document.getElementById("barcodeContainer").innerHTML = "";
      document.getElementById("input").value = "";
      document.getElementById("generatedAmount").innerHTML = "";
}


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
