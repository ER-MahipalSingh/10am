const authFun = () => {
  let isAuth = true;
  const auth = new Promise((res, rej) => {
    if (isAuth) {
      isAuth = true;
      console.log("Auth is done");
    } else {
      console.log("Auth is failed");
    }
  });
  auth.then((msg) => console.log(msg)).catch((err) => console.log(err));
};
authFun();

function fetchData(id) {
  return new Promise((res, rej) => {
    const user = { 1: "Jhon", 2: "Alisha" };
    if (user[id]) {
      res(`User found ${user[id]}`);
    } else {
      rej("User not found");
    }
  });
}
fetchData(11)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
