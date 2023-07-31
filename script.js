function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function flipColor() {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    document.getElementById("colorDisplay").textContent = color;
  }
  
  const colorButton = document.getElementById("colorButton");
  colorButton.addEventListener("click", flipColor);
  
