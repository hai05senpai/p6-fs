import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";
import { Section1 } from "../../components/section1/Section1";

export default function Home() {
  return (
    <>
      <Section1 />      

      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="container mx-auto px-[16px]">
          <h2 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] text-center mb-[30px]">Nhà tuyển dụng hàng đầu</h2>
          {/* Wrap */}
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-[20px] gap-x-[10px] gap-y-[20px]">
            {/* Item */}
            <Link
              href="#" 
              className="border border-[#DEDEDE] rounded-[8px] relative flex flex-col"
              style={{
                background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
              }}
            >
              <img src="/assets/images/card-bg.svg" className="absolute top-[0] left-[0] w-[100%] h-auto" />
              <div 
                className="relative bg-white rounded-[8px] sm:w-[160px] w-[125px] sm:h-[160px] h-[125px] sm:mt-[32px] mt-[20px] mx-auto p-[10px]"
                style={{
                  boxShadow: "0px 4px 24px 0px #0000001F"
                }}
              >
                <img src="/assets/images/demo-company-1.png" className="w-[100%] h-[100%] object-contain" />
              </div>
              <h3 className="sm:my-[24px] my-[16px] sm:mx-[16px] mx-[8px] font-[700] sm:text-[18px] text-[14px] text-[#121212] text-center flex-1 line-clamp-2">LG Electronics Development Vietnam (LGEDV)</h3>
              <div className="bg-[#F7F7F7] flex items-center sm:justify-between justify-center py-[12px] sm:px-[16px] px-[6px] flex-wrap gap-y-[12px]">
                <div className="font-[400] sm:text-[14px] text-[12px] text-[#414042]">Ho Chi Minh</div>
                <div className="inline-flex items-center gap-x-[6px] font-[400] sm:text-[14px] text-[12px] text-[#121212] sm:w-auto w-[100%] justify-center">
                  <FaUserTie className="text-[16px] text-[#000096]"/> 5 việc làm
                </div>
              </div>
            </Link> 
          </div>
        </div>
      </div>
      {/* End Section 2 */}
    </>
  );
}
