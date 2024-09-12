"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import animGraph from '/public/images/impulse/AnimGraph.png'
import documentation from '/public/images/impulse/Documentation.png'
import matchmaking from '/public/images/impulse/Matchmaking.png'
import misc from '/public/images/impulse/Misc.png'
import movement from '/public/images/impulse/Movement.png'
import uiFunctionality from '/public/images/impulse/UIFunctionality.png'
import utility from '/public/images/impulse/Utility.png'
import ProjectCard from "@/Components/ProjectCard";
import SectionTitle from "@/Components/SectionTitle";
import {useEffect, useState} from "react";
import SimpleProjectInformation from "@/Components/SimpleProjectInformation";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <div className={'bg-mainBackgroundColor w-full'}>
                <div className={"flex flex-col min-h-[50%] *:gap-10 gap-10 mx-auto max-w-[50%] w-fit pt-16"}>
                    <SectionTitle title={"Impulse"}/>
                    <div className={"flex flex-row"}>
                        <div className={"flex flex-col"}>
                            <SimpleProjectInformation title={"Engine"} information={"Unreal Engine 5"}/>
                            <SimpleProjectInformation title={"Team Size"} information={"Solo Project"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Current Status"} information={"In Development"} styles={"mt-5"}/>
                        </div>
                        <div className={"flex flex-col max-w-[75%] text-gray-400"}>
                            <p>This project was started because I wanted to try my hand at a real multiplayer experience from the ground up. I've always been fascinated the intricacies of multiplayer and what they bring to the world of gaming. I figured, why not try it myself? I may have been a little naive when it came to the scope of the project, but I've definitely been up to the task ever since. I've learned so much about game development working on this project from project management skills like time management and documentation to more technical things like what it takes to make a well networked multiplayer game and how to render different layers of post process materials. It has honestly been my favorite game development experience and I'm excited to see where this project will end up as I keep working on it.</p>
                            <br/>
                            <p>Impulse is built to be a multiplayer FPS with the core gamemode being a take on team deathmatch. This arenas game mode is a 3v3 elimination mode where the last team standing in a best of 5 (and win by 2 rounds) is the victor. The game features a variety of abilities that can serve as utility, enhance movement, or both, as well as a few different weapons that the player can pick to better play in their style. As a bonus, the game runs on a custom matchmaking server built from scratch. It's not yet particularly pretty, as I'm using this project to show off my technical skills. All of the visuals will be updated eventually, but that'll have to wait until I have more practice with optimizing visuals for a game ready environment.</p>                      
                        </div>
                    </div>
                    <SectionTitle title={"Abilities"}/>
                    <div className={'flex flex-row'}>
                        <ProjectCard
                            title={'Movement'}
                            tools={"Networking, Player Interaction & Server Checks"}
                            imageSource={movement}
                            link={"/impulse/movement"}
                        />
                        <ProjectCard
                            title={'Utilities'}
                            tools={"Sever Authority Events & Team Specific Interactions"}
                            imageSource={utility}
                            link={"/impulse/utilities"}
                        />
                    </div>
                    <SectionTitle title={"Juice & Polish"}/>
                    <div className={'flex flex-row'}>
                        <ProjectCard
                            title={'Procedural Animation'}
                            tools={"Animation Graphs & Inverse Kinematics"}
                            imageSource={animGraph}
                            link={"/impulse/animations"}
                        />
                        <ProjectCard
                            title={'HUD and UI Functionality'}
                            tools={"Client Specific RPCs & Player States"}
                            imageSource={uiFunctionality}
                            link={"/impulse/ui"}
                        />
                        <ProjectCard
                            title={'Misc. Features'}
                            tools={"Match Chat System, Level Design, & Visuals"}
                            imageSource={misc}
                            link={"/impulse/misc"}
                        />
                    </div>
                    <SectionTitle title={"Juice & Polish"}/>
                    <div className={'flex flex-row'}>
                        <ProjectCard
                            title={'Matchmaking'}
                            tools={"ASP.NET, WebSockets & Online Subsystems"}
                            imageSource={matchmaking}
                            link={"/impulse/matchmaking"}
                        />
                        <ProjectCard
                            title={'Documentation'}
                            tools={"Code Comments, Game Design Docs, & Version Control"}
                            imageSource={documentation}
                            link={"/impulse/documentation"}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
