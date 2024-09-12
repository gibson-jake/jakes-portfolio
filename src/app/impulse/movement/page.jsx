"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import SectionTitle from "@/Components/SectionTitle";
import React, {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <div className={'bg-mainBackgroundColor w-full min-h-screen'}>
                <div className={'mt-20 max-w-[50%] m-auto pb-5'}>
                    <SectionTitle title={"Movement Abilities & Capabilities"}/>
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Content</h3>
                                <p className={"text-gray-400"}>
                                    Impulse has a major focus on movement abilities. I think that movement abilities
                                    give users more options to make impressive plays without uisng items, weapons, and
                                    abilities that do an overpowering amount of damage. Players are currently given a
                                    few passive advanced movement options by default, with the option to pick another
                                    movement ability. All of these movement abilities have been added as special enum
                                    cases in Unreal's movement replication code to ensure that the replication of these
                                    movements is as smooth and efficient as possible.
                                </p>
                                <br/>
                                <p className={"text-gray-400"}>
                                    I currently have a wide range of movement options for players:
                                </p>
                                <ul className={"list-disc ml-8 "}>
                                    <li><Link href={"#passive"} className={"text-blue-400"}>Passive</Link></li>
                                    <li><Link href={"#stimulant"} className={"text-blue-400"}>Stimulant</Link></li>
                                    <li><Link href={"#blink"} className={"text-blue-400"}>Blink</Link></li>
                                    <li><Link href={"#passive"} className={"text-blue-400"}>Slide Jump</Link></li>
                                    <li><Link href={"#passive"} className={"text-blue-400"}>Grapple</Link></li>
                                </ul>
                                <p className={"text-gray-400"}>
                                    Here's how I made them...
                                </p>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Passive Movement Abilities</h3>
                                <p className={"text-gray-400"}>
                                    All players have the passive abilities to wall run and use a physics based sliding
                                    system. I want to make sure that everyone gets to experience some fun and engaging
                                    movement abilities and not just be restricted to the one or two that they pick.
                                </p>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Wall running</h4>
                                <p className={"text-gray-400"}>
                                    Wall running has always been something I thought was really cool, and especially so
                                    when I saw it in action with the Titanfall series. <br/><br/>

                                    When attempting to wall run, the player needs to satisfy three conditions. First,
                                    they have to actually be running. Second, they have to be next to a wall (who would
                                    have thought?), and third, they have to be in the air holding space. The first is
                                    pretty easy, just make sure their movement mode is currently set to sprinting. The
                                    second one is accomplished by doing a short line trace below the waist of the player
                                    character to make sure they're close enough to the wall to attach without it looking
                                    weird. The last one requires two simple checks, one to see if the player is
                                    currently falling, and another to check if they're holding the jump button. They
                                    stay attached to the wall for as long as they're holding the jump button, however I
                                    think I might add gravity back after a few steps so they are forced to jump of or
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/movement/WallRun.mp4"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Sliding</h4>
                                <p className={"text-gray-400"}>
                                    Taking inspiration from games like Apex Legends (and later Fornite made their own
                                    implementation), I decided to add a physics based sliding system to Impulse. I felt
                                    that with the faster-paced movement shooter style of game I was going for, adding
                                    sliding would create some cool opportunities for players to feel pretty fricken
                                    awesome sliding around a corner and hitting their target. <br/><br/>

                                    As with everything, when the player tries to do some sort of action, a server RPC is
                                    called to confirm that it is indeed possible for the player to do whatever they're
                                    trying to do. Beginning the slide is pretty easy; mutlicast some information (like
                                    the fact that the player is sliding, along with an animation call), then lower the
                                    first person camera, and adjust the movement controls to feel like you're sliding.
                                    The hard part is what happens during the slide. While sliding, the game frequently
                                    checks whether you should continue sliding, and if so, at what speed based on the
                                    floor below you. <br/><br/>
                                    When calculating the floor's influence, the game first checks if floors normal
                                    vector is pointing up (flat ground). If that's not the case, then I have to get the
                                    slope of the floor using some fancy vector math. I then add force to the players
                                    slide using the floor's slope and adjusting the force using a friction coefficient.
                                    This is enough to keep players sliding on steeper slopes, but on minor inclines and
                                    flat ground, the player will only go a short distance (but still enough to feel like
                                    they're sliding).
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/movement/WallRun.mp4"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Stimulant</h4>
                                <p className={"text-gray-400"}>
                                    The stimulant, or stimmy for short, was the first movement based abilitiy I created.
                                    This was my first test with Unreal's custom movement replication code. On use, this
                                    ability increases the players movement speed by 15% for 10 seconds with a 20 second
                                    cooldown. I don't have any cool fancy videos or technical things to share, because
                                    it quite literally was setting up a custom movement mode that increased the player's
                                    move speed for 10 seconds. The next abilities are more interesting, I promise :)
                                </p>
                            </div>

                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Blink</h4>
                                <p className={"text-gray-400"}>
                                    Blink is a short, teleportation/dash hybrid that quickly sends the player in the
                                    direction they are moving. This ability definitely took inspiration from Overwatch's
                                    Tracer, who has three charges of a blink that's very similar. I really felt like
                                    this would make a good addition to Impulse because it's an ability that can be
                                    balanced in many ways if needed (distance, number of charges, cooldown timer, etc.)
                                    and is a unique movement ability seen in only a handful of games. <br/><br/>
                                    Setting up the blink was actually more interesting than I expected. Unreal has a
                                    teleport function that allows an object to do a sweeping teleport through an area,
                                    essentially checking if the object would have collided with anything on its way over
                                    to its new location had it simply moved instead of teleported. This would be great,
                                    except for the fact that it's too fast. I don't really want the player to be
                                    instantly teleported to a new location, I just want them to get there at an inhuman
                                    speed. My answer to this was to basically launch the player in the direction they
                                    are moving (not necessarily the direction they're looking), and set up a function to
                                    stop their movement once they've traveled a certain distance. At first I thought
                                    this would cause some weird jitter or something because the movement is literally
                                    being set to zero, but since the player has to be moving to blink the first place,
                                    it actually works really well.
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/movement/Blink.mp4"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Slide Jump</h4>
                                <p className={"text-gray-400"}>
                                    Slide jump only felt natural when I thought about having sliding be a default. In
                                    the growing number of games that have incorporated sliding as an ability of some
                                    sort, being able to jump at the end of a slide to keep your momentum for just a
                                    little bit longer has been a staple movement tech. So I thought, why not take that
                                    to the next level? <br/><br/>
                                    When the ability is not on cooldown, jumping during or at the end of a slide will
                                    launch you in the air much higher than usual. This was accomplished by applying an
                                    additional force to the player in the direction of the normal of the surface that
                                    they were sliding on. Doing this allows players to get different results based on
                                    the slope of the surface that they're sliding on, thus leading to more interesting
                                    and rewarding gameplay if you're skilled in movement techs.
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/movement/SlideJump.mp4"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Grapple</h4>
                                <p className={"text-gray-400"}>
                                    The grapple ability allows players to launch a grappling hook at a surface, then use it to swing around corners, over gaps, and up to higher ground. This is momentum based ability, allowing for players to actually swing instead of just being pulled toward a direction. <br/><br/>
                                    When the ability is activated, a projectile travels from the character in the direction that the player is looking. This projectile sticks to the wall, and acts as a pivot point for the player's swing. Once the player has swung 90 degrees, has hit the jump button, or their momentum carries them too far from the hook, they'll detach from the grapple and they'll start falling with style.
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/movement/Grapple.mp4"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
