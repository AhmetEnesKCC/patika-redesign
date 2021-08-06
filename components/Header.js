import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function Header() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      var scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      if (scrollTop > 150) {
        setIsFull(true);
      } else {
        setIsFull(false);
      }
    });
  }, []);

  const [isFull, setIsFull] = useState(false);

  return (
    <>
      <div
        className={`container mx-auto sticky transition-all duration-700 hidden lg:block    ${
          !isFull ? "top-4" : "top-0"
        } z-50`}
      >
        <div
          className={`bg-orange-main transition  duration-700  ${
            isFull ? "rounded-none py-5" : "rounded-full py-2"
          }  h-auto mx-auto text-black header-shadow`}
        >
          <div className="flex  space-x-32 mx-auto w-max header-link-container">
            <p>Bootcamps 📚</p>
            <p>Launchpad 🚀</p>
            <p>Projects ⚒</p>
            <p className="selected">Profile👥</p>
          </div>
        </div>
      </div>
      <div className=" lg:hidden">
        <div
          onClick={() => {
            setMenu(true);
          }}
          className=" lg:hidden  w-max ml-8 sticky top-5 left-3/4 bg-orange-main p-3 rounded-full z-50 shadow-flat"
        >
          <MenuIcon className="h-8 w-8 text-white" />
        </div>
        {menu && (
          <div
            onClick={() => {
              setMenu(false);
            }}
            className="fixed w-full h-screen bg-black z-50 -mx-10 md:-mx-0 top-0 text-white flex justify-around py-20 box-border items-center flex-col"
          >
            <XIcon className="h-10 text-white absolute left-10 top-10" />
            <p>Bootcamps 📚</p>
            <p>Launchpad 🚀</p>
            <p>Projects ⚒</p>
            <p className="selected">Profile👥</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
