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

export const matchPath = (pathname, options) => {
  const { path, exact = false } = options;

  if (!path) {
    return {
      path: null,
      url: pathname,
      isExact: true
    };
  }

  const match = new RegExp(`^${path}`).exec(pathname);

  if (!match) return null;

  const [url] = match;
  const isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path,
    url,
    isExact
  };
};
