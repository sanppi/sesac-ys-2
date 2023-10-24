-- where, order by, limit 순서 정해져 있음. 위에서 2명.  
select * from customer 
where addr like '%대한민국%'  
order by custname desc
limit 2;

-- update 문 (조건 검색은 pk)
update customer 
set custname = '강해란' 
where custid = 'bunny'; 
select * from customer ;

-- delete
delete from customer where custid = 'wow123';
-- 오류 발생. 이유? wow123 값을 참조하고 있는 데이터가 있어서 삭제할 수 없음.  

delete from orders where custid = 'wow123';
select * from orders; 

select * from customer;

select addr from customer;
select distinct addr from customer;

select * from orders;

-- orders 테이블에 존재하는 주문 개수 세기 
select count(*) as 'total_orders' from orders;
desc orders;

-- 사람별 주문 건수 
-- select에서 group by 쓸 때, group by 뒤에 쓴 속성과, 집계함수(count(*) as 'count')로 새로 만든 속성만 출력하도록 구문을 짜야 함.
-- 다른 prodname 등등의 속성은 출력 x 
select custid, count(*) as 'count' from orders group by custid;

-- 사람별로 구매한 상품의 개수
select * from orders;
select custid, sum(amount) as 'total_amount' from orders group by custid ;

--  사람별로 구매한 상품의 개수 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회 (custid != 'bunny'인 사람)
select custid, sum(amount) as 'total_amount' from orders 
where custid != 'bunny' 
group by custid 
having sum(amount) >= 5;

-- 사람별로 결제한 금액
select * from orders;
select custid, sum(amount*price) as 'total_price' from orders group by custid ;
-- customer, orders 테이블을 inner join > 주문별로 배송지를 알고 싶어서 한 것.  
select customer.addr, orders.* from customer inner join orders on customer.custid = orders.custid;

-- 실습 
create table user1(
	id varchar(10) primary key not null, 
   	pw varchar(20) not null, 
	name varchar(5) not null, 
	gender enum('F', 'M', '') default '',
	birthday DATE not null,
	age int(3) not null default 0
);

INSERT INTO user1 VALUES('hong1234', '8o4kg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user1 VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user1 VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user1 VALUES('hanjo','jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user1 VALUES('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user1 VALUES('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user1 VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

select * from user1;

-- 1-9
select * from user1 order by birthday asc;
select * from user1 where gender like '%M%' order by name desc;
select id, name from user1 where birthday between '1990-01-01' and '1999-12-31';
select * from user1 where birthday like '%-06-%' order by birthday asc; 
select * from user1 where gender like 'M' and birthday between '1970-01-01' and '1979-12-31';
select * from user1 order by age desc limit 3 ;
select * from user1 where age between 25 and 50;
update user1 set pw = '12345678' where id = 'hong1234';
delete from user1 where id = 'jungkrat';
