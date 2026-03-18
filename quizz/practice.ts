function sumTwoNumbers(arr: number[], target: number): number[]{
  let result: number[] = [];

  for (let i = 0 ; i < arr.length; i++){
    for (let j = i + 1 ; j < arr.length; j++){
      if (arr[i] + arr[j] === target){
        result.push(arr[i], arr[j]);
        return result;
      }
    }
  }
  return result;
}