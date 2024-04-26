import "./scss/main.scss";

const actionBtn = document.querySelector(".advice-card__action");
const adviceId = document.querySelector(".advice-card__id");
const quoteDisplay = document.querySelector(".advice-card__quote");

const ADVICE_URL = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  const response = await fetch(ADVICE_URL);
  const data = await response.json();
  return data.slip;
};

const displayAdvice = async () => {
  const slip = await getAdvice();
  console.log(slip);
  if (slip) {
    adviceId.innerHTML = slip.id;
    quoteDisplay.innerHTML = `"${slip.advice}"`;
  }
};

actionBtn.addEventListener("click", displayAdvice);
