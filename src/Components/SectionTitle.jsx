import React from "react";
import Image from "next/image";
//import arrowIcon from "/public/images/Arrow.svg";

const ProjectCard = ({title, styles}) => {
    return (
        <div className={`text-white text-4xl mt-10 underline font-extralight decoration-1 underline-offset-[12px] transform -translate-x-3 ${styles}`}>
            {title}
        </div>
    )
}

export default ProjectCard;