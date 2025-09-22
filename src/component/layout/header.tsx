import { useState } from "react";
import search from "../../assets/icons/search.svg";
import settings from "../../assets/icons/settings dark.svg";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const category = ["troops", "Gaming", "Podcast", "Music", "Anime"];

  return (
    <header className={`sticky top-0 ${"bg-white"} p-2 w-screen `}>
      <div className="h-fit flex justify-between">
        {/* Logo and logo-text */}
        <div className="pb-1">
          <div className="inline-block p-2 rounded-full max-w-fit bg-green-700">
            <h1 className="font-extrabold text-xl text-white">YT</h1>
          </div>
          <span className="font-bold">Movies</span>
        </div>

        <div
          className={`bg-white w-[96%] ${
            showSearchBar ? "fixed block" : "hidden"
          } md:static md:flex md:max-w-[67%]`}
        >
          <Input
            className="p-2 rounded-xl border w-[80%] md:w-full"
            placeholder="Search Videos"
            type={"search"}
          />
          <Button
            className="font-extrabold p-2 text-center md:hidden"
            onClick={() => setShowSearchBar(false)}
          >
            cancel
          </Button>
        </div>

        {/* search icon/button */}
        <div className="p-2 space-x-3 md:pr-3">
          <img
            src={search}
            className="w-6 inline-block md:hidden"
            onClick={() => setShowSearchBar(true)}
          />
          <img src={settings} className="w-7 inline-block" />
        </div>
      </div>{" "}

      {/* suggestion panel */}
      <div className="w-full border-t border-gray-300 flex p-0.5 overflow-auto space-x-2">
        <Button className="p-2 bg-gray-500 text-white rounded-lg">All</Button>
        {category.map((i, _) => (
          <Button className="p-2 bg-gray-500 text-white rounded-lg" key={_}>
            {i}
          </Button>
        ))}
      </div>
    </header>
  );
}
