"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import SectionTitle from "@/Components/SectionTitle";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import p4 from "/public/Images/impulse/documentation/P4V.png";
import cleanCode from "/public/Images/impulse/documentation/CommentedCode.png";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <div className={'bg-mainBackgroundColor w-full min-h-screen'}>
                <div className={'mt-20 max-w-[50%] m-auto pb-5'}>
                    <SectionTitle title={"Matchmaking"}/>
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Content</h3>
                                <p className={"text-gray-400"}>
                                    This is where you'll find all the different things I've done related to documenting and researching my journey on this project.                                </p>
                                <p className={"text-gray-400"}>
                                    I've got a few systems in place for keeping everything organized:
                                </p>
                                <ul className={"list-disc ml-8 "}>
                                    <li><Link href={"#passive"} className={"text-blue-400"}>Version Control</Link></li>
                                    <li><Link href={"#stimulant"} className={"text-blue-400"}>Clean Code</Link></li>
                                    <li><Link href={"#blink"} className={"text-blue-400"}>Research & Ideas</Link></li>
                                </ul>
                                <p className={"text-gray-400"}>
                                    Here's how I documented them...
                                </p>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Version Control</h3>
                                <p className={"text-gray-400"}>
                                    I started this journey using GitHub, because it's always been the default for my
                                    relatively small projects. It didn't take long before I realized that GitHub's free
                                    tier wasn't going to cut it, and I didn't feel like paying $5/m on a project that I
                                    wasn't sure was going anywhere. Looking back, I could have and it might have been
                                    worth it, but what I did instead is definitely better for me.
                                    <br/><br/>
                                    I started looking for a new solution that I could host myself. GitLab was on the
                                    list, especially since I knew how Git worked in general, but then I found Perforce.
                                    Perforce quickly became my favorite version control. I love the way you can check
                                    out files that you're changing, the merge/diff tool is really good, and it even has
                                    Unreal Engine Blueprint support. I run the Perforce server on an old computer I put
                                    together with spare parts, and it's been a pretty flawless experience. The fact that
                                    it's built to handle large binary files is so nice too. Sorry, I'm sure I'm rambling
                                    now, but I honestly love using Perforce.
                                    <br/><br/>
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <div className={"flex flex-row"}>
                                    <Image
                                        src={p4}
                                        height={225}
                                        width={500}
                                        className={"rounded-xl h-fit"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Clean Code</h4>
                                <p className={"text-gray-400"}>
                                    I really didn't think that this project would get as big as it did, but I guess
                                    that's what happens when your passion for something only grows as you keep working
                                    on it. In the beginning, I was rarely commenting my code, but the more I looked into
                                    Unreal's source code, the more I wanted to replicate the organization and
                                    documentation that it has. Seeing what a function runs, and why it takes the inputs
                                    that is does without having to dig it up because some kind soul wrote a nice comment
                                    about it is so nice. It's definitely saved me on my own stuff when I come back to
                                    something after not touching it for a while. As I work on old files, I've been going
                                    through and documenting as much as I can before moving on so all my code is easier
                                    to read and use. The header files are becoming more comment than code haha! </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <div className={"flex flex-row"}>
                                    <Image
                                        src={cleanCode}
                                        height={225}
                                        width={500}
                                        className={"rounded-xl h-fit"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Research & Ideas</h4>
                                <p className={"text-gray-400"}>
                                    I'm always looking for new ideas on what to do next on the project, and half of the
                                    time I'm not around or don't have time to implemnent it at the time. I've created a Discord server with dozens of channels for different topics of research, ideas, and keeping track of things that I've tried before. I invited a handful gaming friends to it, and now I've got real players that can provide real feedback and ideas when we test and talk about the project. Overall, it's been a super worthwhile endeavor to setup for this project, and it's basically become my game design document for now.                                    <br/><br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
