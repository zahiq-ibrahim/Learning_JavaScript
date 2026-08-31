const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {},
      opts,
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  //let position;

  let posData;
  let timeData;
  try {
    posData = await getPosition();
    timeData = await setTimer(2000);
  } catch(error) {
    console.log(error);
  }
  console.log(timeData, posData);
  // .then((posData) => {
  //     position = posData;
  //   return setTimer();
  // })
  // .catch(err => {
  //     console.log(err);
  //     return "on we go";
  // })
  // .then((data) => {
  //   console.log(data, position);
  // });
  //   setTimer(2000).then(() => {
  //     console.log("Timer done");
  //   });

  //   console.log("Clicked!");
}

button.addEventListener("click", trackUserHandler);


Promise.race([ getPosition(), setTimer(1000)]).then(data => {
    console.log(data);
});

Promise.all([  getPosition(), setTimer(1000)]).then(promiseData => {
    console.log(promiseData);
});

//Promise.allSettled


