const object1 = {
  name: "Justin",
  age: 35,
  education: "PhD",
}

const object2 = {
  name: "Full Stack web application development",
  level: "Intermediate studies",
  size: 5,
  hello(){
    console.log("Hello")
  }
}

const object3 = {
  name: {
    first: "Justin",
    last: "Akridge",
  },
  grades: [2,3,4,7],
  department: "Standford University",
}

const sum = (p1, p2) => {
  return p1 + p2;
}

const result = sum(1, 5);

const square = p => p * p

const ans = square(4)
console.log(ans)

const arr = [1, 3, 6]

const newArr = arr.map(value => value * 2)
console.log(newArr)