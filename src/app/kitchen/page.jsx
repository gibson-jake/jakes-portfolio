"use client"
import Navbar from "@/Components/Navbar";
import complexFull from '/public/images/kitchen/ComplexFull.png'
import complexFront from '/public/images/kitchen/ComplexFront.png'
import complexRight from '/public/images/kitchen/ComplexRight.png'
import complexBottom from '/public/images/kitchen/ComplexBottom.png'
import standardFull from '/public/images/kitchen/StandardFull.png'
import standardLeft from '/public/images/kitchen/StandardLeft.png'
import standardRight from '/public/images/kitchen/StandardRight.png'
import standardBottom from '/public/images/kitchen/StandardBottom.png'
import simpleFull from '/public/images/kitchen/SimpleFull.png'
import simpleLeft from '/public/images/kitchen/SimpleLeft.png'
import simpleRight from '/public/images/kitchen/SimpleRight.png'
import simpleBottom from '/public/images/kitchen/SimpleBottom.png'
import SectionTitle from "@/Components/SectionTitle";
import SimpleProjectInformation from "@/Components/SimpleProjectInformation";
import Carousel from "@/Components/Carousel";

export default function Gait() {
    const slides = [
        {
            type: 'image',
            src: complexFull,
            alt: 'Game Image',
        },
        {
            type: 'video',
            src: '/Images/kitchen/KitchenVRTrailer.mp4',
            alt: 'AI Video',
        },
        {
            type: 'image',
            src: complexFront,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: complexRight,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: complexBottom,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: standardFull,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: standardLeft,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: standardRight,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: standardBottom,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: simpleFull,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: simpleLeft,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: simpleRight,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: simpleBottom,
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
                    <SectionTitle title={"Kitchen VR"}/>
                    <Carousel slides={slides}/>
                    <div className={"flex flex-row gap-10"}>
                        <div className={"flex flex-col pt-12"}>
                            <SimpleProjectInformation title={"Engine"} information={"Unreal Engine 5"}/>
                            <SimpleProjectInformation title={"Platform"} information={"Desktop / Virtual Reality"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Duration"} information={"4 Months"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Team Size"} information={"5 Members"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Current Status"} information={"Shipped"} styles={"mt-5"} />
                            <SimpleProjectInformation title={"Links"} information={"Unavailable: Proprietary Software"} styles={"mt-5"}/>
                        </div>
                        <div className={"flex flex-col max-w-[75%] text-gray-400"}>
                            <SectionTitle title={"Development"} styles={"mb-5"}/>
                            <p>
                                KitchenVR is a virtual reality application developed to assist in cognitive rehabilitation by simulating real-life kitchen tasks. The application focuses on improving motor skills, decision-making, and cognitive abilities in patients undergoing therapy. My work on this project involved developing custom interaction systems, creating scalable visual environments, and implementing telemetry-based tracking for patient performance analysis and research.                            
                            </p>
                            <br/>
                            <p>
                                I completed work on the following areas:
                            </p>
                            <ul className={"list-disc ml-8"}>
                                <li>Custom Physics and Interaction System</li>
                                <li>Visual Complexity and Cognitive Testing</li>
                                <li>Telemetry and Replay System</li>
                                <li>Research and Continuous Improvement</li>
                            </ul>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Custom Physics and Interaction System</h3>
                            <p>
                                One of the core aspects of KitchenVR was building a robust, custom physics system to enable more responsive and realistic object interaction. Unreal's build in physics just didn't quite cut it for the level of interaction we were looking for, especially when grabbing items in virtual reality and moving them to inaccessible places. I wrote custom C++ solutions to provide responsive and accurate feedback for users. This system ensured that every interaction felt more natural and distracted less from the therapeutic goals of the application. 
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Visual Complexity and Cognitive Testing</h3>
                            <p>
                                To support cognitive rehabilitation, we developed environments with varying levels of visual complexity. These environments ranged from simple, clutter-free settings to highly detailed and dynamic kitchens. The goal was to test patients’ cognitive load and reaction to different levels of visual stimuli, helping therapists better understand their cognitive abilities and tailor rehabilitation exercises accordingly.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Telemetry and Replay System</h3>
                            <p>
                                As with my work on GaitVR, I developed a telemetry and replay system that captured detailed session data for KitchenVR. This system allowed therapists to review each session in full, analyzing the patient’s actions and decision-making processes. By visualizing performance over time, the replay tool provided essential insights into a patient’s progress and enabled more personalized rehabilitation strategies.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Research and Continuous Improvement</h3>
                            <p>
                                In close collaboration with therapists and medical researchers, I focused on studying how patients interacted with the virtual environment and analyzing telemetry data for research purposes. This data was crucial in refining the application and ensuring it provided meaningful therapeutic outcomes. Each iteration improved the experience for both patients and therapists, with a focus on creating an engaging, effective tool for cognitive rehabilitation.
                            </p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
