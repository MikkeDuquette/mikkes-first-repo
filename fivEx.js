function getEven(x){
    if (x == 0) return true;
    if (x == 1) return false;
    if (x < 0){
      return getEven(-x)
    }
    else return getEven( x - 2);
  }
  
  console.log(getEven(-51));
  