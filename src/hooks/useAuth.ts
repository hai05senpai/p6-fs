import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [infoUser, setInfoUser] = useState<any>(null);
  const [infoCompany, setInfoCompany] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/check`, {
      credentials: 'include', // Gửi cookie cùng với yêu cầu
    })
      .then(res => res.json())
      .then(data => {
        if(data.code === "success") {
          setIsLogin(true);
          if(data.infoCompany) {
            setInfoCompany(data.infoCompany);
            setInfoUser(null);
          }
          if(data.infoUser){
            setInfoUser(data.infoUser);
            setInfoCompany(null);
          }
        } else {
          setIsLogin(false);
        }
      })
  }, [pathname]);

  return {
    isLogin: isLogin,
    infoUser: infoUser,
    infoCompany: infoCompany
  };
}