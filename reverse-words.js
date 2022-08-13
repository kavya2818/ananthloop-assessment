const reverseWord = (sentence)=>{
  const words = sentence.split(" ")
  const revWord = words.reverse()
  return revWord.join(" ")
  }
  let sentence="India is my Country"
  console.log(reverseWord(sentence));
  
  