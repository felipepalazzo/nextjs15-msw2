import useApi from "@/hooks/useApi";

export type Film = {
  episode_id: number;
  title: string;
};

export default function FilmList() {
  const { data, loading } = useApi<Film[]>("films");

  if (loading || !data) {
    return null;
  }

  return (
    <ul>
      {data.map((film) => (
        <li key={film.episode_id}>{film.title}</li>
      ))}
    </ul>
  );
}
