export default () => {
    return 
        `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

                <!-- Google font import for Open Sans and Exo2-->
                <link href="https://fonts.googleapis.com/css?family=Exo|Open+Sans" rel="stylesheet">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                <title>KP2</title>
            </head>
            <body>

                <div id="root">${markup}</div>
                <style id="jss-server-side">${css}</style>
                <script type="text/javascript" src="/dist/bundle.js"></script>
            </body>
        </html> `
}