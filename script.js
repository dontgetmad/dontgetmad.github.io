function showRandomImage() {
    let image_quantity = 229;
    const randomIndex = Math.floor(Math.random() * image_quantity);
    const imgElement = document.getElementById('randomImage');
	if (imgElement) {
        imgElement.src = `images/image_${randomIndex}.jpeg`;
        console.log(`---`);
    } else {
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
