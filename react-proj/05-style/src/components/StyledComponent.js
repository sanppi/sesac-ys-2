import styled from "styled-components";
// styled-component: css의 네이밍 중복을 완전히 방지
// css in js(이 외 style-jsx) :js 안에서 css를 사용할 수 있도록 도와주는 component
const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || "black"};

  &:hover {
    transform: scale(1.1);
  }
`;
// props 받아서 => props.color를 return하는 것.
// || or연산자로 앞이 아니면 화살표함수로 black으로 return하는 것.

export default function StyledComponent() {
  return (
    <>
      <Container>
        <Box color="red" />
        <Box color="orange" />
        <Box color="yellow" />
        <Box color="green" />
        <Box color="blue" />
        <Box color="purple" />
      </Container>
    </>
  );
}
