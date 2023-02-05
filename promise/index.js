const promiseX = (x) => {
  return new Promise((resolve, reject) => {
    if (typeof x === 'number') {
      resolve(x);
    } else {
      reject(new Error('return error'));
    }
  });
}

const logAndDouble = (num) => {
  console.log(num);
  return num * 2;
}

promiseX(100)
  .then((data) => logAndDouble(data))
  .then((data) => logAndDouble(data))