const { commentInfos } = require("../model/Comment") 
// comments.js에서 실행시키고 남는 return값을 가져오길 바람. 
// 구조분해해서 model 함수인 commentInfos 그대로 가져옴.

// main이라는 함수를 만들어서 exports 하는 함수 -> 그떄 그떄 바로 exports하는 함수
exports.main = (req, res) => {
    res.render("index");
}; 
// = > index 파일을 렌더하고 있음. 


// 방명록으로 이동했을 떄 그 UI 받아오기
// commentData에 commentInfos 실행시킨 후 그 return값을 가져오길 바람. 
// ejs파일에 사용할 수 있도록 데이터를 보내고 있음. 

exports.comments = (req, res) => {
    const commentData = commentInfos(); // 데이터 자체를 commentData에 담기
    res.render("comments", { 
        commentInfos: commentData, // 또 comments.ejs를 render할 때 DB와 연결된 모델에 있는 Comments.js 결과값들 불러와줌.
    });
};

// main, comments 라는 함수