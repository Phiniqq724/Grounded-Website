import Form from "./Form";
import UGM from "../../public/UGM.png";
import Telkom from "../../public/Telkom.png";

export default function ContactUs() {
  return (
    <>
      <div className="bg-dark" id="ContactUs">
        <div className=" pb-24">
          <div className="flex justify-center items-center mb-24">
            <div></div>
            <h1 className="text-white font-medium font-raleway text-3xl">
              Our Client
            </h1>
            <div></div>
          </div>
          <div className=" flex justify-center items-center">
            <div className=" flex items-center justify-center">
              <div></div>
              <div className="flex">
                <a
                  href="https://www.smktelkom-mlg.sch.id/"
                  className="m-2 w-[256px] h-[256px]"
                >
                  <img src={Telkom} alt="" />
                </a>
                <a
                  href="https://ugm.ac.id/id/"
                  className="m-2 w-[256px] h-[256px]"
                >
                  <img src={UGM} alt="" />
                </a>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center pb-24">
          <div className="flex justify-center items-center">
            <h1 className="text-white font-medium font-raleway text-3xl pt-24">
              Contact Us
            </h1>
          </div>
          <div className="items-center justify-center flex pb-24">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
