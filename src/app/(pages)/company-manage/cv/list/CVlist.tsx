"use client"
import { useEffect, useState } from "react"
import { CVItem } from "./CVItem";

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

  const handleDeleteSuccess = (deleteId: string) => {
    setListCV(prev => prev.filter(cv => cv.id !== deleteId));
  }
  
  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
        {listCV.map(item => (
          <CVItem 
            key={item.id} 
            item={item} 
            onDeleteSuccess={handleDeleteSuccess}
          />
        ))}
      </div>
    </>
  )
}