function doSomething(next) {
  setTimeout(() => {
    console.log('do something');
    const result = 2 + 2;
    next(result);
  }, 100);
}

function doSomethingElse(next) {
  setTimeout(() => {
    console.log('do something else');
    next();
  }, 100);
}

// doSomething();
// doSomethingElse();

function middleware(fn) {
  const next = data => console.log('do casual thing', data);
  fn(next);
}

middleware(doSomething);
middleware(doSomethingElse);
