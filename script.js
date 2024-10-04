function generateNums(maxNum, amount) {
  const nums = [];
  const selectedNums = [];

  for (let i = 1; i <= maxNum; i++) {
    nums.push(i);
  }

  while (amount > 0) {
    const selectedNumIndex = Math.floor(Math.random() * nums.length);
    selectedNums.push(nums[selectedNumIndex]);
    nums.splice(selectedNumIndex, 1);
    amount--;
  }

  return selectedNums.sort((a, b) => a - b);
}

document.querySelector('.generate-btn').addEventListener('click', () => {
  const selectedNumbers = generateNums(50, 5);
  const selectedLuckyStars = generateNums(12, 2);

  console.log(selectedNumbers, selectedLuckyStars);

  document.querySelectorAll('.number').forEach((numberEl, index) => {
    numberEl.textContent = selectedNumbers[index];
  });

  document.querySelectorAll('.lucky-star').forEach((luckyStarEl, index) => {
    luckyStarEl.textContent = selectedLuckyStars[index];
  });
});
