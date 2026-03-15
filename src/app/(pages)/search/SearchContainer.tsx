"use client";
import { CardJobItem } from "@/app/components/card/CardJobItem";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const SearchContainer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = searchParams.get("language") || "";
  const city = searchParams.get("city") || "";
  const company = searchParams.get("company") || "";
  const keyword = searchParams.get("keyword") || "";
  const position = searchParams.get("position") || "";
  const workingFrom = searchParams.get("workingFrom") || "";
  const page = searchParams.get("page") || "1";
  const [jobList, setJobList] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState();
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/search?language=${language}&city=${city}
    &company=${company}&keyword=${keyword}&position=${position}&workingFrom=${workingFrom}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        if(data.code == "success") {
          setJobList(data.jobs);
          setTotalPage(data.totalPage);
        }
      })
  }, [language, city, company, keyword, position, workingFrom, page]);

  const handleFilterPosition = (event: any) => {
    const position = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if(position) {
      params.set("position", position);
    } else {
      params.delete("position");
    }
    router.push(`?${params.toString()}`);
  }

  const handleFilterWorkingFrom = (event: any) => {
    const workingFrom = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if(workingFrom) {
      params.set("workingFrom", workingFrom);
    } else {
      params.delete("workingFrom");
    }
    router.push(`?${params.toString()}`);
  }

  const handlePagination = (event: any) => {
    const page = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if(page) {
      params.set("page", page);
    } else {
      params.delete("page");
    }
    router.push(`?${params.toString()}`);
  }

  return (
    <>
      <div className="py-[60px]">
        <div className="container mx-auto px-[16px]">
          <h2 className="font-[700] text-[28px] text-[#121212] mb-[30px]">
            {jobList.length} việc làm <span className="text-[#0088FF]">{language} {city} {company} {keyword} {position} {workingFrom}</span>
          </h2>
          <div 
            className="bg-white rounded-[8px] py-[10px] px-[20px] mb-[30px] flex flex-wrap gap-[12px]"
            style={{
              boxShadow: "0px 4px 20px 0px #0000000F"
            }}
            >
            <select 
              name="" 
              className="border-[1px] border-[#DEDEDE] rounded-[20px] h-[36px] px-[18px] font-[400] text-[16px] text-[#414042]"
              onChange={handleFilterPosition}
              defaultValue={position}
            >
              <option value="">Cấp bậc</option>
              <option value="Intern">Intern</option>
              <option value="Fresher">Fresher</option>
              <option value="Junior">Junior</option>
              <option value="Middle">Middle</option>
              <option value="Senior">Senior</option>
              <option value="Manager">Manager</option>
            </select>
            <select 
              name="" 
              className="border-[1px] border-[#DEDEDE] rounded-[20px] h-[36px] px-[18px] font-[400] text-[16px] text-[#414042]"
              onChange={handleFilterWorkingFrom}
              defaultValue={workingFrom}
            >
              <option value="">Hình thức làm việc</option>
              <option value="office">Tại văn phòng</option>
              <option value="remote">Làm từ xa</option>
              <option value="flexible">Linh hoạt</option>
            </select>
          </div>
          <div className="mb-[30px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
            {jobList.map(item => (
              <CardJobItem 
                key={item.id}
                item={item}
              />
            ))}
          </div>
          {totalPage && (
            <>
              {/* Phân trang */}
              <div className="mt-[30px]">
                <select 
                  onChange={handlePagination}
                  className="border-[1px] border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042]"
                  defaultValue={page}
                >
                  {Array(totalPage).fill("").map((item, index) => (
                    <option key={index} value={index+1}>Trang {index+1}</option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}