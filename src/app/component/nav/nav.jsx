"use client"
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { useAtom } from "jotai";
import {  editModeAtom, itemAtom } from "../atom/state";
import Image from "next/image";

export default function Nav() {
    const [dataItem, setDataItem] = useAtom(itemAtom);

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Make Your Goal Body", "And Stay Healty"],
            typeSpeed: 50,
            loop: true,
        });

        return () => {
            
            typed.destroy();
        };
    }, []);


    const  handleAddDataClick = () => {
 
        setDataItem(null);
    
        document.getElementById('my_modal_1').showModal();
        
      };
    return (
    <>
            <div className="navbar bg-base-100 border-b border-slate-800 shadow-md">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-pink-600">Diet Tracker </a>
                </div>
                <div className="flex-none gap-2">
                 
        
                </div></div>
                <div className="p-4 w-3/4">
                    <h1 className="text-pink-600 py-2 text-2xl">
                        Intermitate Fasting Tracker,  <span ref={el} ></span>
                    </h1>
                    {/* <p>
                        Introducing our all-in-one Intermittent Fasting app designed to empower you on your wellness journey. With intuitive tracking, personalized plans, and expert guidance, we are here to make precision fasting accessible, enjoyable, and most importantly, effective. Elevate your health and redefine your lifestyle with us.
                    </p> */}
                </div>
                <button className="btn btn-primary btn-sm m-4" onClick={handleAddDataClick}>+ Add Data</button>
            </>

       
            );
}
