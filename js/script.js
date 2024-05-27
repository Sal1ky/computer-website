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

    //var gpuImage = document.getElementById("gpu-select").options[document.getElementById("gpu-select").selectedIndex].getAttribute("data-image");
    //document.getElementById("gpu-image").src = gpuImage;
    
    // var gpuSelect = document.getElementById("gpu-select");
    // var gpuImage = document.getElementById("gpu-image");
    // var selectedOption = gpuSelect.options[gpuSelect.selectedIndex];
    // var gpuImageSrc = selectedOption.getAttribute("data-image");
    
    // // If a valid GPU option is selected (price is not zero)
    // if (gpuPrice !== 0) {
    //     // Update the image source to the selected GPU image
    //     gpuImage.src = gpuImageSrc;
    //     // Remove the 'hidden' class to display the image
    //     gpuImage.classList.remove("hidden");
    // } else {
    //     // If no GPU option is selected (price is zero), hide the image
    //     gpuImage.classList.add("hidden");
    // }


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
    
    // Call function to show or hide image for GPU
    showImage(gpuSelect, "gpu-image");
    
    // Similarly, call the function for each component selection
    showImage(cpuSelect, "cpu-image");
    showImage(motherboardSelect, "motherboard-image");
    showImage(ssdSelect, "ssd-image");
    showImage(pcCaseSelect, "pc-case-image");
    showImage(hardDriveSelect, "hard-drive-image");
    showImage(monitorSelect, "monitor-image");
    showImage(ramSelect, "ram-image");
    showImage(vgaSelect, "vga-image");

    console.log(gpuPrice, gpuSelect)
    
    // console.log(gpuPrice, gpuSelect)
    // var totalPrice = gpuPrice + cpuPrice + motherboardPrice + ssdPrice + pcCasePrice + hardDrivePrice + monitorPrice + ramPrice + vgaPrice;
    // document.getElementById("total-price").textContent = "$" + totalPrice;
    // console.log("totalPrice:", totalPrice)
    // Calculate the total price
    var totalPrice = parseInt(gpuSelect.value) + parseInt(cpuSelect.value) ;
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
}

// Call initializePage function when the page is loaded
window.onload = initializePage;