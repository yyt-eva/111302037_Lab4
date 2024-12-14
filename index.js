// Function to handle sound playback
function playSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;
        default:
            console.log(key);
    }
}

// Function to animate the button
function animateButton(currentKey) {
    const activeButton = document.querySelector("." + currentKey);

    if (activeButton) {
        activeButton.classList.add("pressed");

        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

// Detecting button clicks
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
        const buttonKey = this.classList[0]; // Get the class representing the key
        playSound(buttonKey);
        animateButton(buttonKey);
    });
});

// Detecting keyboard presses
document.addEventListener("keydown", event => {
    playSound(event.key);
    animateButton(event.key);
});


// 簡單測試程式碼
document.querySelectorAll(".drum").forEach(button => {
    console.log("Found button:", button.textContent); // 確認找到按鈕
    button.addEventListener("click", function () {
        alert("Button clicked: " + this.textContent); // 確認按鈕點擊事件
    });
});

document.addEventListener("keydown", event => {
    console.log("Key pressed:", event.key); // 確認按鍵事件觸發
    alert("Key pressed: " + event.key); // 彈出按鍵字母
});

