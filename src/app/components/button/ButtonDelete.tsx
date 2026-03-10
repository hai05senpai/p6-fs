import { Toaster, toast } from 'sonner';

export const ButtonDelete = (props: {
  api: string,
  id: string,
  onDeleteSuccess: (id: string) => void
}) => {
  const { api } = props;
  const handleDelete = () => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa mục này không?");
    if (confirmDelete) {
      fetch(api, {
        method: "DELETE",
        credentials: "include", // Gửi kèm cookie
      })
        .then(res => res.json())
        .then(data => {
          if(data.code == "success") {
            toast.success("Xóa thành công!");
            props.onDeleteSuccess(props.id);
          }
          if(data.code == "error") {
            toast.error("Xóa thất bại. Vui lòng thử lại.");
          }
        })
    }
  }
  return (
    <>
      <Toaster richColors position="top-right" />
      <button onClick={handleDelete} className="bg-[#FF0000] rounded-[4px] font-[400] text-[14px] text-white inline-block py-[8px] px-[20px]">
        Xóa
      </button>
    </>
  )
}