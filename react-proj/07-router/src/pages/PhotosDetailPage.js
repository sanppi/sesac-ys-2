import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PhotosDetailPage() {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("Loading...");
  const { id } = useParams();

  const getPhoto = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      if (res.ok) {
        const prod = await res.json();
        setPhoto(prod);
      } else {
        throw Error("존재하지 않는 사진입니다.");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getPhoto();
  }, []);
  return (
    <>
      {photo ? (
        <ul>
          <img src={`${photo.url}`} />
        </ul>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
