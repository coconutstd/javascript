
// json 형식은 키값을 작은따옴표가 아니라 큰따옴표로 묶어야한다.
const jsonObj = {
  "name": "Lee",
  "age": 20,
  "alive": true,
  "hobby": ["traveling", "tennis"]
}

// 일반 자바스크립트 객체
const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis']
}

const json = JSON.stringify(obj);
console.log(typeof json, json)

const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);

function filter(key, value) {
  return typeof value === 'number' ? undefined : value;
}

const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);


const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'JavaScript', completed: false }
];

const json2 = JSON.stringify(todos, null, 2);
console.log(typeof json2, json2);


const obj2 = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis']
};

const json3 = JSON.stringify(obj2);

const parsed = JSON.parse(json3);
console.log(typeof parsed, parsed);
