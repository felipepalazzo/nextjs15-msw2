import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://swapi.dev/api/films", () =>
    HttpResponse.json({
      results: [
        {
          episode_id: 1,
          title: "Fake Film #1",
        },
      ],
    }),
  ),
  http.get("https://swapi.dev/api/planets/1", () =>
    HttpResponse.json({ name: "FAKE PLANET" }),
  ),
];
