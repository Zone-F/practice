var count = 1;
var container = document.getElementById('container');

function getUserAction(e, a) {
  container.innerHTML = count++;
};
function debounce(fn, wait, immediate) {
  let timeout, result;
  return function () {
    let context = this
    let args = arguments
    timeout && clearTimeout(timeout);
    if (immediate) {
      //如果已经执行过，就不再执行
      let callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      callNow && (result = fn.apply(context, args));
    } else {
      timeout = setTimeout(function () {
        result = fn.apply(context, args)
      }, wait)
    }
    return result;
  }
}
container.onmousemove = debounce(getUserAction, 1000);