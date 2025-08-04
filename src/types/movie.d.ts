
// 定义 movie 的类型
export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string; // 发行日期
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}