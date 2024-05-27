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

    var totalPrice = gpuPrice + cpuPrice + motherboardPrice + ssdPrice + pcCasePrice + hardDrivePrice + monitorPrice + ramPrice + vgaPrice;
    document.getElementById("total-price").textContent = "$" + totalPrice;
}
