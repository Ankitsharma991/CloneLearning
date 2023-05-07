import React from "react";
import German from "../../src/components/german.jpg";
import Spanish from "../../src/components/spanish.jpg";
import Hindi from "../../src/components/hindi.jpg";
import Chinese from "../../src/components/chinese.jpg";
const CardsHero = () => {
  return (
    <section className="px-6 xl:px-0">
      <div className="mx-auto container w-full">
        <div className="flex">
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
            <div className="container">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    className="h-30"
                    src={Hindi}
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body w-full">
                  <h2 class="card-title flex justify-center">
                    English-Hindi Quiz
                  </h2>{" "}
                  <p class="text-xs opacity-60 flex justify-center">
                    Take a quiz to test your English to Hindi knowledge...
                  </p>
                </div>{" "}
              </div>
            </div>
            <div className="container">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    className="h-30"
                    src={German}
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body w-full">
                  <h2 class="card-title flex justify-center">
                    English-German Quiz
                  </h2>{" "}
                  <p class="text-xs opacity-60 flex justify-center">
                    Take a quiz to test your English to German knowledge...
                  </p>
                </div>{" "}
              </div>
            </div>
            <div className="container">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    src={Spanish}
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body w-full">
                  <h2 class="card-title flex justify-center">
                    English-Spanish Quiz
                  </h2>{" "}
                  <p class="text-xs opacity-60 flex justify-center">
                    Take a quiz to test your English to Spanish knowledge...
                  </p>
                </div>{" "}
              </div>
            </div>
            <div className="container">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    src={Chinese}
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body w-full">
                  <h2 class="card-title flex justify-center">
                    English-Chinese Quiz
                  </h2>{" "}
                  <p class="text-xs opacity-60 flex justify-center">
                    Take a quiz to test your English to Chinese knowledge...
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center -mt-8">
        <button
          className="my-[4rem] btn btn-primary"
          onClick={() => navigate("/quiz/:id")}
        >
          View All Quizzes
        </button>
      </div>
      ;
    </section>
  );
};

export default CardsHero;
