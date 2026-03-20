"use client"
import { cvStatusList } from "@/config/cvList"
import { workingFromOptions } from "@/config/workingFrom"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaBriefcase, FaCircleCheck, FaEnvelope, FaEye, FaPhone, FaUserTie } from "react-icons/fa6"

export const CVlist = () => {
  const [listCV, setListCV] = useState<any[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/cv/list`, {
      method: "GET",
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => {
        if (data.code == "success") {
          setListCV(data.cvList);
        }
      })
  }, [])
  
  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
        {listCV.map((item) => {
          const workingFrom = workingFromOptions.find(option => option.value === item.jobWorkingFrom)?.label;
          const status = cvStatusList.find(option => option.value === item.status)?.label;
          const statusColor = cvStatusList.find(option => option.value === item.status)?.color;
          return (
            <div 
              key={item.id}
              className="border border-[#DEDEDE] rounded-[8px] flex flex-col relative truncate"
              style={{
                background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
              }}
            >
              <img 
                src="/assets/images/card-bg.svg" 
                alt="" 
                className="absolute top-[0px] left-[0px] w-[100%] h-auto" 
              />
              <h3 className="mt-[20px] mx-[16px] font-[700] text-[18px] text-[#121212] text-center flex-1 whitespace-normal line-clamp-2">
                {item.jobTitle}
              </h3>
              <div className="mt-[12px] text-center font-[400] text-[14px] text-black">
                Ứng viên: <span className="font-[700]">{item.fullName}</span>
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaEnvelope className="" /> {item.email}
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaPhone className="" /> {item.phone}
              </div>
              <div className="mt-[12px] text-center font-[600] text-[16px] text-[#0088FF]">
                {item.jobSalaryMin.toLocaleString("vi-VN")}$ - {item.jobSalaryMax.toLocaleString("vi-VN")}$
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaUserTie className="text-[16px]" /> {item.jobPosition}
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaBriefcase className="text-[16px]" /> {workingFrom}
              </div>
              <div className={`mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] ` + (item.viewed ? "text-[#0088FF]" : "text-[#FF0000]")}>
                <FaEye className="text-[16px]" /> {item.viewed ? "Đã xem" : "Chưa xem"}
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px]" style={{ color: statusColor }}>
                <FaCircleCheck className="text-[16px]" /> {status}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-[8px] mt-[12px] mb-[20px] mx-[10px]">
                <Link href="#" className="bg-[#0088FF] rounded-[4px] font-[400] text-[14px] text-white inline-block py-[8px] px-[20px]">
                  Xem
                </Link>
                <Link href="#" className="bg-[#9FDB7C] rounded-[4px] font-[400] text-[14px] text-black inline-block py-[8px] px-[20px]">
                  Duyệt
                </Link>
                <Link href="#" className="bg-[#FF5100] rounded-[4px] font-[400] text-[14px] text-white inline-block py-[8px] px-[20px]">
                  Từ chối
                </Link>
                <Link href="#" className="bg-[#FF0000] rounded-[4px] font-[400] text-[14px] text-white inline-block py-[8px] px-[20px]">
                  Xóa
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}