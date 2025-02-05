import React from "react";
import Image from "next/image";
//import arrowIcon from "/public/images/Arrow.svg";

const ProjectCard = ({title, tools, role, imageSource, link, styles}) => {
    return (
        <div className={`group ${styles}`}>
            <a href={link}>
                <Image
                    className={"rounded-xl h-72 object-cover w-full"}
                    src={imageSource}
                    alt="cover"
                    height={250}
                />
                <div className={"mb-6"}>
                    <div className={"flex flex-col font-bold mt-2"}>
                        <span className={"font-light text-gray-400 text-[12px]"}>{tools}</span>
                        <span className={"text-3xl font-light text-white md:h-[75%]"}>{title}</span>
                        <span className={"font-light text-gray-400 text-[15px] my-1"}>{role}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard;