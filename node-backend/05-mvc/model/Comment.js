exports.commentInfos = () => {
    // mysql 연결
    // select * from comment; 까지 해서 데이터 가져왔다고 가정.  

    return [             // 외부에서 사용할 거라 return까지 하고 있음. 
        {
            id:1, 
            userid: "lily", 
            date:"2023-10-26" , 
            comment: "hello" ,
        },
        {
            id:2, 
            userid: "gildong", 
            date:"2023-10-28", 
            comment: "hello world",
        },
    ];
};
// comment 방명록을 전부다 불러오겠다는 함수?