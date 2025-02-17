import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

// 특정 path 에서만 보여줘야 할 경우
export const metadata = {
  title: "home", // use client 에서는 사용x
};

async function getMovies() {
  // 클라이언트에서 보여주는 게 아니라 백엔드에서 실행되는 것이기 때문에 화면에는 보이지 않지만 탭에서 로딩이 돌고 있음
  // 단점은 사용자는 모든 데이터를 가져오기 전에는 아무런 ui 를 볼 수 없다는 것(헤더, 메뉴바 등)
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Tomato() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}

// rout 정리 : root route 를 여러 개 만들 수도 있고, 폴더 정리도 됨
