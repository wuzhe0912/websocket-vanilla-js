// 在未使用 arrow function 的情況下，this 的指向會因為執行的地方不同而產生變異，這時候就需要使用箭頭函數來消除 this 的變異。
class CarInfo {
  title: string = "June Car";

  constructor() {}

  // not use arrow function
  // getCar() {
  //   console.log(1, this);
  // }

  // use arrow function 確保 this 永遠指向當前的物件。
  getCar = () => {
    console.log(2, this);
  };
}

const carInfo = new CarInfo();
carInfo.getCar();

const carInfo2 = {
  title: "July Car",
  getCar2() {},
};

carInfo2.getCar2 = carInfo.getCar;
carInfo2.getCar2();
