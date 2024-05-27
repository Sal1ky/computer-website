// Function to initialize the page and hide all images
function initializePage() {
    var images = document.querySelectorAll("img.hidden");
    images.forEach(function(image) {
        image.classList.add("hidden");
    });
}

// Function to calculate the total price 
function calculateTotal() {
    var gpuPrice = parseInt(document.getElementById("gpu-select").value);
    var cpuPrice = parseInt(document.getElementById("cpu-select").value);
    var motherboardPrice = parseInt(document.getElementById("motherboard-select").value);
    var ssdPrice = parseInt(document.getElementById("ssd-select").value);
    var pcCasePrice = parseInt(document.getElementById("pc-case-select").value);
    var hardDrivePrice = parseInt(document.getElementById("hard-drive-select").value);
    var monitorPrice = parseInt(document.getElementById("monitor-select").value);
    var ramPrice = parseInt(document.getElementById("ram-select").value);
    var vgaPrice = parseInt(document.getElementById("vga-select").value);
    var powersupplyPrice = parseInt(document.getElementById("powersupply-select").value);

    // Get the selected option elements for each component
    var gpuSelect = document.getElementById("gpu-select");
    var cpuSelect = document.getElementById("cpu-select");
    var motherboardSelect = document.getElementById("motherboard-select");
    var ssdSelect = document.getElementById("ssd-select");
    var pcCaseSelect = document.getElementById("pc-case-select");
    var hardDriveSelect = document.getElementById("hard-drive-select");
    var monitorSelect = document.getElementById("monitor-select");
    var ramSelect = document.getElementById("ram-select");
    var vgaSelect = document.getElementById("vga-select");
    var powersupplySelect = document.getElementById("powersupply-select");
    
    // Call function to show or hide image for GPU
    showImage(gpuSelect, "gpu-image");
    showImage(cpuSelect, "cpu-image");
    showImage(motherboardSelect, "motherboard-image");
    showImage(ssdSelect, "ssd-image");
    showImage(pcCaseSelect, "pc-case-image");
    showImage(hardDriveSelect, "hard-drive-image");
    showImage(monitorSelect, "monitor-image");
    showImage(ramSelect, "ram-image");
    showImage(vgaSelect, "vga-image");
    showImage(powersupplySelect, "power-supply-image");

    // console.log(gpuPrice, gpuSelect)
    var totalPrice = gpuPrice + cpuPrice + motherboardPrice + ssdPrice + pcCasePrice + hardDrivePrice + monitorPrice + ramPrice + vgaPrice + powersupplyPrice;
    console.log("powersupplyPrice:", powersupplyPrice)
    console.log("totalPrice:", totalPrice)
    // Update the displayed total price
    document.getElementById("total-price").textContent = "$" + totalPrice;
}

// Function to show or hide image based on selected option
function showImage(selectElement, imageId) {
    // Get the price of the selected option
    var price = parseInt(selectElement.value);
    // Get the image element
    var image = document.getElementById(imageId);
    // Check if the image element exists
    if (image) {
        // Get the selected option element
        var selectedOption = selectElement.options[selectElement.selectedIndex];
        // Get the image source from the selected option's data attribute
        var imageSrc = selectedOption.getAttribute("data-image");

        // If a valid option is selected (price is not zero)
        if (price !== 0) {
            // Update the image source
            image.src = imageSrc;
            // Remove the 'hidden' class to display the image
            image.classList.remove("hidden");
        } else {
            // If no option is selected (price is zero), hide the image
            image.classList.add("hidden");
        }
    } else {
        console.error("Image element with ID '" + imageId + "' not found.");
    }
}

// Call initializePage function when the page is loaded
window.onload = initializePage;