import Link from "next/link"

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

export const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-[#000071] py-[15px]">
        <div className="container mx-auto px-[16px]">
          {/* Wrap */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-white font-[800] sm:text-[28px] text-[20px] lg:flex-none flex-1">
              ITJobs
            </Link>
            {/* Menu */}
            <nav className="lg:block hidden">
              <ul className="flex gap-x-[30px]">
                <li className="inline-flex items-center gap-x-[8px] relative group/sub-1">
                  <Link href="#" className="font-[600] text-[16px] text-white">
                    Việc làm IT
                  </Link>
                  <FaAngleDown className="text-white text-[16px]"/>
                  <ul className="absolute top-[100%] left-[0] w-[280px] bg-[#000065] hidden group-hover/sub-1:block">
                    <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                      <Link href="#" className="font-[600] text-[16px] text-white">
                        Việc làm IT theo kỹ năng
                      </Link>
                      <FaAngleRight className="text-white text-[16px]"/>
                      <ul className="absolute top-[0] left-[100%] w-[280px] bg-[#000065] hidden group-hover/sub-2:block">
                        <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096]">
                          <Link href="#" className="font-[600] text-[16px] text-white">
                            ReactJS 
                          </Link>
                        </li>
                        <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096]">
                          <Link href="#" className="font-[600] text-[16px] text-white">
                            NodeJS 
                          </Link>
                        </li>
                        <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096]">
                          <Link href="#" className="font-[600] text-[16px] text-white">
                            Javascript 
                          </Link>
                        </li>
                        <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096]">
                          <Link href="#" className="font-[600] text-[16px] text-white">
                            HTML5
                          </Link>
                        </li>
                        <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096]">
                          <Link href="#" className="font-[600] text-[16px] text-white">
                            CSS  
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096]">
                      <Link href="#" className="font-[600] text-[16px] text-white">
                        Việc làm IT theo công ty 
                      </Link>
                      <FaAngleRight className="text-white text-[16px]"/>
                    </li>
                    <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096]">
                      <Link href="#" className="font-[600] text-[16px] text-white">
                        Việc làm IT theo thành phố 
                      </Link>
                      <FaAngleRight className="text-white text-[16px]"/>
                    </li>
                  </ul>
                </li>
                <li className="inline-flex items-center gap-x-[8px]">
                  <Link href="#" className="font-[600] text-[16px] text-white">
                    Top công ty IT 
                  </Link>
                  <FaAngleDown className="text-white text-[16px]"/>
                </li>
                <li className="inline-flex items-center gap-x-[8px]">
                  <Link href="#" className="font-[600] text-[16px] text-white">
                    Nhà tuyển dụng 
                  </Link>
                  <FaAngleDown className="text-white text-[16px]"/>
                </li>
              </ul>
            </nav>
            {/* Account */}
            <div className="inline-flex items-center gap-x-[5px] font-[600] sm:text-[16px] text-[12px] text-white">
              <Link href="#" className="">
                Đăng nhập
              </Link>
              <span className="">/</span>
              <a href="#" className="">
                Đăng ký
              </a>
            </div>
            {/* Button Menu Mobile */}
            <button className="text-white text-[20px] ml-[12px] lg:hidden inline-block">
              <FaBars />
            </button>
            {/* End Button Menu Mobile */}
          </div>
        </div>
      </header>
      {/* End Header */}
    </>
  )
}