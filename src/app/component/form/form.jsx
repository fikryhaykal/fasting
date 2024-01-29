"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { itemAtom } from "../atom/state";
import toast from "react-hot-toast";


export const Form = () => {

    const router = useRouter();
    const [dataItem, setDataItem] = useAtom(itemAtom);

    const [date, setDate] = useState("");
    const [weight, setWeight] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [notes, setNotes] = useState("");




    useEffect(() => {
        if (dataItem != null) {

            setDate(dataItem.date);
            setWeight(dataItem.weight);
            setStart(dataItem.start);
            setEnd(dataItem.end);
            setNotes(dataItem.notes);
        }
        else {

            setDate("");
            setWeight("");
            setStart("");
            setEnd("");
            setNotes("");
        }
    }, [dataItem]);





    async function handleCreate() {
        if (dataItem == null) {
            const res = await fetch("https://v1.appbackend.io/v1/rows/vDvidNdifZgr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([{ date, weight, start, end, notes }]),
            });
            const data = await res.json();
            toast.success("Data Berhasil di tambah");
        } else {
            const res = await fetch("https://v1.appbackend.io/v1/rows/vDvidNdifZgr", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ _id: dataItem._id, date, weight, start, end, notes }),
            });
            const data = await res.json();

            toast.success("Data Berhasil diUpdate");
        }




        router.refresh();
      
        setDate("");
        setWeight("");
        setStart("");
        setEnd("");
        setNotes("");
    }

    return (
        <div className="w-full mb-5">
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Date</span>
                </div>
                <input type="date" value={date} placeholder="Type here" className="input input-bordered w-full "
                    onChange={(e) => setDate(e.target.value)}
                />

            </label>

            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Weight</span>
                </div>
                <input type="weight" value={weight} placeholder="...Kg" className="input input-bordered w-full "
                    onChange={(e) => setWeight(e.target.value)}
                />

            </label>


            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Start</span>
                </div>
                <input type="text" value={start} placeholder="00:00" name="start" className="input input-bordered w-full "
                    onChange={(e) => setStart(e.target.value)}
                />

            </label>

            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">End</span>
                </div>
                <input type="text" value={end} placeholder="00:00" name="end" className="input input-bordered w-full "
                    onChange={(e) => setEnd(e.target.value)}
                />

            </label>


            <textarea value={notes} name="notes" className="textarea textarea-bordered w-full my-5" placeholder="Notes"
                onChange={(e) => setNotes(e.target.value)}
            ></textarea>

            <div className="flex justify-between"
            >
                <button className="btn">Close</button>
                <button className="btn btn-sm btn-accent" onClick={handleCreate}>
                    Save
                </button>

            </div>

        </div>
    )
}