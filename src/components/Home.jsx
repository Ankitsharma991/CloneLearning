import React from "react";
import PoliciesHero from "./PoliciesHero";
import CardsHero from "./CardsHero";
import { useNavigate } from "react-router-dom";
import Lan from "../components/lan.png";

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <div
        className="hero h-1/2"
        style={{ backgroundImage: `url(${Lan})`, opacity: 0.8 }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 xl:text-4xl font-bold text-3xl">
              Learn New Languages
            </h1>
            <p className="mb-5">
              Improve your language skills with our platform and assess your
              proficiency by taking quizzes.
            </p>
            <button
              onClick={() => navigate("/course")}
              className="btn btn-primary"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      {/* policies */}
      <div className="pb-10">
        <PoliciesHero />
      </div>
      <div>
        <CardsHero />
      </div>
    </>
  );
};

export default Home;
