"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import SectionTitle from "@/Components/SectionTitle";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import killfeed from "/public/Images/impulse/ui/Killfeed.png";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <div className={'bg-mainBackgroundColor w-full min-h-screen'}>
                <div className={'mt-20 max-w-[50%] m-auto pb-5'}>
                    <SectionTitle title={"User Interface Implementation"}/>
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Content</h3>
                                <p className={"text-gray-400"}>
                                    Unreal Engine has a powerful user interface system called Widgets. Widgets have a
                                    really nice interface that allows the user to drag and drop objects onto a canvas,
                                    and what you see is what you get. Then, someone like me can go in, and give all that
                                    (potentially) fancy UI work some functionality with C++ or Blueprints. Since I
                                    prefer C++, that's what I went with. All of the widgets are completely backed with
                                    C++ classes, in the hopes that they would be more performant (and more fun for me to
                                    work with). </p>
                                <br/>
                                <p className={"text-gray-400"}>
                                    I've done quite a few random things for UI. Here are some of the more interesting
                                    ones:
                                </p>
                                <ul className={"list-disc ml-8 "}>
                                    <li><Link href={"#passive"} className={"text-blue-400"}>Scoreboard & Killfeed</Link>
                                    </li>
                                    <li><Link href={"#stimulant"} className={"text-blue-400"}>Directional Damage
                                        Indicators</Link></li>
                                    <li><Link href={"#blink"} className={"text-blue-400"}>In World UI</Link></li>
                                </ul>
                                <p className={"text-gray-400"}>
                                    Here's how I made them...
                                </p>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Scoreboard</h3>
                                <p className={"text-gray-400"}>
                                    A staple of every death match: the scoreboard. I knew I needed to add a
                                    scoreboard... because what game doesn't have one? Plus I think this is the perfect
                                    way to practice sending server information to individual client's UI. On top of
                                    that, why not add in a kill feed so we can stay updated on what's happening in the
                                    game without opening the scoreboard every 10 seconds.
                                    <br/><br/>
                                    The first thing the scoreboard does on startup (when you join the game) is make a
                                    request to the game state to see how many players there are. Once it knows, it can
                                    start creating the list of players. For each player it pulls the name, kills,
                                    deaths, assists, and ping. All of these are stored in another sub-widget that can be
                                    instanced for every player. This information update is updated every 0.4 seconds so
                                    it appears realtime without being constantly called on tick. The scoreboard also
                                    only does heavy computation (such as running through rearranging the sub-widgets)
                                    when it notices someone has enough kills to change position on the board.
                                    <br/><br/>
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/ui/Scoreboard.mp4"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Killfeed</h4>
                                <p className={"text-gray-400"}>
                                    The killfeed is a quick way to see the action in the game without checking the
                                    scoreboard. It's far more important in the team based arenas mode, so you can check
                                    who on your team has died, but it's still fun to have in a deathmatch. The killfeed
                                    is made up of two different widgets. The container widget defines what space the
                                    killfeed should take up and has a list. The list creates instances of a widget that
                                    displays who killed who. The display widgets get created when someone dies, and it
                                    has a lifespan of 5 seconds. The display also has an indicator of whether the kill
                                    was a headshot or not (because why not, right?)
                                    <br/><br/>
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <Image
                                    src={killfeed}
                                    height={225}
                                    width={500}
                                    className={"rounded-xl w-fit h-fit"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Directional Damage Indicators</h4>
                                <p className={"text-gray-400"}>
                                    For both gameplay and accessibility reasons, having some sort of visual indicator
                                    that shows where you're taking some damage can make a big difference. This simple
                                    implementation is done by spawning a widget on screen with just the indicator that
                                    points toward the direction that the player is getting shot from in a radial form.
                                    The implementation can handle getting attacked from multiple directions be spawning
                                    additional indicators (one for damage source).
                                    <br/><br/>
                                    When the player takes damage, the normal of the hit direction is given to the
                                    player. I use this for the radial display by taking the directional vector and
                                    setting the render transform angle of the widget to just the x and y components.
                                    <br/><br/>
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/ui/Indicators.mp4"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>In World UI</h4>
                                <p className={"text-gray-400"}>
                                    In world UI is a little bit different than the rest of the UI. This is UI that is its own object and is spawned in for a specific client due to in game events. In my case, there are two uses of this type of UI; Name tags, and damage counters.
                                    <br/><br/>
                                    I have a special object class that spawns a widget with whatever text value I want it to have. For name tags, it gets the name of the player that it's following. For damage counters, it displays the amount of damage you've done to a target in your last burst of damage. I wanted to make these their own special classes because the default billboarding of screen-space in world widgets renders on top of objects in the game instead of behind the ones that would be obstructing their line of sight. This might be good for a damage counter but not for name tags that should be obstructed by the wall a player just went around. In my class, I have full control over what kind of rendering options I want to give the newly spawned widget, and I always have access to them in a custom component class that interfaces with it.
                                    <br/><br/>
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/ui/inworld.mp4"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
