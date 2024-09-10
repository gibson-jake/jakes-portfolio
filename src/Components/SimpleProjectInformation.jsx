import React from "react";
import Image from "next/image";
import {flushAndExit} from "next/dist/telemetry/flush-and-exit";
//import arrowIcon from "/public/images/Arrow.svg";

const SimpleProjectInformation = ({title, information, styles}) => {
    return (
        <div className={`flex flex-col w-full ${styles}`}>
            <span className={`text-white text-2xl`}>
                {title}
            </span>
            <span className={`text-gray-400`}>
                {information}
            </span>
        </div>
    )
}

export default SimpleProjectInformation;