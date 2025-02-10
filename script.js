// Element used by this script
const inputbox = document.getElementById("input-box");
const generatebutton = document.getElementById("generate-button");
const imagezone = document.getElementById("image-zone")

// Function used to generate a QRCode thanks to goqr.me/api/
function generate(){
    var text = inputbox.value;
    if (text === ""){
        return;
    }
    else {
        var image = document.createElement("img");
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text;
        imagezone.appendChild(image);
    }
}

// The task is added if you left-click on the OK button
generatebutton.addEventListener("click", generate);

// The task is added if you press enter key
inputbox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        generate();
    }
});