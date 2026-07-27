function josephus(init, kill) {
  let survivor = 0;
  for (let i = 2; i <= init; i++) {
    survivor = (survivor + kill) % i;
  }
  return survivor;
}
