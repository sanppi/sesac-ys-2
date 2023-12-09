import { useForm } from "react-hook-form";

export default function PracSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log("성공", data);
  };

  const onInvaild = (err) => {
    console.log("실패", err);
  };

  return (
    <>
      <h4>Practice</h4>
      <form onSubmit={handleSubmit(onValid, onInvaild)}>
        <input
          type="text"
          placeholder="이름"
          {...register("name", {
            required: "이름은 필수항목입니다.",
          })}
        />
        {errors.name?.message}

        <input
          type="number"
          placeholder="나이"
          {...register("age", {
            // required: "나이 입력은 필수값입니다",
            min: {
              value: 0,
              message: "0 이상의 숫자만 입력 가능합니다.",
            },
          })}
        />
        {errors.age?.message}

        <button type="submit">제출</button>
      </form>
    </>
  );
}
