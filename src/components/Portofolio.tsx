import Sertifikat1 from "../../public/Sertifikat1.png";
import Smartaca from "../../public/Smartaca.png";
import PyroEyes from "../../public/PyroEyes.jpg";
import ButtonBlack from "./ButtonBlack";

export default function Portofolio() {
  return (
    <div className="bg-dark flex justify-center" id="Porto">
      <div></div>
      <div className="justify-center items-center mt-24">
        <div className="flex justify-center">
          <div></div>
          <h1 className="font-raleway text-white font-medium text-3xl">
            Certificate & Projects
          </h1>
        </div>
        <div className="w-[1500px] mt-8 mb-64 flex">
          <a href="#" className=" w-[575px] h-[245px]">
            <img
              src={Sertifikat1}
              alt="Sertifikat IoT"
              className="rounded-xl "
            />
          </a>
          <a href="#" className=" w-[575px] h-[245px]">
            <img src={Smartaca} alt="Project 1" className="rounded-xl" />
          </a>
          <a href="#" className=" w-[575px] h-[245px]">
            <img src={PyroEyes} alt="Project 2" className="rounded-xl" />
          </a>
        </div>
        <div className="justify-center items-center flex ">
          <a href="#" className="">
            <button className=" bg-darkaccent text-white rounded-xl w-48 h-16 text-xl font-nunito transition-colors duration-250 hover:bg-oranges hover:text-white">
              See More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
