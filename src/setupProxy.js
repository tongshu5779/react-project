const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/req', {
        target: 'http://m.you.163.com',
        pathRewrite: {'^/req': ''},
        changeOrigin: true
    }));
    app.use(proxy('/api', {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api': ''},
        changeOrigin: true
    }));

};