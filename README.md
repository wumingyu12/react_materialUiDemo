react 使用
==================
概括
----
1. 使用了material-ui

2. 支持es6的webpack.config.js中指明js的代码加载器用babel，package.json里面也有这个babel模块

##### webpack.config.js
```javascript
	module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" },
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
        ]
    },
```

运行
-----

1. 运行 npm install 安装依赖包

2. 运行 npm start (用webpack-dev-server)

3. 用浏览器进入 http://localhost:8080/webpack-dev-server/

编译最终结果
-------------
修改webpack.config.js里面的入口

**没修改前**
```javascript
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
```

**修改后**
```javascript
    entry: [
      "./js/app.js"
    ],
```

去掉后运行webpack会在当前目录下的build生成一个bundle.js文件就是index.html需要。