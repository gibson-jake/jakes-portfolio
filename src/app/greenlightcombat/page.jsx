"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import greenLightCombat1 from '/public/images/greenlightcombat/GreenLightCombat1.png'
import greenLightCombat2 from '/public/images/greenlightcombat/GreenLightCombat2.png'
import greenLightCombat3 from '/public/images/greenlightcombat/GreenLightCombat3.png'
import greenLightCombat4 from '/public/images/greenlightcombat/GreenLightCombat4.png'
import greenLightCombatConcept from '/public/images/greenlightcombat/GreenLightCombatConceptArt.jpg'
import SectionTitle from "@/Components/SectionTitle";
import React, {useEffect, useState} from "react";
import SimpleProjectInformation from "@/Components/SimpleProjectInformation";
import Carousel from "@/Components/Carousel";
import Link from "next/link";

export default function Home() {
    const slides = [
        {
            type: 'image',
            src: greenLightCombat1,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: greenLightCombatConcept,
            alt: 'Poster',
        },
        {
            type: 'image',
            src: greenLightCombat2,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: greenLightCombat3,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: greenLightCombat4,
            alt: 'Game Image',
        },
    ];
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <div className={'bg-mainBackgroundColor w-full'}>
                <div className={'mt-20 max-w-[50%] m-auto pb-5'}>
                    <SectionTitle title={"Green Light Combat"}/>
                    <Carousel slides={slides}/>
                    <div className={"flex flex-row gap-10"}>
                        <div className={"flex flex-col pt-12"}>
                            <SimpleProjectInformation title={"Engine"} information={"Unity"}/>
                            <SimpleProjectInformation title={"Platform"} information={"Desktop"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Duration"} information={"6 Weeks"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Team Size"} information={"4 Members"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Current Status"} information={"Unreleased/Prototype"} styles={"mt-5"} />
                        </div>
                        <div className={"flex flex-col max-w-[75%] text-gray-400"}>
                            <SectionTitle title={"Development"} styles={"mb-5"}/>
                            <p>
                                This project was developed with the same group of friends that created Jump Ship! This was our first protoype. We initially came up with the idea as a joke in some random conversation, and our artist decided it would be fun to make a quick sketch of what it might look like. Once we all saw the potential in a fun little game like this, we knew it was time to start learning game development!                            </p>
                            <br/>
                            <p>
                                I completed work on the following areas:
                            </p>
                            <ul className={"list-disc ml-8"}>
                                <li>Core game logic</li>
                                <li>Player Interaction</li>
                                <li>Multiplayer</li>
                                <li>UI Implementation</li>
                            </ul>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Overview</h3>
                            <p>
                                Green Light Combat is a combination of a brawl type game, but following the rules of the childrens' classic redlight-greenlight. When the players are in the arena, they're free to fight each other unobstructed when the light is green. When the light turns red, however, they have to stop moving or risk taking a lot of damage.                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Core Game Logic</h3>
                            <p>
                                I wrote up the core rules for this game while the other programmer worked on juice and polish. I set the game rules for when players got hurt, and how they interact with each other. This included starting players in the join lobby where they could pick their weapons, as well as defining what constitutes a round and a victory.                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Player Interaction</h3>
                            <p>
                                We knew that we wanted to do some sort of multiplayer from the beginning, because it would be pretty cool to play against your friends and see who was the better brawler. This meant that I had to be very open with the way that I designed the control inputs to allow for a variety of control schemes from different types of controllers to work. You can join with pretty much any controller and the game will work as intended. When deciding what buttons do which actions, I looked at other games in the same genre as inspiration such as Mortal Kombat or Smash Bros. to determine what felt comfortable when fighting.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Multiplayer</h3>
                            <p>
                                Since networking is hard, and this was our first actual prototype for a game, we went with couch multiplayer. Since I've always been interested in the prospects of adding multiplayer to a game, I took up the task of handling input from multiple controllers so players could play together. The game currently supports 2 players, however, the multiplayer features are set up to handle up to four, in the case that we wanted to adjust the balance of the game to be a 2v2.                            
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
