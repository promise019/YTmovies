import MovieCarousel from "../component/layout/slide";

export default function Landingpage() {
  return (
    <div className={`p-2 bg-black h-screen w-screen overflow-auto`}>
      <div className="fixed z-3 lg:mt-6 lg:ml-6">
        <div className="inline-block p-2 rounded-full max-w-fit bg-green-700">
          <h1 className="font-extrabold text-xl text-white md:text-3xl">YT</h1>
        </div>
        <span className="font-bold text-white md:text-3xl">Movies</span>
      </div>
      <MovieCarousel />
    </div>
  );
}
