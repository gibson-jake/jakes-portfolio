"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import SectionTitle from "@/Components/SectionTitle";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import neo4j from "/public/Images/impulse/matchmaking/neo4j.png";

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
                                    With every large online multiplayer match based game has a matchmaking server for players to be paired with and against each other using a single click. This model avoids using a server list system, as there are no private host servers as of now.                                <br/>
                                </p>
                                <p className={"text-gray-400"}>
                                    These are the tools and technologies that I'm using:
                                </p>
                                <ul className={"list-disc ml-8 "}>
                                    <li><Link href={"#passive"} className={"text-blue-400"}>ASP.NET</Link></li>
                                    <li><Link href={"#stimulant"} className={"text-blue-400"}>WebSockets</Link></li>
                                    <li><Link href={"#blink"} className={"text-blue-400"}>Neo4j</Link></li>
                                </ul>
                                <p className={"text-gray-400"}>
                                    Here's how I used them...
                                </p>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>ASP.NET</h3>
                                <p className={"text-gray-400"}>
                                    I've restarted this particular project at least four times. The first try was with
                                    node.js, and I was able to set up sending and receiving information quite easily.
                                    However, I realized that I was going to be a little more limited, especially since I
                                    have used very little JavaScript. Through my research, I found that .NET would be a
                                    good place to start. It seemed to have a lot of different techs that could help me
                                    out with a little bit of work, and it's also in C#, a language I'm familiar with. I
                                    went through a few iterations on different versions of .NET until I eventually
                                    landed on ASP.NET.
                                    <br/><br/>
                                    Once I got the server up and running, I was able to send and receive data with
                                    standard verb requests. Unfortunately, this was still far from what's needed for a
                                    matchmaking server. The next step is getting two way communication between the
                                    server and the clients.
                                    <br/><br/>
                                </p>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>WebSockets</h4>
                                <p className={"text-gray-400"}>
                                    WebSockets come in to fix up the problem mentioned before: two way communication. With standard verb requests, a client sends a request to the server, and the server can respond. However, the server can't send information to a client without the initial request. WebSockets fix this issue by opening a two-way road for communication, which will allow the server to send information when it needs to, like when a match was found, for example. WebSockets open a lot of doors for quality of life changes that I can later implement into Impulse. Private messages will be built on top of this system, where one client sends a chat to the server, and the server finds the recipient's websocket and sends the chat to them through it. In the same way, it allows the server to send notifications to clients when something happens, like a party request, a friend coming online, and important server messages.                                    <br/><br/>
                                </p>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Net4j</h4>
                                <p className={"text-gray-400"}>
                                    When determining how I wanted to store accounts, I started with MySQL since I was familiar with its capabilities. I quickly realized that setting up friends lists and temporary connections would be a pain to set up. After doing some more research, I came across Neo4j, a solution that I could host myself, and allowed for connections between nodes (and they could be shown visually too!). These nodes are going to be accounts, and their connections will be how friendships are made. Neo4j uses a language very similar to SQL called CQL. This meant that picking up the language was easy, and I could quickly fill in some new query code where my old SQL sat. Connecting to the database is quick, and all handled by the matchmaking server... which is now becoming much more than just a matchmaking server.
                                    <br/><br/>
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <div className={"flex flex-row"}>
                                    <Image
                                        src={neo4j}
                                        height={225}
                                        width={500}
                                        className={"rounded-xl h-fit"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
