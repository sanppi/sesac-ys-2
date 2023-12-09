import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("Loading...");
  const { id } = useParams();
  console.log(id);
  // 위는 객체분해해서 아래의 id만 가져온것.
  // product/:id/:name
  // params => { id: value, name: value}

  // ~~~~?id=2&name=lily 이렇게 보냈을 때
  // 쿼리를 가져오고 싶을 땐?
  const [query, setQuery] = useSearchParams();
  console.log(query); // URLSearchParams {size: 1} -> 이런 식으로 쿼리를 찍으면 나옴,.
  console.log(query.get("name")); //lily나옴  -> get사용해서 어떤 query 값을 가져오는 것.

  // Link 컴포넌트를 이용하지 않고, js 함수 내부에서 페이지를 이동시키는 코드를 작성해야 할 때 사용
  const navigator = useNavigate();

  const getProduct = async () => {
    try {
      // 오류가 날 수도 있는 코드를 try 안에 넣는다.
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (res.ok) {
        // true이면 여기로
        const prod = await res.json();
        setProduct(prod);
      } else {
        // false면 에러를 던져서 catch로 보내기.
        throw Error("존재하지 않는 상품입니다.");
      }
    } catch (error) {
      // try 안에서 오류가 발생하면 catch로 이동함.
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div>여기는 상품상세 페이지</div>
      <button onClick={() => navigator(-1)}>목록으로 이동</button>
      {/* <button onClick={() => navigator(2)}>이동</button> */}
      <button onClick={() => navigator("/")}>홈으로 이동</button>
      {/* setQuery는 인자로 정보를 이용하여 새로운 쿼리를 만들고, 이동함*/}
      {/* <button onClick={() => setQuery({ name: "codee", id: 5 })}>
        setQuery 테스트
      </button> */}
      {product ? (
        <ul>
          <li>번호: {product.id}</li>
          <li>상품명: {product.title}</li>
        </ul>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
