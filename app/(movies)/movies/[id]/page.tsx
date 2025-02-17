import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type IParams = Promise<{ id: string }>;

// async function getMovie(id: string) {
//   console.log(`Fetching movies: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }
// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

// 동적으로 메타데이터 세팅
export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;

  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage(props: { params: IParams }) {
  // console.log("===========");
  // console.log("start fetching");
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // 병렬, 배열 안의 모든 작업이 똑같은 시간에 시작한다
  // console.log("end fetching");
  // return <h1>{movie.title}</h1>;
  const params = await props.params;
  const id = params.id;

  return (
    <div>
      {/* Suspense 로 인해 필요한 컴포넌트에만 로딩 화면 보여주기 가능 */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
