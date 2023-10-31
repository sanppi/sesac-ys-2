const User = require('../model/User')

exports.index = (req, res) => {
  res.render('index')
}

exports.signup = (req, res) => {
  res.render('signup')
}
exports.post_signup = (req, res) => {
  // 모델과 연결하여, user 테이블에 회원가입 정보 insert한다.
  User.post_signup(req.body, () => {
  // send({result: true}) -> 회원가입 성공하면 이런 형태로 또 보낼 것이다. 
    res.send({ result: true })
  })
}

exports.signin = (req, res) => {
  res.render('signin')
}

exports.post_signin = (req, res) => {
  // 모델과 연결해서 실제로 회원이 존재하는 지 검색 
  User.post_signin(req.body, (rows) => { // rows -> cb함수로 받아서
    console.log(rows[0]) // 한명만 조회된다는 가정하에 [0]번값 조회하는 것. 
    // 성공 : {result: true, id : 숫자}
    // 실패 : {result: false}
    if (rows.length > 0) {
      res.send({ result: true, id: rows[0].id })
      }  else {
        res.send({ result: false })
      }
    });
};

exports.profile = (req, res) => {
   // req.body {id(number)} > id만 넘김.
   // 그리고 그 id에 해당하는 user를 select 해야 함. 

   // profile 페이지 렌더할 때, user 정보를 sql에서 받아온 것. profile페이지를 볼 수 있도록 data
  User.get_user(req.body.id, (row) => {
    res.render('profile', { data: row });
    // else res.redirect('/user/signin')
  })
}

exports.profile_edit = (req, res) => {
    // model에 연결 해서 update를 해야 함. 
  const data = {
    ...req.body,
    id: req.params.id, // url에 있는 아이디가 들어옴
  }
  User.update_profile(data, () => {
    res.send({ result: true })
  })
}

exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, () => {
    res.send({ result: true });
  })
}
