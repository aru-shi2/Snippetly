import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();
  const Start = () => {
    navigate("/snippet");
  };

  return (
    <div className="flex flex-col gap-20 min-h-screen">
      <div className="grow px-10">
        <div className="flex flex-col space-y-20">
          <div className="nav">
          <Navbar/>
          </div>
          <div className="content flex gap-30">
            <div className="l space-y-15">
              <div className="text space-y-8">
                <h1 className="font-bold text-4xl">
                  Turn Your Code Into Beautiful Snippets
                </h1>
                <p className="text-xl">
                  Create stunning, shareable images of your code in seconds.
                  Perfect for social media, blogs, and documentation.
                </p>
              </div>
              <button
                onClick={Start}
                className="bg-yellow-200 px-5 h-15 rounded-2xl text-lg"
              >
                Get started
              </button>
            </div>

            <div className="r w-[70%]">
              <img className="w-[90%] rounded-2xl" src="/Pic/Snap.png" alt="" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center">Features</h1>
          <div className="features grid grid-cols-2 gap-10">
            <div className="one border">
              <h1 className="text-xl font-bold">Instant Code Styling</h1>
              <p>
                Paste your code and instantly transform it into a beautiful
                snippet.
              </p>
            </div>
            <div className="two border">
              <h1 className="text-xl font-bold">Multiple Themes</h1>
              <p>Choose from modern themes that make your code stand out.</p>
            </div>
            <div className="three border">
              <h1 className="text-xl font-bold">Export Anywhere</h1>
              <p>
                Download high-quality images for Twitter, Linkedin, or
                documentation
              </p>
            </div>
            <div className="four border">
              <h1 className="text-xl font-bold">Developer Friendly</h1>
              <p>
                Supports popular programming languages and syntax highlighting
              </p>
            </div>

            <div className="work">
              <p>Paste your code</p>
              <p>Customize theme & background</p>
              <p>Download and share instantly</p>
            </div>
          </div>
        </div>
      </div>
        <div className="footer bottom-0">
          <Footer/>
        </div>
    </div>
  );
};

export default Home;
