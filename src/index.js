
exports.min = function min (array) {
  if(arguments.length == 0 || array.length == 0){
    return 0
  }
  return Math.min(...array)
}

exports.max = function max (array) {
  if(arguments.length == 0 || array.length == 0){
    return 0
  }
  return Math.max(...array)
}

exports.avg = function avg (array) {
  if(arguments.length == 0 || array.length == 0){
    return 0
  }
  let sum = array.reduce((prev, cur) => cur += prev);
  let averrage = sum / array.length;

  return averrage;
}
