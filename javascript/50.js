function myPow(x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let pow = 1;

  while (n) {
    if (n & 1) {
      pow *= x;
    }
    x *= x;
    n >>= 1;
  }
  return pow;
}
 
  let res = myPow(2, 5);
  console.log(res);
 
{
  let res = myPow(2, -5);
  console.log(res);
}
