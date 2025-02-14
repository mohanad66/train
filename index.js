function calculateScore(kills) {
  const score = kills * 5;
  return new Promise((resolve, reject) => {
    setTimeout(resolve(score), 3000);
  });
}
calculateScore(10).then((score) => {
  console.log(`player score is ${score}`);
});
