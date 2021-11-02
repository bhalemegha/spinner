const spinner = function(){
  let arr = ['|','/','-','\\'];
  for (let i = 0, timeOut = 100;timeOut <= 1800; i++,timeOut += 200) {
    setTimeout(() => process.stdout.write(`\r${arr[i]}   `), timeOut);
  }
};