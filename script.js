document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("changeText").addEventListener("click", function () {
        var textToChange = document.getElementById("textToChange");
        textToChange.textContent = "Wow, The text is actually changing!";
        textToChange.style.color = "red";
        textToChange.style.fontSize = "20px";
        textToChange.style.fontWeight = "bold";
    });

    document.getElementById("toggleElement").addEventListener("click", function () {
        var targetElement = document.getElementById("toggleElementTarget");
        targetElement.style.display = (targetElement.style.display === "none") ? "block" : "none";
    });

    const button = document.getElementById("btn");
    const message = document.getElementById("message");
  
    button.addEventListener("click", () => {
      message.textContent = "Yeay, You finally clicked the button!";
      message.style.color = "blue";
      message.style.fontSize = "18px";
      message.style.fontWeight = "normal";
      message.style.backgroundColor = "lightPink";
      message.margin = "10px 0";
      message.style.padding = "10px";
      message.style.border = "1px solid black";
      message.style.borderRadius = "5px";
      message.style.transition = "all 0.5s ease-in-out";
      message.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      message.style.transform = "scale(1.05)";
      message.style.opacity = "1";
    });

       const colorBox = document.getElementById("colorBox");
    const changeColorButton = document.getElementById("changeColor");
    changeColorButton.addEventListener("click", function () {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colorBox.style.backgroundColor = randomColor;
    });    
});