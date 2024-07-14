// Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure
function x() {
  const a = 10;
  return function y() {
    console.log(a);
  };
}

const z = x();
console.log(z);
z();
