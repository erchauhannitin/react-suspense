const fetchPerson = () => {
  return fetch("https://randomuser.me/api")
    .then((x) => x.json())
    .then((x) => x.results[0])
    .catch((error) => console.error);
};

const wrapPromise = (promise) => {
  let status = "pending";
  let result = "";

  let suspender = promise.then(
    (r) => {
      console.log("result - ", r);
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

export const randomNumber = () => {
  return new Promise((res) => setTimeout(() => res(Math.random()), 3000));
};

export const createResource = () => {
  return {
    person: wrapPromise(fetchPerson()),
    number: wrapPromise(randomNumber()),
  };
};
