function doException() {
  throw new Error('에러입니다!');
}

function main() {
  try {
    doException();
  } catch(e) {
    console.log(e);
  } finally {
    console.log('마무리');
  }

}

main();