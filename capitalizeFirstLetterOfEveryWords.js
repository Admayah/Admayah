//QUESTION 3

function capitalizeFirstLetter(words) {
  let wordsToLowerCase = words.toLowerCase()
  const splitWords = wordsToLowerCase.split(" ")
  let newArrOfWords = splitWords.map((element) => {
    const firstLetterToCapital = element[0].toUpperCase() + element.substring(1)
    return firstLetterToCapital
  })
  return newArrOfWords.join(" ")
}
