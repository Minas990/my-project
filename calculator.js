const result = document.getElementsByTagName("input")[0];
const btns = document.querySelectorAll("button");

function displaybtn(btnValue) {
  result.value += btnValue;
}
function evalthis() {
  try {
    result.value = String(Number(eval(result.value).toFixed(2)));
  } catch (Eror) {
    result.value = "Eror";
  }
}
function clearall() {
  result.value = "";
}
function undothis() {
  result.value = result.value.slice(0, result.value.length - 1);
}
