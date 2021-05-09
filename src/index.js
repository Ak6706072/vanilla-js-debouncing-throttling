import "./styles.css";
const input = document.getElementById("input");

const getdata = (url, value) => {
  console.log(url, value, input.value);
};

const throttle = (func, limit) => {
  let flag = true;
  return () => {
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
const betterFxn = throttle(getdata, 200);

input.addEventListener("keypress", betterFxn);
