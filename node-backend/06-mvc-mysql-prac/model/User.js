const mysql = require('mysql')
const cnn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'qwer1234',
  database: 'sesac_test',
})

exports.post_signup = (data, cb) => { // data라는 매개변수를 받아옴. 
  let sql = `INSERT INTO user(userid, name, pw) VALUES('${data.userid}','${data.name}','${data.pw}');`
  // values를 controller에서 insert한 데이터를 받아와야 함. data라는 매개변수를 받아온 이유. 
  cnn.query(sql, function (err) { // sql문을 실행시키기, 잘 실행되면 err객체가 비어서 올 것. 
    if (err) throw err
    cb()
  })
}

exports.post_signin = (data, cb) => {
    // for문 계속 돌려서 검색하는 게 아니라 sql로 특정 회원 조회해서 가져오기.
    // controller가 body에 있는 걸 data로 넘겨줌.
    // data = {userid, pw}
  const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' limit 1;`
  cnn.query(sql, (err, rows) => {
    // rows.length > 0 (회원이 있다는 뜻)
    if (err) {
      throw err
    }

    cb(); 
  })
}
exports.get_user = (id, cb) => { // controller에서 보내준 id를 이용해서 select를 할 것임.
  let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`
  cnn.query(sql, (err, rows) => { // query 실행
    if (err) {
      throw err
    }

    cb(rows[0]) // 하나의 정보만 객체로 보냄
  })
}

exports.update_profile = (data, cb) => {
  const sql = `UPDATE user SET name='${data.name}', userid='${data.userid}, pw='${data.pw}'`
  cnn.query(sql, (err, result) => {
    if (err) {
      throw err
  }
    
  cb()
  });
}

exports.delete_user = (id, cb) => {
  const sql = `delete from user where id=${id}`;
  cnn.query(`DELETE FROM user WHERE id='${id}'`, (err) => {
    if (err) {
      throw err
    }
    
    cb()
  })
}
