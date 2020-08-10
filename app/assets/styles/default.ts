export const defaultStyle = `
  ::-webkit-input-placeholder {
    font-family: Arial, sans-serif;
    font-size:14px;
    color:#4A4A4A;
  }
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  body, html {
    font-family: Arial, sans-serif;
    color: #4A4A4A;
    font-size: 14px;
    height: 100%;
  }
  a {
    color: #888;
    text-decoration: none;
  }
  li {
    list-style:none;
  }
  pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #f36d33;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 16px !important;
    line-height: 1.6;
    max-width: 100%;
    width:80%;
    overflow: auto;
    padding: 1em 1.5em;
    word-wrap: break-word;
  }

  #root {
    height: 100%;
  }
`;
