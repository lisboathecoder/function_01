function segundoMaior(arr) {
  if (arr.length < 2) {
    return [0];
  }
  let maior = arr[0];
  let segundo = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      segundo = maior;
      maior = arr[i];
    } else if (arr[i] < maior && (segundo = maior || arr[i] > segundo)) {
      segundo = arr[i];
    }
  }
  console.log(segundo === maior ? maior : segundo);
}
segundoMaior([70, 90, 100]);
