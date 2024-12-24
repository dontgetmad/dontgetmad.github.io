    function showRandomImage() {
        const imageQuantity = 229; // Total number of images
        const randomIndex = Math.floor(Math.random() * imageQuantity);
        const formats = ['jpeg', 'jpg', 'png', 'webp']; // Allowed formats

        // Attempt to load the random image with different formats
        let loaded = false;
        const imgElement = document.getElementById('randomImage');

        for (const format of formats) {
            if (!loaded) {
                const testImage = new Image();
                testImage.src = `images/image_${randomIndex}.${format}`;
                testImage.onload = () => {
                    imgElement.src = testImage.src;
                    console.log(`Image loaded: image_${randomIndex}.${format}`);
                    loaded = true;
                };
                testImage.onerror = () => {
                    console.warn(`Failed to load: image_${randomIndex}.${format}`);
                };
            }
        }

        if (!imgElement) {
            console.error("Image element with id 'randomImage' not found.");
        }
    }


document.addEventListener("DOMContentLoaded", showRandomImage);

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
