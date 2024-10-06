"use client";
import React from "react";
import { CardProps } from "@/app/types/types";
import Button from "../button/Button";

const Card = (props: CardProps) => {
    return (
        <>
<div className= "border-8 bg-green-300 w-full max-h-80 mx-16 text-center rounded-xl drop-shadow-md hover:scale-105 hover:shadow-lg p-6 pl-8 transtion duration-300 ease-in-out  hover:bg-green-500 hover:text-black hover:cursor-pointer text-xl " >
                <h1 className="text-2xl pt-3 pb-3 underline bg-blue-400 rounded-md">Student Id Card</h1>
                <div className="text-start">
                    <h2>Name: {props.name}</h2>
                    <h2>Age: {props.age}</h2>
                    <h2>Roll Number: {props.rollNumber}</h2>
                    <h2>Day: {props.day}</h2>
                    <h2>Time: {props.time}</h2>
                </div>
                <Button btnText={props.cardBtnText} />
            </div>
        </>
    );
};

export default Card;