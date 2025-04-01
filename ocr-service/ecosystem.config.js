module.exports = {
    apps: [
        {
            name: "main-app",
            script: "app.js"
        },
        {
            name: "proxy-server",
            script: "proxy-server/server.js"
        },
        {
            name: "auth-status-server",
            script: "auth-status-server/server.js"
        },
        {
            name: "qr-server",
            script: "http-server",
            args: "-p 8080 --cors"
        }
    ]
}
