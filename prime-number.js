const checkPrime=(number)=>{
  if (number<=1){
      return false;
  }else{
      for (let i=2;i<number;i++){
          if (number % i === 0){
              return false;
          }
      }
      return true;
  }
}
let num = 2341;
let temp =''+num
let intArr=[...temp].reduce((acc,n)=>acc.concat(+n),[]);
let primeArr=[];
intArr.forEach(function (element){
  const isPrime =checkPrime(element);
  if(isPrime){
      primeArr.push(element);
      console.log('is a prime number');
  }
});
console.log(primeArr);