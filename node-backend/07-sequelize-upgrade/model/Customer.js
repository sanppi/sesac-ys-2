// customer 테이블을 정의하는 파일

function Customer(Sequelize, DataTypes) {
    return Sequelize.define(                // table을 정의해서 return시킴
    "customer",
    {
        custid: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
        },
        custname: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        addr: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(11),
        },
        birth: {
            type: DataTypes.DATE,
        },
    }, 
    {
        tableName: "customer",
        freezeTableName: true,
        timestamps: false
    }
    );
}

module.exports = Customer;