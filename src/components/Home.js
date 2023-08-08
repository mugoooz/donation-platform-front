
import React from "react";
// import Highlights from "./Highlights"; // Comment out this line
// import EventsHome from "./EventsHome"; // Comment out this line
// import { useAuthContext } from "../providers/Auth.provider"; // Comment out this line

function Home() {
  // const auth = useAuthContext(); // Comment out this line
  // const isAuth = auth?.user; // Comment out this line
  return (
    <div>
      <div className="h-screen">
        <div className="relative h-[98%] flex items-center w-full justify-end pr-40 bg-[url(https://img.freepik.com/free-photo/blue-designed-grunge-concrete-texture-vintage-background-with-space-text-image_1258-108928.jpg)] bg-cover">
          <video autoPlay muted loop className="h-5/6">
            <source
              src="https://www.zohowebstatic.com/sites/zweb/images/backstage/home/banner-intro.webm"
              type="video/mp4"
            />
          </video>
        </div>
        {/* You may need to modify this part as it references variables that were commented out */}
        <div className="text-white text-xl flex flex-col pl-40 justify-center gap-6 absolute top-20 bg-white/30 h-full w-full">
          <h1 className="text-6xl font-semibold uppercase">
            You are welcomed to <br />
            <span className="text-rose-600">MIMI-KENYA</span> events.
          </h1>
          <p>
            Whether you're looking to learn something new,
            <br /> connect with like-minded individuals, or simply have a good
            time, <br />
            MIMI-KENYA has an event for you.
          </p>
          {/* You'll probably need to modify this part as well since it uses 'isAuth' */}
        </div>
      </div>
      
    </div>
  );
}

export default Home;

