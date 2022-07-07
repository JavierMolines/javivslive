const baseHtml = (js: string) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #00ff00;
        }
        h1 {
          padding-bottom: 10px;
          border-bottom: 2px solid white;
          width: 30%;
        }
        </style>
      </head>
      <body>
        <h1>Console</h1>
        <script type="module">
        ${js}
        </script>
      </body>
    </html>`
}

export { baseHtml }
