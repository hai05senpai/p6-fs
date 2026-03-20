"use client";
import { useEffect, useState } from "react";
import { CardCompanyItem } from "@/app/components/card/CardCompanyItem";

export const CompanyList = () => {
  const [companyList, setCompanyList] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/list?limit=2&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if(data.code === "success"){
          setCompanyList(data.companyList);
          setTotalPage(data.totalPage);
        }
      })
  }, [page]);

  const handlePagination = (event: any) => {
    const value = event.target.value;
    setPage(parseInt(value));
  }

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-[20px] gap-x-[10px] gap-y-[20px]">
        {/* Item */}
        {companyList.map((item) => (
          <CardCompanyItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {totalPage > 1 && (
        <>
          <div className="mt-[30px]">
            <select 
              name="" 
              className="border border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042] outline-none"
              onChange={handlePagination}
            >
              {Array(totalPage).fill("").map((_, index)=> (
                <option key={index} value={index+1}>Trang {index+1}</option>
              ))}
            </select>
          </div>
        </>
      )}
    </>
  )
}