for (x = 1; x <= 100; x++){
    let out = "";
    if (x % 3 == 0) out += 'Fizz';
    if (x % 5 == 0) out += 'Buzz';
    console.log(out || x);
}