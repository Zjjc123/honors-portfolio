import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <h1 className="container mt-8 mx-auto font-mono text-center">
      <div className="pl-1 pt-1 h-auto text-xs" id="console">
        <h1 className="text-5xl lg:text-7xl mb-3 lg:mb-6">
          Welcome to My Honors Portfolio
        </h1>
        <p className="pb-1">
          Last login: Tue Feb 1 on{" "}
          <a href="mailto:me@jasonzhang.dev">jiajunzh@uw.edu</a>
        </p>
      </div>

      <h2 className="text-xl lg:text-4xl mb-2 lg:mb-4 mt-2 lg:mt-4">
        I&apos;m Jason Zhang
      </h2>
      <h3 className="text-sm lg:text-xl">
        A current first year Computer Science student at the University of
        Washington
      </h3>
    </h1>
  );
};

export default Home;
