function movePlayer(direction) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(direction), 3000);
  });
}
movePlayer.then((direction) => {
  console.log(`the player moved ${direction}`);
});
