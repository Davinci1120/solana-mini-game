function playGame(guess, options = {}) {
  const min = 1;
  const max = 25;
  const rewardAmount = 25;

  const number =
    Math.floor(Math.random() * (max - min + 1)) + min;

  const win = Number(guess) === number;

  if (win) {
    return {
      win: true,
      number: number,
      reward: rewardAmount,
      message: "🎉 Correct! You win 25 tokens!"
    };
  }

  return {
    win: false,
    number: number,
    reward: 0,
    message: `❌ Wrong! The number was ${number}`
  };
}

module.exports = { playGame };