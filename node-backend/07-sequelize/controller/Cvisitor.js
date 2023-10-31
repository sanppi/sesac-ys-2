const {Visitor} = require("../model"); 
// index.js에서 만들어서 export 하고 있는 Visitor 객체 호출
// const {Visitor}: 객체 분해해서 가져오기. 

// const {Visitor} = require("../model")

exports.home = (req, res) => {
  res.render("index");
};

// Get /visitors => 기존 방명록 전체 조회 후 render("visitor")를 함. 
exports.visitor = (req, res) => {
    // select * from visitor; => 여기서는 전체 조회
    Visitor.findAll()
    .then((result) => {
        console.log("findAll result: ", result);
        console.log("0 index의 username", result[0].username) // result[0].dataValues.username
        // 기대 : [{id: , username: , comment: }, {id: , username: , comment: } ] 이런 배열이었음. 
        res.render("visitor", {data : result}) // data배열이 그대로 나온다고 생각하면 됨. 
    })

    // Visitor.findAll({
    //     // where: {username: "lily"} // 더이상 sql문으로 작성하는 게 아니라 객체 형태로 작성
    // })

};

// POST /visitor => 방명록 insert

exports.postVisitor = async (req, res) => {
    const data = {
        username: req.body.username,
        comment: req.body.comment
    } // username, comment라는 컬럼을 넘겨주기
    const createVisitor = await Visitor.create(data);
    res.send(createVisitor);
};

// exports.postVisitor = (req, res) => {
//     const data = {
//         username: req.body.username,
//         comment: req.body.comment
//     } // username, comment라는 컬럼을 넘겨주기
//     Visitor.create(data)
//     .then((result)=>{
//         console.log("create result:", result);
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).send("오류 발생");
//     })
// };

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
    Visitor.destroy({
        where: {
            id: req.params.id,
        },
    }).then((result) => {
        console.log("destroy result: ", result);
        res.send({result:true});
    });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
    // select * from visitor where id = ?? limit 1
    Visitor.findOne({
        where: {
            id: req.params.id
        }                      // 이게 where 부분, where의 값도 객체로 설정함
    }).then((result) => {
        console.log("findOne result: ", result);
        res.send(result);
    });
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
    const data = {
        username: req.body.username,
        comment: req.body.comment,
        };
    
    // update visitor set username='??', comment='???' where id = ?
    Visitor.update(data, {
        where: {
            id: req.body.id,
        },
    }).then((result) => {
        console.log("update result: ", result);
        res.send({ result:true });
    });
};

exports.getTest = (req, res) => {
    // select username from visitor where id =2 orderby username ASC
    Visitor.findAll({
        attributes: ["username", "id"], // select 해오고 싶은 특성을 attributes 해서 배열로 가져오면 됨
        // where: {
        //     id: req.params.id
        // },                  // 이게 where 부분, where의 값도 객체로 설정함
        order: [["username", "ASC"]] // username 속성 기준으로 정렬 
    }).then((result) => {
        console.log("findOne result: ", result);
        res.send(result);
    });
};
