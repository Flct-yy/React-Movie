
// 定义 movie 的类型
export interface Movie {
  id:number;
  title: string;
  posterPath?: string; // 可选属性
  url: string;
  release_date: string; // 发行日期
}