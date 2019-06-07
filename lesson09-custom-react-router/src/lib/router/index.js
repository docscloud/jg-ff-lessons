const instances = [];

export const register = cmp => instances.push(cmp);

export const unregister = cmp => instances.splice(instances.indexOf(cmp), 1);

export const historyPush = path => {
  history.pushState({}, null, path);
  instances.forEach(instance => instance.forceUpdate());
};

export const historyReplace = path => {
  history.replaceState({}, null, path);
  instances.forEach(instance => instance.forceUpdate());
};
