const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Todo esta correcto')
    } else {
      reject('Ooops! algo salio mal :(')
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));


const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True');
      }, 2000)
    } else {
      const error = new Error('Ooooops, Algo salio mal :(');
      reject(error);
    }
  });
}


somethingWillHappen2()
  .then(response => console.log(response)) // se pueden encadenar varios .then
  .catch(err => console.error(err));

// Correr varias promesas o encadenadas.

Promise.all([somethingWillHappen(), somethingWillHappen2()]) // recibe como argumentos las promesas.
  .then(response => {
    console.log('Array of Results', response)
  })
  .catch(err => {
    console.error(err);
  })