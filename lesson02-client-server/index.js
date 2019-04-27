const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.headers['cookie']);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    return res.end(`<input onkeydown="console.log('change')"><script>var inp = document.getElementsByTagName('input')[0]; inp.oninput = function(e) {
      console.log(e.target.value)
    }; inp.addEventListener('input', function(e) {
      console.log('New listener', e.target.value)
    })</script>`);
  }

  if (req.url.includes('/hello')) {
    res.setHeader('Content-Type', 'application/json');
    // authorization
    // if (authorized) {
    //   generate user_id
    //   set cookie sess=user_id
    // }

    res.setHeader('Set-Cookie', 'jgsession=1234');
    return res.end('{"message": "Hello, World!"}');
  }

  if (req.url.includes('about')) {
    res.setHeader('Content-Type', 'text/html');
    return res.end('<li>About</li>');
  }

  res.statusCode = 404; // = uspeh
  res.setHeader('Content-Type', 'text/html');
  res.end('Error: Page not found 404');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
