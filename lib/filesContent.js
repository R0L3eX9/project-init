const jsFileContent = `console.log('Hello World')`;

const htmlFileContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>Hello World</title>
</head>
<body>
  <h1>Hello World</h1>
  <script src="./main.js"></script>
</body>
</html>
`;

const cssFileContent = `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;

module.exports = {jsFileContent, htmlFileContent, cssFileContent};