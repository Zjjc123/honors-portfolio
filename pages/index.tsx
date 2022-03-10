import { useState, useEffect } from "react";
import { NextPage } from "next";

const sen: string =
  "> A current first year Computer Science student at the University of Washington";

const Home: NextPage = () => {
  const [sentence, setSentence] = useState("huh?");

  const animate = async () => {
    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    for (let i = 20; i >= 0; i--) {
      await sleep(50);
      setSentence(sen.substring(0, sen.length - i));
    }

    let cursorOn = false;

    setInterval(() => {
      if (cursorOn) {
        setSentence(sen);
      } else {
        setSentence(sen + "|");
      }
      cursorOn = !cursorOn;
    }, 700);
  };

  useEffect(() => {
    animate();
  }, []);

  useEffect(() => {
    console.log("sentence changed!!!!!");
  }, [sentence]);

  return (
    <h1 className="container mt-8 mx-auto font-mono text-center">
      <div className="w-3/4 mx-auto">
        <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
          <div
            className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
            id="headerTerminal"
          >
            <div
              className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
              id="closebtn"
            ></div>
            <div
              className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
              id="minbtn"
            ></div>
            <div
              className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
              id="maxbtn"
            ></div>
            <div className="mx-auto pr-16" id="terminaltitle">
              <p className="text-center text-sm">Honors Portfolio</p>
            </div>
          </div>

          <div
            className="pl-1 pt-2 pb-8 h-auto  text-green-300 font-mono text-xs bg-black"
            id="console"
          >
            <p className="pb-1">
              Last login: Tue Feb 1 on{" "}
              <a href="mailto:me@jasonzhang.dev">jiajunzh@uw.edu</a>
            </p>
            <div className="" id="console">
              <h1 className="text-5xl lg:text-7xl mb-3 lg:mb-6">
                Welcome to My Honors Portfolio
              </h1>
            </div>
            <h2 className="pl-2 text-left text-xl lg:text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4">
              {">"} I&apos;m Jason Zhang
            </h2>
            <h3 className="pl-2 text-left text-xl lg:text-3xl mb-2 lg:mb-4 mt-2 lg:mt-4">
              {sentence}
            </h3>
          </div>
        </div>
      </div>
    </h1>
  );
};

export default Home;
