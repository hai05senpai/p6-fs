import Link from "next/link";
import { FaUserTie, FaBriefcase, FaLocationDot } from "react-icons/fa6";
import { Section1 } from "../../components/section1/Section1";

export default function SearchPage() {
  return (
    <>
      <Section1 />
      {/* Section 3: Kết quả tìm kiếm */}
      <div className="py-[60px]">
        <div className="container mx-auto px-[16px]">
          <h2 className="font-[700] text-[28px] text-[#121212] mb-[30px]">
            76 việc làm <span className="text-[#0088FF]">reactjs</span>
          </h2>
          <div 
            className="bg-white rounded-[8px] py-[10px] px-[20px] mb-[30px] flex flex-wrap gap-[12px]"
            style={{
              boxShadow: "0px 4px 20px 0px #0000000F"
            }}
            >
            <select name="" className="border-[1px] border-[#DEDEDE] rounded-[20px] h-[36px] px-[18px] font-[400] text-[16px] text-[#414042]">
              <option value="">Cấp bậc</option>
              <option value="">Intern</option>
              <option value="">Fresher</option>
              <option value="">Junior</option>
              <option value="">Middle</option>
              <option value="">Senior</option>
              <option value="">Manager</option>
            </select>
            <select name="" className="border-[1px] border-[#DEDEDE] rounded-[20px] h-[36px] px-[18px] font-[400] text-[16px] text-[#414042]">
              <option value="">Hình thức làm việc</option>
              <option value="">Tại văn phòng</option>
              <option value="">Làm từ xa</option>
              <option value="">Linh hoạt</option>
            </select>
          </div>
          <div className="mb-[30px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
            <Link href="#" 
              className="border border-[#DEDEDE] rounded-[8px] relative flex flex-col truncate"
              style={{
                background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
              }}
            >
              <img src="/assets/images/card-bg.svg" className="absolute top-[0] left-[0] w-[100%] h-auto" />
              <div 
                className="relative bg-white rounded-[8px] w-[116px] h-[116px] mt-[20px] mx-auto p-[10px]"
                style={{
                  boxShadow: "0px 4px 24px 0px #0000001F"
                }}
              >
                <img 
                  src="assets/images/demo-company-1.png" 
                  alt="Frontend Engineer(ReactJS)"
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
              <h3 className="mt-[20px] mx-[16px] font-[700] text-[18px] text-[#121212] text-center flex-1 whitespace-normal line-clamp-2">
                Frontend Engineer(ReactJS)
              </h3>
              <div className="mt-[6px] text-center font-[400] text-[14px] text-[#121212]">LG CNS Việt Nam</div>
              <div className="mt-[12px] text-center font-[600] text-[16px] text-[#0088FF]">1.000$ - 1.500$</div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaUserTie className="text-[16px]"/> Fresher
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaBriefcase className="text-[16px]"/> Tại văn phòng 
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaLocationDot className="text-[16px]"/> Hà Nội
              </div>
              <div className="my-[20px] mx-[16px] flex items-center justify-center flex-wrap gap-[8px]">
                <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                  ReactJS
                </div>
                <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                  NextJS
                </div>
                <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                  Javascript
                </div>
              </div>
            </Link>
            <Link href="#" 
              className="border border-[#DEDEDE] rounded-[8px] relative flex flex-col truncate"
              style={{
                background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
              }}
            >
              <img src="/assets/images/card-bg.svg" className="absolute top-[0] left-[0] w-[100%] h-auto" />
              <div 
                className="relative bg-white rounded-[8px] w-[116px] h-[116px] mt-[20px] mx-auto p-[10px]"
                style={{
                  boxShadow: "0px 4px 24px 0px #0000001F"
                }}
              >
                <img 
                  src="assets/images/demo-company-1.png" 
                  alt="Frontend Engineer(ReactJS)"
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
              <h3 className="mt-[20px] mx-[16px] font-[700] text-[18px] text-[#121212] text-center flex-1 whitespace-normal line-clamp-2">
                Frontend Engineer(ReactJS)
              </h3>
              <div className="mt-[6px] text-center font-[400] text-[14px] text-[#121212]">LG CNS Việt Nam</div>
              <div className="mt-[12px] text-center font-[600] text-[16px] text-[#0088FF]">1.000$ - 1.500$</div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <i className="fa-solid fa-user-tie text-[16px]"></i> Fresher
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <i className="fa-solid fa-briefcase text-[16px]"></i> Tại văn phòng 
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <i className="fa-solid fa-location-dot text-[16px]"></i> Hà Nội 
              </div>
              <div className="my-[20px] mx-[16px] flex items-center justify-center flex-wrap gap-[8px]">
                <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                  ReactJS
                </div>
                <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                  NextJS
                </div>
                <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                  Javascript
                </div>
              </div>
            </Link>
            <a href="#" 
              className="border border-[#DEDEDE] rounded-[8px] relative flex flex-col truncate"
              style={{
                background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
              }}
            >
              <img src="/assets/images/card-bg.svg" className="absolute top-[0] left-[0] w-[100%] h-auto" />
              <div 
                className="relative bg-white rounded-[8px] w-[116px] h-[116px] mt-[20px] mx-auto p-[10px]"
                style={{
                  boxShadow: "0px 4px 24px 0px #0000001F"
                }}
              >
                <img 
                  src="/assets/images/demo-company-1.png" 
                  alt="Frontend Engineer(ReactJS)"
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
              <h3 className="mt-[20px] mx-[16px] font-[700] text-[18px] text-[#121212] text-center flex-1 whitespace-normal line-clamp-2">
                Frontend Engineer(ReactJS)
              </h3>
              <div className="mt-[6px] text-center font-[400] text-[14px] text-[#121212]">LG CNS Việt Nam</div>
              <div className="mt-[12px] text-center font-[600] text-[16px] text-[#0088FF]">1.000$ - 1.500$</div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <i className="fa-solid fa-user-tie text-[16px]"></i> Fresher
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <i className="fa-solid fa-briefcase text-[16px]"></i> Tại văn phòng 
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <i className="fa-solid fa-location-dot text-[16px]"></i> Hà Nội 
              </div>
              <div className="my-[20px] mx-[16px] flex items-center justify-center flex-wrap gap-[8px]">
                <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                  ReactJS
                </div>
                <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                  NextJS
                </div>
                <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                  Javascript
                </div>
              </div>
            </a>
          </div>
          {/* Phân trang */}
          <div className="mt-[30px]">
            <select name="" className="border-[1px] border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042]">
              <option value="">Trang 1</option>
              <option value="">Trang 2</option>
              <option value="">Trang 3</option>
            </select>
          </div>
        </div>
      </div>
      {/* End Section 3 */}
    </>
  );
}