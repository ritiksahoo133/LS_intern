function test() {
  let x = 5;
  test2();
  function test2() {
    console.log(x);
  }
}
test();
