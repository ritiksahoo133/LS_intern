let b = 120;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(b);

const d = 100;
{
  const d = 20;
  {
    const d = 200;
  }
}
console.log(d);
