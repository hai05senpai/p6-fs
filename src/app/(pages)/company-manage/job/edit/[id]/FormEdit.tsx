"use client"
import { EditorMCE } from "@/app/components/editor/EditorMCE"
import { useRef, useEffect, useState } from "react"
import JustValidate from "just-validate"
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { Toaster, toast } from 'sonner';
import { workingFromOptions } from "@/config/workingFrom";
import { positionList } from "@/config/positionList";
import router from "next/router";

// Đăng ký plugin
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);


export const FormEdit = (props: {
  id: string
}) => {
  const editorRef = useRef<any>(null);
  const [isValid, setIsValid] = useState(false);
  const [images, setImages] = useState<any[]>([]);
  const [job, setJob] = useState<any>(null);
  const { id } = props;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/job/edit/${id}`, {
      credentials: "include", // Gửi kèm cookie
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.code == "error") {
          router.push("/company-manage/job/list");
        }
        if(data.code == "success") {
          setJob(data.job);
        }
      })
  }, [])

  useEffect(() => {
    if(job) {
      if(job.images && job.images.length > 0) {
        setImages(job.images.map((image: string) => ({
          source: image
        })));
      }

      const validator = new JustValidate("#editForm");

      validator
        .addField('#title', [
          {
            rule: 'required',
            errorMessage: 'Vui lòng nhập tên công việc!'
          },
        ])
        .addField('#salaryMin', [
          {
            rule: 'minNumber',
            value: 0,
            errorMessage: 'Vui lòng nhập mức lương >= 0'
          },
        ])
        .addField('#salaryMax', [
          {
            rule: 'minNumber',
            value: 0,
            errorMessage: 'Vui lòng nhập mức lương >= 0'
          },
        ])
        .onFail(() => {
          setIsValid(false);
        })
        .onSuccess(() => {
          setIsValid(true);
        });
    }
  }, [job]);

  
  const handleSubmit = (event: any) => {
    if(isValid) {
      const title = event.target.title.value;
      const salaryMin = event.target.salaryMin.value;
      const salaryMax = event.target.salaryMax.value;
      const position = event.target.position.value;
      const workingFrom = event.target.workingFrom.value;
      const technologies = event.target.technologies.value;
      let description = "";
      if (editorRef.current) {
        description = (editorRef.current as any).getContent();
      }

      // Tạo FormData
      const formData = new FormData();
      formData.append("title", title);
      formData.append("salaryMin", salaryMin);
      formData.append("salaryMax", salaryMax);
      formData.append("position", position);
      formData.append("workingFrom", workingFrom);
      formData.append("technologies", technologies);
      formData.append("description", description);

      // images
      if(images.length > 0) {
        for (const image of images) {
          formData.append("images", image.file);
        }
      }
      // End images

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/job/edit/${id}`, {
        method: "PATCH",
        body: formData,
        credentials: "include", // Gửi kèm cookie
      })
        .then(res => res.json())
        .then(data => {
          if(data.code == "error") {
            toast.error(data.message);
          }

          if(data.code == "success") {
            toast.success(data.message);
          }
        })
    }
  }


  return (
    <>
      <Toaster richColors position="top-right" />
      {job && (
        <form id="editForm" onSubmit={handleSubmit} action="" className="grid sm:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[15px]">
          <div className="sm:col-span-2">
            <label htmlFor="title" className="block font-[500] text-[14px] text-black mb-[5px]">
              Tên công việc *
            </label>
            <input 
              type="text" 
              name="title" 
              id="title" 
              defaultValue={job.title}
              className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
            />
          </div>
          <div className="">
            <label htmlFor="salaryMin" className="block font-[500] text-[14px] text-black mb-[5px]">
              Mức lương tối thiểu ($) *
            </label>
            <input 
              type="number" 
              name="salaryMin" 
              id="salaryMin" 
              defaultValue={job.salaryMin}
              className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
            />
          </div>
          <div className="">
            <label htmlFor="salaryMax" className="block font-[500] text-[14px] text-black mb-[5px]">
              Mức lương tối đa ($)
            </label>
            <input 
              type="number" 
              name="salaryMax" 
              id="salaryMax" 
              defaultValue={job.salaryMax}
              className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
            />
          </div>
          <div className="">
            <label htmlFor="position" className="block font-[500] text-[14px] text-black mb-[5px]">
              Cấp bậc *
            </label>
            <select 
              name="position" 
              id="position" 
              defaultValue={job.position}
              className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
            >
              {positionList.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="">
            <label htmlFor="workingForm" className="block font-[500] text-[14px] text-black mb-[5px]">
              Hình thức làm việc *
            </label>
            <select 
              name="workingFrom" 
              id="workingFrom" 
              defaultValue={job.workingFrom}
              className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
            >
              {workingFromOptions.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="technologies" className="block font-[500] text-[14px] text-black mb-[5px]">
              Các công nghệ
            </label>
            <input 
              type="text" 
              name="technologies" 
              id="technologies" 
              defaultValue={job.technologies.join(", ")}
              className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="images" className="block font-[500] text-[14px] text-black mb-[5px]">
              Danh sách ảnh *
            </label>
            <FilePond
              name="images"
              allowMultiple={true} // Cho phép chọn nhiều file
              allowRemove={true} // Cho phép xóa ảnh
              labelIdle="+"
              acceptedFileTypes={['image/*']}
              files={images}
              onupdatefiles={setImages}
              maxFiles={8}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block font-[500] text-[14px] text-black mb-[5px]">
              Mô tả chi tiết
            </label>
            <EditorMCE editorRef={editorRef} id="description" value={job.description}/>
          </div>
          <div className="sm:col-span-2">
            <button className="bg-[#0088FF] rounded-[4px] h-[48px] px-[20px] font-[700] text-[16px] text-white">
              Cập nhật
            </button>
          </div>
        </form>
      )}
    </>
  )
}