// const express = require("express");
// const router = express.Router();

// // index 페이지 렌더
// router.get("/", (req, res) => {
//     res.render("index");
// })

// // 회원가입 페이지 렌더
// router.get("/signup", (req, res) => {
//     res.render("signup");
// })

// // 회원가입 -> user table에 insert를 실행시키는 api(회원가입 버튼을 눌렀을 때)
// router.post("/signup", (req, res) => {
//     res.send();
// })

// // 로그인 페이지 렌더
// router.get("/signin", (req, res) => {
//     res.render("signin");
// })

// // 로그인 -> user table에서 회원 존재 여부를 판단하는 api(로그인 버튼을 눌렀을 때 보낼 api가 필요)


// // 회원정보 페이지 렌더


// module.exports = router;


const express = require('express')
const user = require('../controller/Cuser')
const router = express.Router()

router.get('/', user.index) // index를 렌더

router.get('/signup', user.signup) // 회원가입 페이지를 렌더
router.post('/signup', user.post_signup) // 회원가입 버튼 클릭 시

router.get('/signin', user.signin) // 로그인 페이지를 렌더
router.post('/signin', user.post_signin) // 로그인 버튼 클릭 시

// 프로필 페이지를 렌더 (임시, 일반 POST 전송. 왜냐? 로그인을 유지시킬 수 있는 기술을 현재로서는 모르기 때문에)
router.post('/profile', user.profile) 

router.patch('/profile/edit/:id', user.profile_edit) // 회원정보 수정 버튼 클릭 시
router.delete('/profile/delete/:id', user.profile_delete) // 회원 탈퇴 버튼 클릭 시 

module.exports = router
