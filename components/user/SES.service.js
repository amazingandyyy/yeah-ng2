exports.send = function notificationTemplate(data) {
    return `<!DOCTYPE html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <link href='https://fonts.googleapis.com/css?family=PT+Serif|Lato:300' rel='stylesheet' type='text/css' />
                <style media="screen">
                    .template {
                        text-align: center;
                        font-weight: 300;
                        font-family: 'Lato', sans-serif;
                        padding-top: 30px;
                    }
                    
                    .actionButton {
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        cursor: pointer;
                        padding: 15px 50px;
                        border-radius: 4px;
                        font-size: 0.8em;
                        font-weight: 500;
                        border: none;
                        color: white;
                        background: #1E1E1E;
                        transition: .1s background ease-in-out;
                        margin-top: 20px;
                    }
                    
                    .actionButton:hover {
                        transition: .1s background ease-in-out;
                        background: #313131;
                    }
                </style>
            </head>
            <body>
                <div class="template">
                    <img style="width: 100px;" src="https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/13654354_154027298358398_4418786725610547538_n.jpg?oh=125c8c3e17eddee588506137ec57381a&oe=58137FCC" alt="yeah Education Group">
                    <div>
                        <h1 style="font-weight: 300; text-transform: capitalize">${data.title}</h1>
                        <h2 style="font-weight: 300; font-size: 1.1em; color: rgba(0,0,0,0.4); margin-top: 10px;">${data.description}</h2>
                        <a href="${process.env.SITE_URL_BASE}${data.destination}" target="_blank"><button class="actionButton">${data.button}</button></a>
                    </div>
                </div>
            </body>
            </html>`
}