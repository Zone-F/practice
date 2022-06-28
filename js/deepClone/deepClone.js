function clone(target, map = new WeakMap()) {
  if (!isObject(target)) return target;

  let cloneTarget = Array.isArray(target) ? [] : {};
  
  if (map.get(target)) return map.get(target);
  map.set(target, cloneTarget);

  for (const key in target) {
    cloneTarget[key] = clone(target[key], map);
  }
  return cloneTarget;
}

function isObject(target) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}

module.exports = clone;
