const body = document.getElementById("body");

const button = document.getElementById("random");

const color1 = document.querySelector("#color1");

const color2 = document.querySelector("#color2");

const color3 = document.querySelector("#color3");

const generateImage = () => {
    const direction = Math.round(Math.random() * 360);

    const r1 = Math.round(Math.random() * 255);
    const g1 = Math.round(Math.random() * 255);
    const b1 = Math.round(Math.random() * 255);
    const a1 = Math.round(Math.random() * 10) / 10;

    const r2 = Math.round(Math.random() * 255);
    const g2 = Math.round(Math.random() * 255);
    const b2 = Math.round(Math.random() * 255);
    const a2 = Math.round(Math.random() * 10) / 10;

    const r3 = Math.round(Math.random() * 255);
    const g3 = Math.round(Math.random() * 255);
    const b3 = Math.round(Math.random() * 255);
    const a3 = Math.round(Math.random() * 10) / 10;

    const background = body.style.background = `linear-gradient(${direction}deg, rgba(${r1},${g1},${b1},${a1}), rgba(${r2},${g2},${b2},${a2}), rgba(${r3},${g3},${b3},${a3}))`;
}

const setGradient = () => {
  body.style.background = `linear-gradient(to bottom right, ${color1.value}, ${color2.value}, ${color3.value})`;
}

  button.addEventListener("click", generateImage);
  color1.addEventListener("input", setGradient);
  color2.addEventListener("input", setGradient);
  color3.addEventListener("input", setGradient);
