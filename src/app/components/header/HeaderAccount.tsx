import { useAuth } from "@/hooks/useAuth"
import Link from "next/link"
import { useRouter } from "next/navigation";

export const HeaderAccount = () => {
  const { isLogin, infoUser, infoCompany } = useAuth();
  const router = useRouter();

  const handleLogout = (linkRedirect: string) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      credentials: 'include', // Gửi cookie cùng với yêu cầu
    })
      .then(res => res.json())
      .then(data => {
        if(data.code == "success") {
          router.push(linkRedirect);
        } else {
          alert("Đăng xuất thất bại");
        }
      })
  }
  
  return (
    <>
      <div className="inline-flex items-center gap-x-[5px] font-[600] sm:text-[16px] text-[12px] text-white relative group/sub-1">
        {isLogin ? (
        <>
          {/* Đã đăng nhập bằng tài khoản User */}
          {infoUser && (
            <>
              <Link href="/user-manage/profile" className="">
                {infoUser.fullName}
              </Link>
              <ul className="absolute top-[100%] right-[0px] w-[200px] bg-[#000065] hidden group-hover/sub-1:block">
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="/user-manage/profile" className="text-white font-[600] text-[16px]">
                    Thông tin cá nhân
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="/user-manage/cv/list" className="text-white font-[600] text-[16px]">
                    Quản lý CV đã gửi
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2 cursor-pointer" onClick={() => handleLogout("/user/login")}>
                  Đăng xuất
                </li>
              </ul>
            </>
          )}

          {/* Đã đăng nhập bằng tài khoản Company */}
          {infoCompany && (
            <>
              <Link href="#" className="">
                {infoCompany.companyName}
              </Link>
              <ul className="absolute top-[100%] right-[0px] w-[200px] bg-[#000065] hidden group-hover/sub-1:block">
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="" className="text-white font-[600] text-[16px]">
                    Thông tin công ty
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="" className="text-white font-[600] text-[16px]">
                    Quản lý việc làm
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="" className="text-white font-[600] text-[16px]">
                    Quản lý CV
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2 cursor-pointer" onClick={() => handleLogout("/company/login")}>
                  Đăng xuất
                </li>
              </ul>
            </>
          )}
        </>) : (<>
        {/* Chưa đăng nhập */}
        <Link href="/user/login" className="">
          Đăng nhập
        </Link>
        <span className="">/</span>
        <Link href="/user/register" className="">
          Đăng ký
        </Link>
        </>)}
      </div> 
    </>
  )
}