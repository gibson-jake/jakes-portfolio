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
                    <SectionTitle title={"Utility Abilities"}/>
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Content</h3>
                                <p className={"text-gray-400"}>
                                    The utility abilities in Impulse are designed to provide impactful utility to the
                                    player that uses it, but is not necessarily meant to deal exorbitant amounts of
                                    damage to the enemies. I am not the biggest fan of one-hit kills in competitive
                                    multiplayer games (with the exception of impressive skillshots), so I'm trying to
                                    keep the game fun without having something like a frag grenade that can land
                                    anywhere within a 5 meter radius of you and completely blow you out of existence.
                                </p>
                                <br/>
                                <p className={"text-gray-400"}>
                                    With that said, I currently have two utility abilities in the game:
                                </p>
                                <ul className={"list-disc ml-8 "}>
                                    <li><Link href={"#passive"} className={"text-blue-400"}>Impulse Grenade</Link></li>
                                    <li><Link href={"#stimulant"} className={"text-blue-400"}>Recon Dart</Link></li>
                                </ul>
                                <p className={"text-gray-400"}>
                                    Here's how I made them...
                                </p>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Impulse Grenade</h4>
                                <p className={"text-gray-400"}>
                                    The impulse grenade is not a grenade that can directly damage players. As its name
                                    suggest, it sends a radial impulse force from wherever it lands, launching all
                                    players away from it. <br/>
                                </p>
                                <br/>
                                <h5 className={"text-gray-300 font-bold text-lg"}>Launching the Grenade</h5>
                                <p className={"text-gray-400"}>
                                    First things first, getting the grenade to launch from the player, and having other
                                    players see it. Simply having a function that spawns an object won't cut it in this
                                    case. Everything needs to be properly replicated for everyone to see. The
                                    implementation begins at the player character level. The player begins by requesting
                                    to use their ability. The server makes a check to ensure they can use the ability,
                                    then spawns the grenade object with the appropriate trajectory for
                                    everyone. <br/><br/>
                                </p>
                                <h5 className={"text-gray-300 font-bold text-lg"}>Giving the Grenade Functionality</h5>
                                <p className={"text-gray-400"}>
                                    There are two parts to giving the grenade functionality. First, is determining when
                                    the grenade lands. I wanted this grenade to stick to just about anything so you
                                    could make some cool plays by throwing it on a moving object, or sticking it just
                                    right on the wall to really mess with your opponents. The second part is actually
                                    sending an impulse and getting it to affect other players.<br/><br/>
                                    Getting the grenade to stick to anything was actually super easy. I just had it
                                    check if it touched literally anything. I set up collision rules to detect anything
                                    that isn't the owning player, and when it collides with an object, it'll call a
                                    function that triggers the subsequent actions.<br/><br/>
                                    The next bit getting the impulse to go. Once the grenade hits, a timer is set with a
                                    short delay until a server side function is called for a radial impulse to be
                                    applied to the area around the grenade. A multicast is also called for playing the
                                    sound, and finally the grenade is destroyed. Ideally, a cool visual effect will also
                                    play from the multicast to complete the whole look and feel of the item, but that
                                    will have to wait until I know how to VFX.<br/><br/>
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/utilities/ImpulseGrenade.mp4"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Recon Dart</h4>
                                <p className={"text-gray-400"}>
                                    The impulse grenade is not a grenade that can directly damage players. As its name
                                    suggest, it sends a radial impulse force from wherever it lands, launching all
                                    players away from it. <br/>
                                </p>
                                <br/>
                                <h5 className={"text-gray-300 font-bold text-lg"}>Launching the Grenade</h5>
                                <p className={"text-gray-400"}>
                                    The recon dart is an ability that the player throws onto the battlefield which is
                                    meant to reveal enemy players that the dart scans. <br/><br/>
                                    When attempting to tackle this, I looked at other games that have abilities like
                                    this one. In Overwatch, Hanzo has an arrow that he shoots which reveals all enemies
                                    in a small sphere AoE wherever the arrow lands. In VALORANT, Sova has an arrow (why
                                    is it always a bow and arrow?) that scans 3 times after landing in a large
                                    cylindrical shape. If any enemy players are tagged by the scan, They're highlighted
                                    red through the wall for a short time.<br/><br/>
                                    I wanted to pull things from both of these abilites, and essentially create Sova's
                                    recon dart but only highlight a small area. To start, I broke this task down into 4
                                    sub-sections. <br/>
                                </p>
                                <ul className={"list-disc ml-8 text-gray-400"}>
                                    <li>Launch the dart and initiate a scan when it lands</li>
                                    <li>Scan the area and tag players</li>
                                    <li>Filter who gets scanned by team</li>
                                    <li>highlight the players scanned through walls</li>
                                    <br/>
                                </ul>
                                <h5 className={"text-gray-300 font-bold text-lg"}>Launching the Dart</h5>
                                <p className={"text-gray-400"}>
                                    This was the easy part. I've basically already created the framework for this with
                                    the Impulse grenade. The grenade gets ejected from the player, hits an object, then
                                    sends a radial impulse half a second later. This is perfect. All I really needed to
                                    do was change what happens when the dart hits something.
                                    <br/><br/>
                                </p>
                                <h5 className={"text-gray-300 font-bold text-lg"}>Scanning the Area</h5>
                                <p className={"text-gray-400"}>
                                    Because I wanted this to perform an area scan over time, I figured "what more
                                    fitting than increasing the radius a collision sphere?" When the scan function in
                                    the recon dart is called, I set a 0.05s timer to increase the radius of the sphere
                                    and loop it until the sphere hits a certain radius. The amount the radius increases
                                    is tied to three adjustable parameters; the total time the scan should take, the
                                    size of the scan, and the time between radius increases. Because this is a collision
                                    sphere, all we have to do is check if a player is overlapping the sphere and call a
                                    function on their character that simply logs "scanned".
                                    <br/><br/>
                                    When testing this, players were getting scanned multiple times, so I prevented this
                                    by adding an array of scanned players in the recon dart. On a particular scan, if a
                                    player is tagged, the player is compared to everyone previously tagged on this scan.
                                    If they're not on the list, then the get tagged and placed on the list.
                                    <br/><br/>
                                </p>
                                <h5 className={"text-gray-300 font-bold text-lg"}>Only Tagging the Enemies</h5>
                                <p className={"text-gray-400"}>
                                    I want to make sure that only the players on the opposing team get tagged, and
                                    anyone on the team of the initiator doesn't. When the dart is created, the team of
                                    it's owning player is passed to it. I can use this identifier to check against
                                    everyone that gets initially scanned by the dart. This one was pretty simple.
                                    <br/><br/>
                                </p>
                                <h5 className={"text-gray-300 font-bold text-lg"}>Seeing Enemies Through Walls</h5>
                                <p className={"text-gray-400"}>
                                    This is where Unreal Engine's Custom Depth Stencil comes into play. Using this, we
                                    can add post process materials to the level, and hide them with bit masks that are
                                    only turned on when we want them to be. Not being an artist myself, I created a
                                    simple post process material that was solid red (creative, I know).
                                    <br/><br/>
                                    When a player gets tagged, the function that's called on them multicasts a custom
                                    depth stencil change so they get highlighted bright red. Great start, but there's
                                    still work to do. In it's current state, the highlight effect is always active, and
                                    it still shows even if you have direct line of sight of the enemy. The point of this
                                    recon dart is to show the enemies you can't see, not the ones that you're already
                                    looking at.
                                    <br/><br/>
                                    The first issue is an easy fix - when I multicast that the custom depth stencil
                                    changes, just set a timer that multicasts the custom depth stencil to it's original
                                    value... no problem. The second one requires more shader knowledge.
                                    <br/><br/>
                                    UE shaders let you compare the scene depth with a custom depth (in this case, the
                                    distance to the character) and essentially allows you to check for line of sight.
                                    Now when the shaders turns on, it only highlights red on the parts of the character
                                    model that are occluded by some other object in the scene.
                                    <br/><br/>
                                </p>
                                <h5 className={"text-gray-300 font-bold text-lg"}>The Secret Fifth Challenge</h5>
                                <p className={"text-gray-400"}>
                                    There's still one major issue that I haven't touched on yet. I'm multicasting the
                                    custom depth stencil change everyone... including the team that gets scanned. So if
                                    your buddy gets scanned, both you and the enemy team see them as a big ol' red blob.
                                    <br/><br/>
                                    This one was a real thorn in my side. From playing with shader logic to somehow get
                                    the players' team numbers (so even if everyone was told to change the texture, only
                                    the proper team would see it), to trying to direct multicasts to only run on certain
                                    clients, I just couldn't figure it out. I decided now's the time for a break. Let me
                                    sleep on it for a day or two and see what comes of that.
                                    <br/><br/>
                                    Taking a short break and working on something else is always a good idea. I'd
                                    randomly gotten an idea of how to fix it while I was out and about during the day...
                                    and honestly I can't believe I didn't think of it earlier! Send a client RPC to only
                                    the members of a team instead of broadcasting to everyone.
                                    <br/><br/>
                                    At this point, the dart scans someone, tells the gamestate that someone was tagged,
                                    and the gamestate tells all the player controllers on the correct team what player
                                    should be highlighted. This also makes it easier to add things like sound for when
                                    an enemy gets tagged, so the players are more alert of what just happened. My new
                                    problem with this setup is that I don't want a bunch of abilities with random
                                    functions in the gamestate. Best case scenario is that the gamestate doesn't handle
                                    any abilities.
                                    <br/><br/>
                                    When the user attempts to throw the dart, the input is sent to the server for proper
                                    checks, then the server spawns the dart and tells everyone else to do the same. This
                                    means that the dart is owned by the server, and I can use this fact to make the
                                    server call a client rpc from the dart.
                                    <br/><br/>
                                    In the dart, I have a check to make sure that the owner of the dart is the server,
                                    then I moved all the code that was in the game state, into the recon dart itself.
                                    <br/><br/>
                                    What a fun thing to work on! I learned a lot about render-passes and post process
                                    materials, and the rest of the code itself was just great practice for handling
                                    server-client interaction. It may not be perfect, but overall, I'd call this a great
                                    success.
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
                                    src={"/Images/impulse/utilities/ReconDart.mp4"}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
