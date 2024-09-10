"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import jumpship1 from '/public/images/jumpship/JumpShip1.jpg'
import jumpship2 from '/public/images/jumpship/JumpShip2.jpg'
import jumpshipPoster from '/public/images/jumpship/JumpShipPoster.png'
import SectionTitle from "@/Components/SectionTitle";
import React, {useEffect, useState} from "react";
import SimpleProjectInformation from "@/Components/SimpleProjectInformation";
import Carousel from "@/Components/Carousel";
import Link from "next/link";

export default function Home() {
    const slides = [
        {
            type: 'image',
            src: jumpshipPoster,
            alt: 'Poster',
        },
        {
            type: 'image',
            src: jumpship1,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: jumpship2,
            alt: 'Game Image',
        },
        {
            type: 'video',
            src: 'https://www.youtube.com/embed/tQSuYl02890',
            title: 'YouTube Video',
        },
        // Add as many slides as you want
    ];
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <div className={'bg-mainBackgroundColor w-full'}>
                <div className={'mt-20 max-w-[50%] m-auto pb-5'}>
                    <SectionTitle title={"Jump Ship!"}/>
                    <Carousel slides={slides}/>
                    <div className={"flex flex-row gap-10"}>
                        <div className={"flex flex-col pt-12"}>
                            <SimpleProjectInformation title={"Engine"} information={"Unity"}/>
                            <SimpleProjectInformation title={"Platform"} information={"Mobile and Web"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Duration"} information={"8 Weeks"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Team Size"} information={"4 Members"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Current Status"} information={"Released"} styles={"mt-5"} />
                            <SimpleProjectInformation title={"Links"} information={<span className={"text-blue-400"}><Link passHref={true} href={"https://chamberlands.itch.io/jump-ship"}>Itch.io</Link><br/><Link passHref={true} href={"https://play.google.com/store/apps/details?id=com.MuuMuuGames.JumpShip"}>Google Play Store</Link></span>} styles={"mt-5"}/>
                        </div>
                        <div className={"flex flex-col max-w-[75%] text-gray-400"}>
                            <SectionTitle title={"Development"} styles={"mb-5"}/>
                            <p>
                                I developed this project alongside a few friends with the purpose of honing in our game
                                development skills - especially for mobile applications built in Unity. The team
                                consisted of two programmers (including myself), and two artists. While we stuck to our
                                roles for the most part, when extra work was needed in certain areas, we'd all try to
                                help each other out.
                            </p>
                            <br/>
                            <p>
                                I completed work on the following areas:
                                <ul className={"list-disc ml-8"}>
                                    <li>Player interaction</li>
                                    <li>Gameplay functionality: item pickups, score, abilities</li>
                                    <li>UI Implementation</li>
                                    <li>Porting to web application for itch.io</li>
                                </ul>
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Overview</h3>
                            <p>
                                Jump Ship is an infinite runner where the player can fight off pirates, use powerups,
                                and more importantly plunder the seven seas! When planning this game, our core
                                inspirations were popular games like Temple Run and Subway Surfers. We wanted to try our
                                hand at creating our own version of popular mobile games we enjoyed playing.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Player Interaction</h3>
                            <p>
                                The first steps I took when starting the project were getting the player to infinitely
                                travel and swap 'lanes'. This allowed for a quick prototype to be created so that we
                                could fine-tune our gameplay early. Once the gameplay actually worked I could start
                                keeping track of important information like score, and money. During this time, the
                                other programmer worked on procedural generation. </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Gameplay Functionality</h3>
                            <p>
                                We knew we wanted some sort of powerups for the game, to help keep the gameplay
                                interesting and more engaging. We settled on fruits to go along with our somewhat
                                tropical vibe. They are bright and colorful so hopefully the player would see them as
                                something good and worth picking up. To keep things random, we created three fruit, with
                                three levels that could spawn for a total of 9 possible powerups to pick up. Because
                                lemons are yellow they give 15, 25, or 50 coins. The limes are sour, so they give you
                                extra damage in the form of 1, 2 or 3 cannon balls. And finally, the oranges being oh so
                                sweet, give you a shield that lasts 1, 2, or 3 seconds and breaks after the player hits
                                an obstacle.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>UI Implementation</h3>
                            <p>
                                One of our artist created some pretty cool UI elements, and it was my job to breathe some life into them and give them functionality. About half of the user interface functionality was in stats that I was already tracking behind the scenes. These included score for the run, highest run score, money, and the number of cannon balls that the player had. This part was mostly connecting a few wires from the backend game stats, to the UI text boxes. The remainder of the UI was for a shop system that was yet to be implemented... so that became my new job. The shop system is a way for the player to purchase new ships for the gold that they've been collecting on runs. We have over half a dozen ships that can be purchased, and you can play with any of the ships you've unlocked.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Porting to Web</h3>
                            <p>
                                This project was specifically designed to be a mobile application, however we also wanted to publish the game to itch.io. Because we only used simple swipe actions (up, down, left, and right) for our controls, I was able to map the actions to a keyboard's arrow keys. Simple enough right? Actually, for once in my life, getting this working really was this simple. It took about an hour to make sure that all of the features were working as intended on a web build and we were up and running in no time! I finally caught a break in game programming with this one :D
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
