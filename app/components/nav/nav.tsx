'use client'
import Link from "next/link"

import { useEffect, useState } from "react"

const Nav = () =>{
    const [header,setHeader] = useState(false);

    const scrollHeader = () => {
        if(window.scrollY >= 20){
            setHeader(true)
        }else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",scrollHeader)

        return()=> {
            window.addEventListener("scroll",scrollHeader)
        }

    },[])

    return(
        <div className={header ? " fixed w-[100%]  bg-[#14151C] bg-opacity-85" : " bg-[transparent]"}>
            <div className=" header flex w-[100%] justify-start gap-3 p-4">
                <div className="logo bg-slate-200 p-5 rounded">
                   
                </div>
                    <div className="menu">
                        <nav>
                            <ul className="flex gap-[20px] p-2 font-bold">
                                <li>
                                    <Link href="">Home</Link>
                                </li>
                                <li>
                                    <Link href="">Games</Link>
                                </li>
                                <li>
                                    <Link href="">Shop</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
            </div>
        </div>
    )
}

export default Nav