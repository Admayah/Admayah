//QUESTION 4

function findPossibleSum(array, target) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        arr = []
        arr.push(array[i])
        arr.push(array[j])
        newArr.push(arr)
      }
    }
  }
  return newArr
}
