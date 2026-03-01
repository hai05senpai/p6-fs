"use client"
import { useAuth } from "@/hooks/useAuth"
import JustValidate from "just-validate";
import { useEffect, useState } from "react";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { Toaster, toast } from 'sonner';

// Đăng ký plugin
registerPlugin(
  FilePondPluginFileValidateType, 
  FilePondPluginImagePreview
);

export const FormProfile = () => {
  const { infoCompany } = useAuth();
  const [logos, setLogos] = useState<any[]>([]);
  const [cityList, setCityList] = useState<any[]>([]);
  const [isValid, setIsValid] = useState(false);
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/city/list`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setCityList(data.cityList);
      })
  }, []);

  useEffect(() => {
    if(infoCompany) {
      if(infoCompany.logo) {
        setLogos([
          {
            source: infoCompany.logo
          }
        ]);
      }
      const validator = new JustValidate("#profileForm");

      validator
        .addField('#companyName', [
          {
            rule: 'required',
            errorMessage: 'Vui lòng nhập tên công ty!'
          },
          {
            rule: 'maxLength',
            value: 200,
            errorMessage: 'Tên công ty không được vượt quá 200 ký tự!',
          },
        ])
        .addField('#email', [
          {
            rule: 'required',
            errorMessage: 'Vui lòng nhập email của bạn!',
          },
          {
            rule: 'email',
            errorMessage: 'Email không đúng định dạng!',
          },
        ])
        .onFail(() => {
          setIsValid(false);
        })
        .onSuccess(() => {
          setIsValid(true);
        })
    }
  }, [infoCompany]);

  // Hàm xử lý submit form
  const handleSubmit = (event: any) => {
    if(!isValid) {
      toast.error("Vui lòng điền đầy đủ thông tin theo yêu cầu!");
      return;
    }
    const companyName = event.target.companyName.value;
    const email = event.target.email.value;
    const city = event.target.city.value;
    const address = event.target.address.value;
    const companyModel = event.target.companyModel.value;
    const companyEmployees = event.target.companyEmployees.value;
    const workingTime = event.target.workingTime.value;
    const workOvertime = event.target.workOvertime.value;
    const description = event.target.description.value;
    const phone = event.target.phone.value;
    let logo = null;
    if(logos.length > 0) {
      logo = logos[0].file;
    }

    // Tạo FormData
    const formData = new FormData();
    formData.append("companyName", companyName);
    formData.append("email", email);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("companyModel", companyModel);
    formData.append("companyEmployees", companyEmployees);
    formData.append("workingTime", workingTime);
    formData.append("workOvertime", workOvertime);
    formData.append("description", description);
    formData.append("phone", phone);
    formData.append("logo", logo);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/profile`, {
      method: "PATCH",
      body: formData,
      credentials: "include" // Gửi kèm cookie
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.code == "error") {
          toast.error(data.message);
        }

        if(data.code == "success") {
          toast.success(data.message);
        }
      })
  }

  return (
    <>
      <Toaster richColors position="top-right"/>
      {infoCompany && (
        <>
          <form id="profileForm" onSubmit={handleSubmit} action="" className="grid sm:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[15px]">
            <div className="sm:col-span-2">
              <label htmlFor="companyName" className="block font-[500] text-[14px] text-black mb-[5px]">
                Tên công ty *
              </label>
              <input 
                type="text" 
                name="companyName" 
                id="companyName" 
                defaultValue={infoCompany.companyName}
                className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black" 
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="logo" className="block font-[500] text-[14px] text-black mb-[5px]">
                Logo
              </label>
              <FilePond 
                name="logo"
                allowMultiple={false} // Chỉ cho phép upload 1 ảnh
                allowRemove={true} // Cho phép xóa ảnh đã chọn
                labelIdle="+"
                acceptedFileTypes={['image/*']} // Chỉ chấp nhận file ảnh
                files={logos}
                onupdatefiles={setLogos} // Cập nhật state khi có thay đổi file
              />
            </div>
            <div className="">
              <label htmlFor="city" className="block font-[500] text-[14px] text-black mb-[5px]">
                Thành phố
              </label>
              <select 
                name="city" 
                id="city" 
                defaultValue={infoCompany.city}
                className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
              >
                {cityList.map((city: any) => (
                  <option key={city._id} value={city._id}>{city.name}</option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="address" className="block font-[500] text-[14px] text-black mb-[5px]">
                Địa chỉ
              </label>
              <input 
                type="text" 
                name="address" 
                id="address" 
                defaultValue={infoCompany.address}
                className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
              />
            </div>
            <div className="">
              <label htmlFor="companyModel" className="block font-[500] text-[14px] text-black mb-[5px]">
                Mô hình công ty
              </label>
              <input 
                type="text" 
                name="companyModel" 
                id="companyModel" 
                defaultValue={infoCompany.companyModel}
                className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
              />
            </div>
            <div className="">
              <label htmlFor="companyEmployees" className="block font-[500] text-[14px] text-black mb-[5px]">
                Quy mô công ty
              </label>
              <input 
                type="text" 
                name="companyEmployees" 
                id="companyEmployees" 
                defaultValue={infoCompany.companyEmployees}
                className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
              />
            </div>
            <div className="">
              <label htmlFor="workingTime" className="block font-[500] text-[14px] text-black mb-[5px]">
                Thời gian làm việc
              </label>
              <input 
                type="text" 
                name="workingTime" 
                id="workingTime" 
                defaultValue={infoCompany.workingTime}
                className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
              />
            </div>
            <div className="">
              <label htmlFor="WorkOvertime" className="block font-[500] text-[14px] text-black mb-[5px]">
                Làm việc ngoài giờ
              </label>
              <input 
                type="text" 
                name="workOvertime" 
                id="workOvertime" 
                defaultValue={infoCompany.workOvertime}
                className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
              />
            </div>
            <div className="">
              <label htmlFor="email" className="block font-[500] text-[14px] text-black mb-[5px]">
                Email *
              </label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                defaultValue={infoCompany.email}
                className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
              />
            </div>
            <div className="">
              <label htmlFor="phone" className="block font-[500] text-[14px] text-black mb-[5px]">
                Số điện thoại
              </label>
              <input 
                type="text" 
                name="phone" 
                id="phone" 
                defaultValue={infoCompany.phone}
                className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block font-[500] text-[14px] text-black mb-[5px]">
                Mô tả chi tiết
              </label>
              <textarea 
                name="description" 
                id="description" 
                defaultValue={infoCompany.description}
                className="w-[100%] h-[350px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <button className="bg-[#0088FF] rounded-[4px] h-[48px] px-[20px] font-[700] text-[16px] text-white">
                Cập nhật
              </button>
            </div>
          </form>
        </>
      )}
    </>
  )
}