/* empty css                           */
function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>標題一</h1>
    <p> 
        我是html
    </p>
</body>
</html>`
	}
render["astro:html"] = true;

export { render as default };
