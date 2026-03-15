"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Section1 = () => {
  const searchParams = useSearchParams();
  const cityFromParams = searchParams.get("city") || "";
  const router = useRouter();

  const [city, setCity] = useState(cityFromParams);

  useEffect(() => {
    setCity(cityFromParams);
  }, [cityFromParams]);

  const handleSearch = (event: any) => {
    event.preventDefault();
    const city = event.target.city.value;
    const keyword = event.target.keyword.value;
    
    const query = `?city=${encodeURIComponent(city)}&keyword=${encodeURIComponent(keyword)}`;
    router.push("/search" + query);
  }

  return (
    <>
      {/* Section 1 */}
      <div className="bg-[#000065] py-[60px]">
        <div className="container mx-auto px-[16px]">
          <h1 className="text-white font-[700] text-[28px] text-center mb-[30px]">
            887 Việc Làm IT cho Developer "Chất"
          </h1>
          <form action="" onSubmit={handleSearch} className="flex flex-wrap gap-y-[12px] gap-x-[15px] mb-[30px]">
            <select 
              name="city" 
              className="bg-white md:w-[240px] w-[100%] h-[56px] rounded-[4px] px-[20px] font-[500] text-[16px] text-[#121212]"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Tất cả thành phố</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
            </select>
            <input type="text" name="keyword" placeholder="Nhập từ khóa..." className="md:flex-1 flex-none w-[100%] bg-white h-[56px] rounded-[4px] px-[20px] font-[500] text-[16px] text-[#121212]" />
            <button className="bg-[#0088FF] md:w-[240px] w-[100%] h-[56px] rounded-[4px] text-white inline-flex items-center justify-center gap-[10px] font-[500] text-[16px]">
              <FaMagnifyingGlass className="text-[20px]"/> Tìm kiếm
            </button>
          </form>
          <div className="flex items-center flex-wrap gap-y-[15px] gap-x-[12px]">
            <div className="font-[500] text-[16px] text-[#DEDEDE]">
              Mọi người đang tìm kiếm
            </div>
            <div className="flex flex-wrap gap-x-[12px]">
              <Link href="/search?language=ReactJS" className="border-[1px] border-[#414042] bg-[#121212] hover:bg-[#414042] rounded-[20px] 
              inline-block py-[8px] px-[22px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white">
                ReactJS
              </Link>
              <Link href="/search?language=Javascript" className="border-[1px] border-[#414042] bg-[#121212] hover:bg-[#414042] rounded-[20px] 
              inline-block py-[8px] px-[22px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white">
                Javascript
              </Link>
              <Link href="/search?language=NodeJS" className="border-[1px] border-[#414042] bg-[#121212] hover:bg-[#414042] rounded-[20px] 
              inline-block py-[8px] px-[22px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white">
                NodeJS
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Section 1 */}
    </>
  )
}