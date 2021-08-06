import ProcessBar from "./ProcessBar";
import { DatabaseIcon, ViewListIcon } from "@heroicons/react/solid";
function About() {
  return (
    <div className="about">
      <div
        className="general-title"
        style={{ scrollMarginTop: 100 }}
        id="about"
        onClick={() => {
          document
            .getElementById?.("about")
            .scrollIntoView?.({ behavior: "auto" });
        }}
      >
        About
      </div>
      <div className="about-content">
        <div className="about-top">
          <div className="person-card">
            <div className="person-image"></div>
            <div className="person-title">
              <div className="person-name">John Doe</div>
              <div className="person-job">Front End Developer</div>
            </div>
          </div>
          <div className="process-summary">
            <ProcessBar percentage={20} title="Last Course: GIT" />
            <ProcessBar percentage={45} title="Total" />
          </div>
        </div>
        <div className="person-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          commodi quas minima, doloribus sunt ut consequuntur quidem iusto non
          aliquam ratione labore maiores nisi ullam architecto id distinctio
          quam fugit?
        </div>
        <div className="flex justify-between items-center  mt-10">
          <div className="flex space-x-12 items-center justify-between">
            <div className="nunreg">Joined At 4 July 2020</div>
            <div className="rounded-full w-5 h-5 bg-orange-main"></div>
            <div className="nunreg">Last Active: Now</div>
          </div>
          <div className="inline-flex   flex-col">
            <div className=" flex f-h2 text-orange-main items-center justify-end space-x-3">
              20
              <DatabaseIcon className="h-6" />
            </div>
            <div className=" flex f-h2 text-purple-main items-center justify-between space-x-3">
              1672
              <ViewListIcon className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
