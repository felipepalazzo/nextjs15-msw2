import { BASE_URL } from "@/constants";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const FilmList = dynamic(() => import("@/components/film-list"), {
  loading: () => (
    <div>
      <h2>🌀 Loading...</h2>
    </div>
  ),
  ssr: false,
});

export default function FilmsPage({ planet }: { planet: string }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-extrabold">{`STAR WARS FILMS - ${planet}`}</h1>
        <Suspense fallback={null}>
          <FilmList />
        </Suspense>
      </main>
    </div>
  );
}

FilmsPage.getInitialProps = async () => {
  const res = await fetch(`${BASE_URL}/planets/1`);

  const json = await res.json();

  return {
    planet: json.name,
  };
};
