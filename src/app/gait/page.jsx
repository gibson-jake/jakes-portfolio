"use client"
import Navbar from "@/Components/Navbar";
import gaitCity from '/public/images/gait/GaitCity.png'
import gaitCity1 from '/public/images/gait/GaitCity1.png'
import gaitCity2 from '/public/images/gait/GaitCity2.png'
import airport from '/public/images/gait/airport.png'
import aiTracks from '/public/images/gait/aiTracks.png'
import beach1 from '/public/images/gait/beach1.png'
import beach2 from '/public/images/gait/beach2.png'
import blockout from '/public/images/gait/Blockout.png'
import diagram from '/public/images/gait/diagram.png'
import ui1 from '/public/images/gait/UI1.png'
import ui2 from '/public/images/gait/UI2.png'
import SectionTitle from "@/Components/SectionTitle";
import SimpleProjectInformation from "@/Components/SimpleProjectInformation";
import Carousel from "@/Components/Carousel";

export default function Gait() {
    const slides = [
        {
            type: 'image',
            src: gaitCity,
            alt: 'Game Image',
        },
        {
            type: 'video',
            src: '/Images/gait/AI_Debug.mp4',
            alt: 'AI Video',
        },
        {
            type: 'image',
            src: gaitCity1,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: gaitCity2,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: airport,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: aiTracks,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: beach1,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: beach2,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: blockout,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: diagram,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: ui1,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: ui2,
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
                    <SectionTitle title={"Gait VR"}/>
                    <Carousel slides={slides}/>
                    <div className={"flex flex-row gap-10"}>
                        <div className={"flex flex-col pt-12"}>
                            <SimpleProjectInformation title={"Engine"} information={"Unreal Engine 5"}/>
                            <SimpleProjectInformation title={"Platform"} information={"Desktop / Virtual Reality"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Duration"} information={"14 Months"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Team Size"} information={"6 Members"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Current Status"} information={"Shipped"} styles={"mt-5"} />
                            <SimpleProjectInformation title={"Links"} information={"Unavailable: Proprietary Software"} styles={"mt-5"}/>
                        </div>
                        <div className={"flex flex-col max-w-[75%] text-gray-400"}>
                            <SectionTitle title={"Development"} styles={"mb-5"}/>
                            <p>
                                GaitVR is a virtual reality application designed to assist in physical therapy and rehabilitation, with a primary focus on improving patients' gait, balance, and overall mobility. Throughout my time working on GaitVR, I developed and optimized various core systems to create an engaging and therapeutic experience tailored to meet clinical needs.                            </p>
                            <br/>
                            <p>
                                I completed work on the following areas:
                            </p>
                            <ul className={"list-disc ml-8"}>
                                <li>Core System Development</li>
                                <li>AI NPC Systems for Dynamic Obstacles</li>
                                <li>Telemetry and Replay System</li>
                                <li>Research and Continuous Improvement</li>
                            </ul>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Core System Development</h3>
                            <p>
                                I was responsible for writing and optimizing C++ code for accurate movement tracking and locomotion analysis. This work ensured that every user interaction reflected real-world motion, providing precise feedback for rehabilitation exercises. I also implemented a networking layer that allowed remote monitoring by medical professionals, enabling real-time feedback and progress tracking.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>AI NPC Systems for Dynamic Obstacles</h3>
                            <p>
                                A significant part of my role involved creating AI-driven NPC systems to simulate dynamic obstacles for patients to traverse around. I designed and implemented crowd and driving systems that introduced varying levels of complexity in the virtual environment. These AI entities provided randomized movement patterns to simulate real-world scenarios, challenging the user’s spatial awareness, balance, and reaction time in a controlled, therapeutic setting.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Telemetry and Replay System</h3>
                            <p>
                                To enhance the application’s monitoring and analysis capabilities, I worked extensively with telemetry data. I developed a custom replay system that recorded and visualized user sessions, allowing therapists to review a patient’s performance in detail. This replay functionality proved essential in assessing rehabilitation progress and adjusting therapy plans based on precise movement data.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Research and Continuous Improvement</h3>
                            <p>
                                I collaborated closely with medical professionals to ensure that GaitVR’s systems aligned with therapeutic goals and clinical standards. My work included studying patient behavior and analyzing data collected from therapy sessions to improve both the application’s design and its impact on patient outcomes. This iterative process of testing and refinement helped create a more effective and user-friendly experience tailored to the unique needs of each individual.
                            </p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
