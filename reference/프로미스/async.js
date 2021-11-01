import fetch from "node-fetch";

const getGithubUserName = async id => {
  const res = await fetch(`https://api.github.com/users/${id}`);
  const { name } = await res.json();
  console.log(name);
}

getGithubUserName('coconutstd');


async function foo() {
  const res = await Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(1), 1000))
  ]);
  console.log(res);
}

foo();