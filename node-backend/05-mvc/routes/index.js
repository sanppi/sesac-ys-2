const express = require("express");
const router = express.Router();
// express에서 router들을 모아서 제공할 수 있는 기능 제공. router는 미들웨어로서 사용됨.
const controller = require("../controller/Cmain") // 여기서 컨트롤러 Cmain(controller main) 불러오고 싶은 것

// localhost:8000/comment/ = > 지금 미들웨어 걸때 comment까지 걸어줬기 때문에 아래처럼 적었다 해도 comment/까지 기본 주소
// 아래 줄은 localhost:8000/comment/  => 이것들의 요청에 대한 응답임. 




// 요청에 대한 정보를 모아둠. 

// localhost:8000/
router.get("/", controller.main); // Cmain에 있던 controller.main 함수가 응답하고 있음. 거기서 render하고 있음. 

// localhost:8000/comments
router.get("/comments", controller.comments); // Cmain에 있던 controller.comments 함수가 응답하고 있음. 거기서 render하고 있음. 
// controller가 routes에 걸려 있는 것. 
// Cmain에 방명록 보여주는 거 있음..




module.exports = router; // router 객체 자체를 모듈로서 넘겨줌