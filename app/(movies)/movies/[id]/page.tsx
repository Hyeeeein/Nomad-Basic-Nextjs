import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
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
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // console.log("===========");
  // console.log("start fetching");
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // 병렬, 배열 안의 모든 작업이 똑같은 시간에 시작한다
  // console.log("end fetching");
  // return <h1>{movie.title}</h1>;

  return (
    <div>
      <h3>Movie detail page</h3>
      {/* Suspense 로 인해 필요한 컴포넌트에만 로딩 화면 보여주기 가능 */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
