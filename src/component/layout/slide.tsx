import manhunt from "../../assets/images/manhunt.jpg";
import nevers from "../../assets/images/nevers.jpg";
import smile from "../../assets/images/smile.jpg";
import disenchanted from "../../assets/images/disenchanted.jpg";
import wonder from "../../assets/images/wonder.jpg";
import werewolf from "../../assets/images/werewolf.jpg";

import { useState, useEffect, useRef } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router";

const movies = [
  {
    id: 1,
    title: "Manhunt",
    description: "A mind-bending thriller about dreams within dreams.",
    image: manhunt,
  },
  {
    id: 2,
    title: "Nevers",
    description: "A journey beyond the stars to save humanity.",
    image: nevers,
  },
  {
    id: 3,
    title: "Smile",
    description: "The caped crusader faces his greatest enemy, the Joker.",
    image: smile,
  },
  {
    id: 4,
    title: "Disenchanted",
    description: "A journey beyond the stars to save humanity.",
    image: disenchanted,
  },
  {
    id: 5,
    title: "Wonders",
    description: "The caped crusader faces his greatest enemy, the Joker.",
    image: wonder,
  },
  {
    id: 6,
    title: "Werewolf Origin",
    description: "A journey beyond the stars to save humanity.",
    image: werewolf,
  },
];

const MovieCarousel = () => {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);
  const endX = useRef(null);

  const navigate = useNavigate();

  // Auto play every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current !== null && endX.current !== null) {
      const diff = startX.current - endX.current;
      if (diff > 50) {
        // Swipe left → next slide
        setIndex((prev) => (prev + 1) % movies.length);
      } else if (diff < -50) {
        // Swipe right → previous slide
        setIndex((prev) => (prev - 1 + movies.length) % movies.length);
      }
    }
    startX.current = null;
    endX.current = null;
  };

  return (
    <div
      className="w-full max-w-3xl mx-auto relative h-full overflow-hidden rounded-2xl mt-5"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-full relative h-[80%]">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-2xl" />

            {/* Movie info */}
            <div className="absolute bottom-0 p-6 text-white">
              <h2 className="text-2xl font-bold">{movie.title}</h2>
              <p className="text-sm mt-2 opacity-80">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-27 left-1/2 -translate-x-1/2 flex space-x-2">
        {movies.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

      <Button
        onClick={() => navigate("/app/home")}
        className="bg-green-700 rounded-lg absolute bottom-9 text-white font-extrabold p-3 w-full"
      >
        Continue
      </Button>
    </div>
  );
};

export default MovieCarousel;
