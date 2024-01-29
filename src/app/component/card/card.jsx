"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { formatCustomDate } from "./utils/formateddate";
import { calculateTimeAndPercentage } from "./utils/timeUtils";
import { useAtom } from "jotai";
import {  editModeAtom, itemAtom } from "../atom/state";
import toast from "react-hot-toast";


export const Card = ({ item }) => {

  const [dataItem, setDataItem] = useAtom(itemAtom)

  const router = useRouter();
  const formattedDate = formatCustomDate(item.date);

  const { hoursDifference, minutesDifference, percentage, textColorClass } = calculateTimeAndPercentage(item.start, item.end);

  const [deleteConfirmation, setDeleteConfirmation] = useState(false);




  const handleEdit = () => {
    setDataItem(item); 
 
  
    document.getElementById('my_modal_1').showModal()
    
  };

  const handleDelete = async () => {
    if (deleteConfirmation) {
      const res = await fetch(
        "https://v1.appbackend.io/v1/rows/vDvidNdifZgr",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([item._id]),
        }
      );
      const data = await res.json();
      toast.success("Data Berhasil di hapus");
      router.refresh();
    } else {
      setDeleteConfirmation(true);
    }
  };

  return (
    <>
      <div className="card glass">
        <div className="card-body">
          <h2 className="card-title ">Date : {formattedDate}</h2>
          <p>Start :{item.start} , End :{item.end}</p>
          <div className="mx-auto p-2 ">
            <div className={`radial-progress ${textColorClass}`} style={{ '--value': percentage, '--size': '10rem', '--thickness': '1rem', }} role="progressbar">{percentage.toFixed(1)}%</div>
          </div>
          <div className=" flex justify-between  items-center">
            <div className={`text-slate-300 font-light`}>{hoursDifference} hours {minutesDifference} minutes</div>
            <div className="badge badge-accent badge-outline">{item.weight} Kg</div>
          </div>
          <div className={`capitalize ${textColorClass}`}>{item.notes}</div>

          <div className="card-actions justify-between align-middle items-center">

            <button className="btn btn-sm btn-active" onClick={handleEdit}>
              Edit
            </button>
            {deleteConfirmation ? (
              <button className="btn btn-outline btn-sm btn-error" onClick={handleDelete}>
                Yakin
              </button>
            ) : (
              <button className="btn btn-sm btn-warning" onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>


    </>
  )
}