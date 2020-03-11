function isEven(a){
  if (a % 2 == 0){
    return true;
  }
  if (a % 2 == 1) {
    return false;
  }
  else {
    return null;
  }
}

console.log(isEven(-4));