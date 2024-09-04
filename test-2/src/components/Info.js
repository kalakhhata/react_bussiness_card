import React from "react";
import dp from "../images/dp.jpeg";

export default function Info(){
    return (
        <header>
                <img src={dp} />
                <h2>Om Patel</h2>
                <p className="text1">Frontend Developer</p>
                <p className="text2">ompatel website</p>
                <button><i className="fa-solid fa-envelope fa-2xl"></i><span>Email</span></button>
        </header>
    )
}

