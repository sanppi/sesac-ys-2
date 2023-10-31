const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"]; // 객체의 development key를 가져온 것. 
// config = {
//         "host": "localhost",
//         "database": "sesac_test",
//         "username": "user",
//         "password": "1234qwer",
//         "dialect": "mysql" 
//     }

const db = {}; // db 빈객체로 만듦.
const sequelize = new Sequelize(
  config.database, 
  config.username,
  config.password,
  config
); // -> sequelize 객체를 만든다. 

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize: sequelize, Sequelize: Sequelize} 이렇게 됨. 

// const Visitor = require("./Visitor")
// db.Visitor = Visitor(sequelize, Sequelize)
// 아래 줄 풀어쓴 것. 

db.Visitor = require("./Visitor")(sequelize, Sequelize); //  ()안에는 함수를 실행함. 
//  결국 db.Visitor에는 sequelize로 Visitor 테이블을 정의한 객체를 담음. 
// db.User = require("./Visitor")(sequelize, Sequelize); => User table

module.exports = db; // db를 export.  