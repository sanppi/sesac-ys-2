// 테이블의 구조를 정의 
// orm은 객체와 db의 table(여기서는 visitor 테이블)을 매핑하는 기술
// sequelize를 이용해서 table의 구조를 정의할 필요가 있음. -> 그래서 여기서 하는 거임

function Visitor(Sequelize, DataTypes) { // 매개변수 받음. 
    return Sequelize.define( // 모델(테이블)정의, sequelize 객체의 define 메소드를 이용해서 정의
        "visitor", // 테이블 이름
        {
            id: { // int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
                type: DataTypes.INTEGER,
                allowNull: false, // notnull이면 다 false해 줘야 함. null 값 허용인 true가 기본 값이기 때문.
                primaryKey: true, // false 가 기본 값
                autoIncrement: true // false가 기본 값
            }, //  type, allowNull 등 다 정해져 있는 키값이라 바꾸면 안 됨
            username: { 
                //varchar(10),
                type: DataTypes.STRING(10),
                // allowNull: true,
            },
            comment: {
                type: DataTypes.TEXT("medium"),
            },
        }, // 컬럼 정의 -> key는 테이블의 실제 컬럼의 이름을 적어줘야 함. 
        {
            tableName: "visitor", 
            freezeTableName : true, //  아래의 상황을 방지
            // sequelize에서 간혹 단수로 지정해 둔 테이블 이름을 sql문을 날릴 때 복수(visitors)로 변경시키는 경우가 있음. 
            // insert into visitor~~~ => 앞으로 create() => sql 문 실행시킬 때 insert into visitors ~~~ 이런 경우.
            timestamps: false,
            // insert, update시의 그 시간을 자동으로 저장하겠다. 기본값이 true라 자동으로 저장됨. 
            // createAt, updateAt 라는 column에 자동으로 저장됨. > 그런 column이 만든 적 없으니 오류 생김 
        }  
    );
}

module.exports = Visitor;

//  여기서는 Visitor 테이블 생성하는 객체, 함수만 넘겨주고 model의 index.js에서 ..
// 할때마다 아래를 해줄 수는 없기 때문이다. 
//  결국 테이블 만들어지는 건 model index.js에서 실행됨. 

// const db = {}; // db 빈객체로 만듦.
// const sequelize = new Sequelize(
//   config.database, 
//   config.username,
//   config.password,
//   config
// ); // -> sequelize 객체를 만든다. 