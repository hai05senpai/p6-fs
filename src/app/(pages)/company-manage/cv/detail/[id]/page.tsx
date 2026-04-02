import { headers } from "next/headers";
import Link from "next/link";
import { workingFromOptions } from "@/config/workingFrom";

export default async function CompanyManageCVListPage({ params }: {
   params: {
     id: string 
    } 
  }) {
  const { id } = await params;
  const headerList = await headers();
  const cookie = headerList.get("cookie");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/cv/detail/${id}`, {
    method: "GET",
    headers: {
      cookie: cookie || ""
    },
    cache: "no-store"
  });
  const data = await res.json();

  let infoCV: any = null;
  let infoJob: any = null;
  if(data.code == "success") {
    infoCV = data.infoCV;
    infoJob = data.infoJob;
    infoJob.workingFrom = workingFromOptions.find(item => item.value == infoJob.workingFrom)?.label;
  }


  return (
    <>
    <div className="py-[60px]">
      <div className="container mx-auto px-[16px]">
        {infoCV && (
          <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
            <div className="flex flex-wrap gap-[20px] items-center justify-between mb-[20px]">
              <h2 className="sm:w-auto w-[100%] font-[700] text-[20px] text-black">
                Thông tin CV
              </h2>
              <Link href={`/company-manage/cv/list`} className="font-[400] text-[14px] text-[#0088FF] underline">
                Quay lại danh sách
              </Link>
            </div>
            
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Họ tên:
              <span className="font-[700] ml-[5px]">
                {infoCV.fullName}
              </span>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Email:
              <span className="font-[700] ml-[5px]">
                {infoCV.email}
              </span>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Số điện thoại:
              <span className="font-[700] ml-[5px]">
                {infoCV.phone}
              </span>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              File CV:
            </div>
            <div className="bg-[#D9D9D9] h-[736px]">
            {/* Preview File CV dạng PDF tại đây */}
              <iframe
                src={infoCV.fileCV}
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
        {infoJob && (
          <div className="border border-[#DEDEDE] rounded-[8px] p-[20px] mt-[20px]">
            <h2 className="sm:w-auto w-[100%] font-[700] text-[20px] text-black mb-[20px]">
              Thông tin công việc
            </h2>

            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Tên công việc:
              <span className="font-[700] ml-[5px]">
                {infoJob.title}
              </span>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Mức lương:
              <span className="font-[700] ml-[5px]">
                {infoJob.salaryMin.toLocaleString("vi-VN")}$ - {infoJob.salaryMax.toLocaleString("vi-VN")}$
              </span>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Cấp bậc:
              <span className="font-[700] ml-[5px]">
                {infoJob.position}
              </span>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Hình thức làm việc:
              <span className="font-[700] ml-[5px]">
                {infoJob.workingFrom}
              </span>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Công nghệ:
              <span className="font-[700] ml-[5px]">
                {infoJob.technologies.join(", ")}
              </span>
            </div>
            <Link href={`/company-manage/job/edit/${infoJob.id}`} className="font-[400] text-[14px] text-[#0088FF] underline">
              Xem chi tiết công việc
            </Link>
          </div>
        )}
      </div>
    </div>
    </>
  )
}