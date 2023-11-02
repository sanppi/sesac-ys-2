const { Customer, Orders, Sequelize } = require("../model")
const Op = Sequelize.Op;


exports.main = async (req, res) => {
        // Customer의 주문 목록 "custname" 과 함께 보고 싶어 join필요. 
    const cust = await Customer.findAll({
        attributes: ["custid", "custname", "birth"],
        where: { birth: { [Op.gte]: "2000-01-01"} }, // gte = 이상이다라는 의미. 
        include: [
            {
                model: Orders,
                attributes: {exclude: ["custid"]},
                // where: {}

            },
        ],
        raw: true,
    });

    res.send(cust);
};