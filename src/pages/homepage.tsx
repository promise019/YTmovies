import smile from "../assets/images/smile.jpg";
import disenchanted from "../assets/images/disenchanted.jpg";

export default function Homepage() {
  const length = 30;
  let movies = [];
  for (let i = 0; i <= length; i++) {
    movies.push(i);
  }

  const shorts = movies.filter((i) => i < 4);

  return (
    <main className="w-screen p-2 space-y-4">
      <div className="w-full">
        <h1 className="font-extrabold text-xl">Shorts</h1>
      </div>
      <section className="grid grid-cols-2 space-x-1 space-y-3 md:flex md:pl-4.5- md:overflow-auto md:flex-shrink-0">
        {shorts.map((i, y) => (
          <div
            key={y}
            className="h-[220px] flex-shrink-0 md:w-[30%] md:h-[260px]"
          >
            <img
              src={disenchanted}
              alt={i + "team"}
              className="w-full max-h-full rounded-lg"
            />
          </div>
        ))}
      </section>

      <section className="space-y-3 md:grid md:grid-cols-2 md:space-x-2">
        {movies.map((i, t) => (
          <div key={t} className="w-full h-[220px] md:w-[97%] md:pl-2.5">
            <img
              src={smile}
              alt={i + "team"}
              className="w-full max-h-full rounded-lg"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
