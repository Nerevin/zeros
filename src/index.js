module.exports = function zeros(expression) {
  let input =  expression.split('*');
  let countTwo = 0;
  let countFive = 0;

  input.forEach(function (index) {
    if (index.match(/.*!!/)) {
      let a = parseInt(index);
      let i = 0;
      if (a % 2 == 0) {
        i = 2;
      }
      else {
        i = 3;
      }
      while (i <= a) {
        for (let j = i; ; ) {
          if (j % 5 == 0) {
          	j /= 5
            countFive++;
          }
          else if (j % 2 == 0) {
          	j /= 2
            countTwo++;
          }
          else break;
        }
        i += 2;
      }
    }
    else {
      let a = parseInt(index);
      let i = 1;
      while (i <= a) {
        for (let j = i; ;) {
          if (j % 5 == 0) {
          	j /= 5
            countFive++;
          }
          else if (j % 2 == 0) {
          	j /= 2
            countTwo++;
          }
          else break;
        }
        i++;
      }
    }
  })
  return Math.min(countTwo, countFive);
}