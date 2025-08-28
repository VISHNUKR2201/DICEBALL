function rollDice() {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 7); 

    if (random > 0) {
      resolve(random);
    } else {
      reject("invalid roll");
    }
  });
}


rollDice()
  .then(result => {
    console.log("rolled:", result);
  })
  .catch(error => {
    console.log(error);
  });

