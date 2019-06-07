export const historyPush = path => {
  history.pushState({}, null, path);
};

export const historyReplace = path => {
  history.replaceState({}, null, path);
};
