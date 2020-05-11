const express = require('express');

let Router = express.Router();

const { token, formatData } = require('../utils')

let loginRouter = require('./login');
let userRouter = require('./user');
let regRouter = require('./reg');
let gdlist = require('./gdlist');
let goods = require('./goods');
let userlist = require('./userlist');
let cart = require('./cart');
let backgdlist = require('./backgdlist');
// 跨域解决方案CORS
Router.use((req, res, next) => {
    // 支持CORS跨域，只需要设置响应头
    // res.header('Access-Control-Allow-Origin','*');
    let currentOrigin = req.get('Origin');
    let allowOrigin = ['http://localhost:8080', 'http://localhost:8081']
    if (allowOrigin.includes(currentOrigin)) {
        res.set({
            'Access-Control-Allow-Origin': currentOrigin,
            'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
            'Access-Control-Allow-HEADERS': "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
        })

    }
    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else {
        next();
    }
})

// 格式化请求体中的参数
Router.use(express.json(), express.urlencoded({ extended: false }));

Router.use('/login', loginRouter)
Router.use('/user', userRouter)
Router.use('/reg', regRouter);
Router.use('/gdlist', gdlist);
Router.use('/goods', goods);
Router.use('/cart', cart);
Router.use('/userlist', userlist);
Router.use('/backgdlist', backgdlist);
Router.get('/verify', (req, res) => {
    // 获取请求头上的token

    let Authorization = req.get('Authorization');
    if (token.verify(Authorization)) {
        res.send(formatData())
    } else {
        res.send(formatData({ status: 0 }))
    }
})

module.exports = Router;