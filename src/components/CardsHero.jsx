import React from "react";

const CardsHero = () => {
  return (
    <section className="px-6 xl:px-0">
      <div className=" mx-auto container w-full">
        <div className="flex">
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
            <div className="container">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    src="/images/components/alert.jpg"
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body w-full">
                  <h2 class="card-title flex justify-center">Quiz</h2>{" "}
                  <p class="text-xs opacity-60 flex justify-center">
                    Take a quiz to test your knowledge...
                  </p>
                </div>{" "}
              </div>
            </div>
            <div className="container ">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    src="/images/components/alert.jpg"
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body">
                  <h2 class="card-title flex justify-center">Learn</h2>{" "}
                  <p class="text-xs opacity-60 flex justify-center">
                    Learn other languages and frameworks...
                  </p>
                </div>{" "}
              </div>
            </div>
            <div className="container ">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    src="/images/components/alert.jpg"
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body">
                  <h2 class="card-title flex justify-center">Alert</h2>{" "}
                  <p class="text-xs opacity-60 flex justify-center">
                    Alert informs users about important events.
                  </p>
                </div>{" "}
              </div>
            </div>
            <div className="container ">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    src="/images/components/alert.jpg"
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body">
                  <h2 class="card-title flex justify-center">Alert</h2>{" "}
                  <p class="text-xs opacity-60 flex justify-center">
                    Alert informs users about important events.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsHero;
