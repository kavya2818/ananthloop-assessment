const arraypair=(array,sum)=>{
  for (i = 0;i < array.length;i++) {
      let first = array[i];
      for (j = i + 1;j < array.length;j++) {
          let second = array[j];

          if ((first + second) == sum) {
      ('First: ' + first + ' Second: ' + second + ' SUM ' + sum);
      console.log('First: ' + first + ' Second: ' + second);
          }
      }
  }
}

let a = [1,2,3,6,30,25,21];

arraypair(a,27);