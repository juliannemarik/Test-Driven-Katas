const wrap = (line, maxLen) => {
  let returnString = '';
  if (maxLen === 0) return returnString;
  let counter = 0;
  for (let i = 0; i < line.length; i++){
    if (counter >= maxLen-1) {
      returnString += `${line[i]}\n`
      counter = 0;
    } else {
      returnString += line[i]
      counter++;
    }
  }

  return returnString;
};


let word = "lorem ipsum"

console.log(word.indexOf('lorem'))
console.log(word.lastIndexOf('lorem'))






module.exports = wrap;
