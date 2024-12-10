function generateBarcode() {
    barcodeContainer.innerHTML = '';
    input = document.getElementById("input").value;
    const lines = input.split('\n').filter(line => line.trim() !== '');
    try {
        let image_quantity = 98;
        const randomIndex = Math.floor(Math.random() * image_quantity) + 1;
        const imgElement = document.getElementById('randomImage');
        imgElement.src = `image_${randomIndex}.jpeg`;
        
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
