//QUESTION 2

function reverseWords(word) {
  let newArr = []
  for (let i = word.length - 1; i >= 0; i--) {
    let getReverseWords = newArr.push(word[i])
  }
  return newArr.join("")
}
