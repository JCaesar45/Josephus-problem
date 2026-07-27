document.addEventListener("DOMContentLoaded", () => {
  const nInput = document.getElementById("n-input");
  const kInput = document.getElementById("k-input");
  const computeBtn = document.getElementById("compute-btn");
  const resultDisplay = document.getElementById("result-display");

  const josephus = (n, k) => {
    let survivor = 0;
    for (let i = 2; i <= n; i++) {
      survivor = (survivor + k) % i;
    }
    return survivor;
  };

  computeBtn.addEventListener("click", () => {
    const n = parseInt(nInput.value, 10);
    const k = parseInt(kInput.value, 10);

    if (isNaN(n) || isNaN(k) || n <= 0 || k <= 0) {
      resultDisplay.textContent = "ERR";
      resultDisplay.style.color = "#ef4444";
      return;
    }

    const result = josephus(n, k);
    resultDisplay.textContent = result;
    resultDisplay.style.color = "";
  });
});
