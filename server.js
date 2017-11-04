import express from 'express'
import path from 'path'
const app = express();
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT
const STATIC_DIR = path.resolve(__dirname, 'src/client/public/index.html');



if (isDeveloping) {
    let webpack = require('webpack')
    let webpackMiddleware = require('webpack-dev-middleware')
    let webpackHotMiddleware = require('webpack-hot-middleware')
    let config = require('./webpack.config.js')

    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
      publicPath: config.output.BUILD_DIR,
      noInfo: true,
      quiet: false,
      lazy: false,
      watchOptions: {
        aggregateTimeout: 300,
        poll:true
      },
      stats: {
        colors: true
      }
    });
    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))
    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync)
        res.end();
    });
} else {
    app.use(express.static(STATIC_DIR));
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
