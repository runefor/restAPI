const express = require("express");
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// x-www-form-urlencoded form post 요청으로 제출된 데이터의 기본 형식이라고 한다.
//app.use(bodyParser.urlencoded()); // 근데 여기서는 이거 필요없고 json 분석 해야하니까.
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next()

})

// feedRoutes로 /feed url 가지고 있는 것을 보낸다.
app.use('/feed', feedRoutes);

app.listen(3000, () => console.log("됨!"));