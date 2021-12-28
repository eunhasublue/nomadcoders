/*
아래 함수를 사용하면, react router는 바로 이 넘겨준 변수의 값을 받을 수 있게 해줌.
url에 있는 값을 반환해주는 함수 특히, 변경되는 값 => "moive/:id"
*/
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  };
  useEffect(() => {
    getMoive();
  }, []);
}

export default Detail;
