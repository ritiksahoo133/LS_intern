setTimeout(function () {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
function attachEventListener() {
  let count = 0;
  document.getElementById("clickme").addEventListener("click", function (e) {
    setTimeout(() => {
      console.log("Timer");
    }, 3000);
  });
}
attachEventListener();
