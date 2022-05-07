export const getMergeSortAnimations = (array: number[]) => {
  const animations: any[] = []
  if (array.length <= 1) return array
  const auxiliaryArray = array.slice()
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
  return animations
}

const mergeSortHelper = (
  mainArray: number[],
  startIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: number[][]
) => {
  if (startIdx === endIdx) return
  const middleIdx = Math.floor((startIdx + endIdx) / 2)
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations)
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations)
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations)
}

const doMerge = (
  mainArray: number[],
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: number[][]
) => {
  let k = startIdx
  let i = startIdx
  let j = middleIdx + 1
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j])
    animations.push([i, j])
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]])
      mainArray[k++] = auxiliaryArray[i++]
    } else {
      animations.push([k, auxiliaryArray[j]])
      mainArray[k++] = auxiliaryArray[j++]
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i])
    animations.push([i, i])
    animations.push([k, auxiliaryArray[i]])
    mainArray[k++] = auxiliaryArray[i++]
  }
  while (j <= endIdx) {
    animations.push([j, j])
    animations.push([j, j])
    animations.push([k, auxiliaryArray[j]])
    mainArray[k++] = auxiliaryArray[j++]
  }
}
