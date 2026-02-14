const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const surprise = document.getElementById("surprise");

let yesScale = 1;
let clickCount = 0;

const messages = [
  "почему нет?",
  "ну пожалуйста",
  "Кот, не поступай так со мнойййй",
  "ПОЖАЛУЙСТА",
  "Ты что меня не любишь??"
];

noBtn.addEventListener("click", () => {

  // Увеличиваем кнопку "Да"
  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Меняем текст кнопки "Нет"
  if (clickCount < messages.length) {
    noBtn.textContent = messages[clickCount];
    clickCount++;
  } else {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  noBtn.style.display = "none";
  yesBtn.style.transform = "scale(1.5)";
});
