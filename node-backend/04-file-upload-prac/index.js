const express = require("express");
const multer = require("multer"); 
const path = require("path");

const app = express();
const PORT = 8002;

app.use("/uploads", express.static(__dirname + "/uploads"));

const upload = multer({
    dest: "uploads/", // uploads라는 폴더에 저장할 것이다. 경로 지정.
});

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination : function(req, file, done) {
            done(null, "uploads/"); // 경로 설정해줌.
        },

        filename: function(req, file, done) {
            console.log("uploadDetail filename", req.body);
            console.log(file) //  file.originalname : 미니언.jpg
            const ext = path.extname(file.originalname) // .jpg 만 추출한 것. 
            const basename = path.basename(file.originalname, ext) // 미니언 
            const fileName = req.body.id + "_" + Date.now() + ext // 미니언_중복될일없는숫자들.jpg

            done(null, fileName);
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024}, // 5MB 제한
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("index");
});

app.post(
    "/upload/detail", 
    uploadDetail.single("userfile"), 
    function(req, res){
        console.log("file detail:", req.file);
        console.log("body detail:", req.body);
        
        res.render("result", {
            src: req.file.path,
            id: req.body.id,
            pw: req.body.pw,
            name: req.body.name,
            age: req.body.age,
        });
        // res.send("파일 업로드");
});



app.post(
    "/upload/dynamic", 
    uploadDetail.single("userfile"),
    function(req, res){
    res.send({
        src: req.file.path,
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        age: req.body.age,
    });
})


app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});
