const { userid, password } = require("../model/Login") 

// main이라는 함수를 만들어서 exports 하는 함수 -> 그떄 그떄 바로 exports하는 함수
exports.main = (req, res) => {
    res.render("index");
}; 


exports.login = (req, res) => {
    const { userid, password } = req.body;
    
    if (userid === 'sanha' && password === '1234') {
        const data = {
            isSuccess: true,
            msg: '로그인 성공!'
        };
        res.send(data);
    } else {
        const data = {
            isSuccess: false,
            msg: '로그인 실패!'
        };
        res.send(data);
    }
};
    