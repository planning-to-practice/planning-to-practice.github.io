import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"


import {FaArrowUp, FaFilePdf, FaVideo} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {LuTextSelect} from "react-icons/lu";

import 'react-multi-carousel/lib/styles.css';

import teaser_video from "./videos/teaser.mp4"
import ball_ring_explainer from "./images/ball_ring_explainer.png"
import main_results from "./images/main_results.png"
import ball_ring_results_table from "./images/ball_ring_results_table.png"
import ball_ring_final_video from "./videos/final_env_videos/main_ball_ring_full.mp4"
import ball_ring_overview_video from "./videos/final_env_videos/ball_ring_overview.mp4"
import cleanup_playroom_results_table from "./images/cleanup_playroom_results_table.png"
import cleanup_playroom_final_video from "./videos/final_env_videos/main_sweeping_full.mp4"
import chair_misdetection from "./images/chair_misdetection.png"
import hammer_misdetection from "./images/hammer_misdetection.png"
import deadend_fail from "./videos/failure_videos/tray_flip_fail.mp4"
import sweep_fail from "./videos/failure_videos/sweep_fail.mp4"
import object_finding_fail from "./videos/failure_videos/object_finding_fail.mp4"
import ring_on_table from "./images/ring_on_table.png"
import ball_stuck from "./images/ball_stuck.png"
import brush_grasp_fail from "./images/brush_grasp_fail.gif"
import tray_grasp_fail from "./images/tray_grasp_fail.gif"


const Title: React.FC = ({children}) => {
    // Paper title
    return (
        <h1 className="pb-1 mb-5 sm:mb-4 sm:leading-tight md:leading-tight lg:leading-tight font-bold text-center">{children}</h1>
    )
}

const Venue: React.FC = ({website, children}) => {
    return (
        <div className="flex flex-wrap justify-center text-2xl lg:text-2xl mb-6 sm:mb-5">
            <a className="no-underline" href={website} target="_blank">{children}</a>
        </div>
    )
}

const Abstract: React.FC = ({children}) => {
    return (
        <div>
            <div className="flex justify-center content-center">
                <p className="font-semibold text-2xl sm:text-3xl m-1 sm:m-2">Abstract</p>
            </div>
            <div className="flex justify-center content-center">
                <p className="text-justify font-light text-base sm:text-lg m-1 sm:m-1 max-w-[100%] sm:max-w-[640px]">{
                    children
                }</p>
            </div>
        </div>
    )
}

const Author: React.FC = ({children, website, firstAuthor, affiliations, lastAuthor}) => {
    return (
        <span className="text-center inline-block">
                <a href={website} target={"_blank"}
                   className="font-normal no-underline text-[#009cff] hover:underline underline-offset-3 hover:transition-all">
                    {children}
                </a>
            {firstAuthor || affiliations ?
                <sup className={"pl-0.5"}>{firstAuthor ?
                    <span className="font-bold">*</span> : null}{affiliations ? affiliations : null}</sup>
                : null}
            {lastAuthor ? null : <>,&nbsp;</>}
            </span>
    )
}

const Affiliation: React.FC = ({children, website, number}) => {
    return (
        <span className={"text-center inline-block mr-4"}>
            <sup className={"mr-0.5"}>{number}</sup>
            <a href={website} target={"_blank"}
               className="font-light no-underline text-[#009cff] hover:underline underline-offset-3 hover:transition-all">
                    {children}
                </a>
        </span>
    )
}

const ActionLink: React.FC = ({children, url, icon}) => {
    return (
        <span className={"text-center inline-block my-3.5 sm:my-2 mx-2"}>
            <a href={url} target={!url.startsWith("#") ? "_blank" : "_self"}
               className="text-xl no-underline font-normal text-[#009cff] bg-[#f9f9f9] hover:bg-[#f4f4f4] hover:transition-all px-4 py-3 rounded-xl">
                <span className="align-middle inline-flex justify-center mr-0.25">{icon}&nbsp;</span>
                <span>{children}</span>
            </a>
        </span>
    )
}

const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-[90%] format format-md
                       md:format-base
                       lg:max-w-5xl lg:format-lg
                       format-blue dark:format-invert">
            {children}
        </div>
    )
}

const Main: React.FC = ({children}) => {
    return (
        <main className="pt-6 lg:pt-12 bg-white dark:bg-gray-900">
            {children}
        </main>
    )
}


const RealRobotResult: React.FC = ({children, id, demos, demos_label, video, hidden}) => {
    // Result for real world envs with table on left, and video on right
    return (
        // add hidden if hide is true
        <div id={id}
             className={"realworld-result flex flex-row flex-wrap justify-items-center items-center mt-6" + (hidden ? " hidden" : "")}>
            <div className="sm:basis-1/2 align-middle items-center sm:pr-5 md:pr-10 pb-4 sm:pb-0">
                <p className="text-center font-medium text-2xl !mt-0 !mb-2">{children}</p>
                <img src={demos} alt={children} className="rounded-lg mx-auto !my-4 max-w-[80%] sm:max-w-[100%]"/>
                <p className="text-center !mt-2 !mb-0">{demos_label}</p>
            </div>
            <div className="sm:basis-1/2">
                <video autoPlay muted playsInline loop alt={children}
                       className="rounded-lg !my-0 !sm:my-0">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}


export const Head: HeadFC = () => <title>Practice Makes Perfect: Planning to Learn Skill Parameter Policies</title>

const carouselResponsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    }
};


const CarouselItem: React.FC = ({children, video}) => {
    return (
        <div>
            <video autoPlay muted playsInline loop alt={video}
                   className="carousel-video px-1.5 rounded-xl">
                <source src={video} type="video/mp4"/>
            </video>
            {/*<p className="text-center">{children}</p>*/}
        </div>
    )
}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Main>
                <Article>
                    <Title>
                        <span className="font-extrabold text-transparent bg-clip-text
                            bg-gradient-to-r from-blue-500 to-green-400">
                        {/* <span className="font-extrabold text-transparent bg-clip-text bg-black"> */}
                            Practice Makes Perfect:
                        </span>
                        &nbsp;<br></br>
                        <span className="font-normal text-stone-800">Planning to Learn Skill Parameter Policies</span>
                    </Title>

                    <Venue website={"https://arxiv.org/abs/2402.15025"}>
                        <span className="font-normal text-stone-600 hover:text-transparent hover:bg-clip-text
                        hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400
                        hover:transition-all">RSS 2024</span>
                    </Venue>

                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-4">
                        <Author website={"http://nishanthjkumar.com/"} firstAuthor={true} affiliations={"1,2"}>Nishanth Kumar</Author>
                        <Author website={"https://web.mit.edu/tslvr/www/"} firstAuthor={true} affiliations={"1,2"}>Tom Silver</Author>
                        <Author website={"https://wmcclinton.github.io/"} affiliations={"1,2"}>Willie McClinton</Author>
                        <Author website={"https://lfzhao.com/"} affiliations={"1,3"}>Linfeng Zhao</Author>
                        <Author website={"https://www.linkedin.com/in/stephen-proulx/?trk=public_profile_samename-profile"} affiliations={"1"}>Stephen Proulx</Author>
                        <Author website={"https://people.csail.mit.edu/tlp/"} affiliations={"2"}>Tomás Lozano-Pérez</Author>
                        <Author website={"https://people.csail.mit.edu/lpk/"} affiliations={"2"}>Leslie Kaelbling</Author>
                        <Author website={"https://www.linkedin.com/in/jennifer-barry-742a0799/"} affiliations={"1"} lastAuthor={true}>Jennifer Barry</Author>
                    </div>

                    {/* Affilations */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-1">
                        <Affiliation website={"https://theaiinstitute.com/"} number={"1"}>The AI Institute</Affiliation>
                        <Affiliation website={"https://www.csail.mit.edu/"} number={"2"}>MIT CSAIL</Affiliation>
                        <Affiliation website={"https://www.northeastern.edu/"} number={"3"}>Northeastern University</Affiliation>
                    </div>
                    <div className="flex flex-wrap justify-center text-l lg:text-l">
                        <span className="text-stone-600 text-center"><sup className="mr-0.5">*</sup>Indicates equal contribution.</span>
                    </div>

                    {/* Action Links */}
                    <p className="flex flex-wrap justify-center">
                        <ActionLink url={"https://arxiv.org/pdf/2402.15025.pdf"} icon={<FaFilePdf/>}>Paper</ActionLink>
                        <ActionLink url={"https://www.youtube.com/watch?v=123DXatw1V8"} icon={<FaVideo/>}>Video</ActionLink>
                        <ActionLink url={"https://github.com/bdaiinstitute/predicators/releases/tag/planning-to-practice-ees"} icon={<AiFillGithub/>}>Code</ActionLink>
                    </p>

                    {/* Teaser Video */}
                    <video autoPlay controls muted playsInline loop alt="Teaser Video"
                           className="border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[95%]">
                        <source src={teaser_video} type="video/mp4"/>
                    </video>

                    <div className="flex justify-center">
                        <p className="text-center text-xl !mt-0 !mb-2 font-medium max-w-[100%] md:max-w-[75%]">
                            We enable a robot to rapidly and autonomously <em>specialize</em> parameterized skills by <em>planning to practice</em> them. The robot decides <em>what</em> skills to practice and <em>how</em> to practice them. The robot is left alone for hours, repeatedly practicing and improving.
                        </p>
                    </div>
                </Article>
{/* 
                <div className="my-6 pt-6 pb-4 bg-gradient-to-r from-pink-100/70 via-indigo-100/70 to-emerald-100/70">
                    <div
                        className="mx-auto w-full max-w-[97.5%] lg:max-w-7xl py-2 md:py-4 px-2 md:px-4">
                        <div className="relative pb-8 mb-3">
                            <Carousel responsive={carouselResponsive} infinite={true} showDots={true}
                                      renderDotsOutside={true}
                                      beforeChange={(previousSlide, {currentSlide, onMove}) => {
                                          // play all carousel-video, as the browser doesn't like autoplaying them all
                                          const videos = document.getElementsByClassName("carousel-video");
                                          for (let i = 0; i < videos.length; i++) {
                                              // play if video is paused
                                              if ((videos[i] as HTMLVideoElement).paused) {
                                                  (videos[i] as HTMLVideoElement).play();
                                                  console.log("Started playing video " + (videos[i] as HTMLVideoElement).src);
                                              }
                                          }
                                      }}>
                                <CarouselItem video={clear_mug}>"Clear Mug"</CarouselItem>
                                <CarouselItem video={measuring_scoop}>"Measuring Scoop"</CarouselItem>
                                <CarouselItem video={teddy_bear}>"Teddy Bear"</CarouselItem>
                                <CarouselItem video={blue_mug}>"Blue Mug</CarouselItem>
                                <CarouselItem video={screwdriver}>"Screwdriver"</CarouselItem>
                                <CarouselItem video={water_jug}>"Water Jug</CarouselItem>
                                <CarouselItem video={measuring_beaker}>"Measuring Beaker"</CarouselItem>
                                <CarouselItem video={wooden_rack}>"Wooden Rack</CarouselItem>
                                <CarouselItem video={transparent_rack}>"Transparent Rack"</CarouselItem>
                            </Carousel>
                        </div>
                        <p className="text-center text-lg md:text-xl md:max-w-[85%] mx-auto">
                            We designate novel objects to grasp using <b>open-ended language queries</b>, and achieve
                            this using only ten demonstrations across four object categories.
                        </p>
                    </div>
                </div> */}

                <Article>
                    {/* Abstract */}
                    <br></br>
                    <br></br>
                    <Abstract>
                    One promising approach towards effective robot decision making in complex, long-horizon tasks is to sequence together <em>parameterized skills</em>.
                    We consider a setting where a robot is initially equipped with (1) a library of parameterized skills, (2) an AI planner for sequencing together the skills given a goal, and (3) a very general prior distribution for selecting skill parameters.
                    Once deployed, the robot should rapidly and autonomously learn to improve its performance by specializing its skill parameter selection policy to the particular objects, goals, and constraints in its environment.
                    In this work, we focus on the active learning problem of choosing which skills to <em>practice</em> to maximize expected future task success.
                    We propose that the robot should <em>estimate</em> the competence of each skill, <em>extrapolate</em> the competence (asking: "how much would the competence improve through practice?"), and <em>situate</em> the skill in the task distribution through competence-aware planning.
                    This approach is implemented within a fully autonomous system where the robot repeatedly plans, practices, and learns without any environment resets.
                    Through experiments in simulation, we find that our approach learns effective parameter policies more sample-efficiently than several baselines.
                    Experiments in the real-world demonstrate our approach's ability to handle noise from perception and control and improve the robot's ability to solve two long-horizon mobile-manipulation tasks after a few hours of autonomous practice.
                    </Abstract>

                    {/* YouTube Video */}
                    {/* <h2 className="font-semibold border-b-[1px]" id="video">Video with Audio</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PA9rWWVWsc4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen className="rounded-lg"></iframe>
                    </div> */}

                    {/* Approach Walkthrough */}
                    <h2 className="font-semibold border-b-[1px] !mb-4">Approach Walkthrough</h2>
                    <img src={ball_ring_explainer} className="rounded-lg mx-auto !my-4 max-w-[80%] sm:max-w-[100%]"/>
                    <p>We propose <b>Estimate, Extrapolate, and Situate (EES)</b>, an approach for planning to practice parameterized skills.
                       During free time, the robot repeatedly chooses skills to practice.
                       (Left) To select a skill, the robot first <b>estimates</b> each skill's <em>competence</em>, the probability that the skill will achieve its intended effects.
                       The robot then <b>extrapolates</b> the competence, asking: "how much better would the skill get through practice?"
                       Finally, the robot <b>situates</b> the competence, asking: "how much better overall at <em>human-given tasks</em> would I get by practicing this skill?"
                       (Middle) Once a skill is selected, the robot <em>plans</em> to satisfy the skill's initiation condition and then <em>practices</em> the skill once.
                       (Right) The practice data is used to improve the skill. Specifically, the robot learns <em>parameter policies</em> that choose good continuous parameters for the skill.
                    </p>
                    <p>The video below illustrates EES in the <em>Ball-Ring environment</em>.
                        Here, the robot is tasked with placing a ball stably on a table.
                        Through interaction and repeated practice, EES enables the robot to learn that (1) the ball cannot be directly placed
                        on the table because it is slanted and will always cause the ball to roll off, (2) the yellow ring can only
                        be placed on the left side of the table, where there is a high-friction material that prevents it from sliding 
                        off, (3) the best way to accomplish the goal is to place the ring on the left side and then place the ball into the
                        ring. EES is implemented on a real robot system that uses perception and planning to achieve robust performance,
                        even in the presense of <b>adversarial interventions</b>.
                    </p>
                    <video autoPlay controls muted playsInline loop alt="Approach overview in Ball Ring environment"
                           className="rounded-lg">
                        <source src={ball_ring_overview_video} type="video/mp4"/>
                    </video>

                    {/* Results */}
                    <h2 className="font-semibold border-b-[1px] !mb-4">Results</h2>

                    <h3 id="results-graphs" className="!mt-4">Simulated Environments</h3>
                    <p>We compare EES to 7 baselines and find that it is consistently more sample-efficient across 3 simulated environments.
                    </p>
                    <img src={main_results} className="rounded-lg mx-auto !my-4 max-w-[80%] sm:max-w-[100%]"/>

                    <h3 className="!mt-4" id="few-shot">Real Robot Environments</h3>
                    <p>
                        We implemented our approach on real-world versions of the simulated Ball-Ring and Cleanup Playroom environments.
                        We measured the success rate under timeout across 5 random seeds.
                        Results and accompanying demonstrative video of learning and evaluation are shown below.
                        For full, <em>uncut and unedited</em> versions of the robot's practice in these environments, see the following links: <a href="https://www.youtube.com/watch?v=cokB5ZR5Ick">Ball-Ring Uncut</a>, <a href="https://www.youtube.com/watch?v=1gr-mIxdIOo">Cleanup Playroom Uncut</a>
                    </p>
                    <div className="my-4 leading-8">
                        <span className="text-xl mr-1">Show results for </span>
                        <select className="rounded-xl" onChange={(e) => {
                            // Get the target div
                            const selected = e.target.value;
                            const targetDiv = document.getElementById(selected);

                            // div does not exist! Need to define a RealRobotResult component
                            if (targetDiv === null) {
                                console.log("div " + selected + " is null! ")
                                return;
                            }

                            // Hide the current div by checking all divs with class realworld-result
                            const divs = document.getElementsByClassName("realworld-result");
                            for (let i = 0; i < divs.length; i++) {
                                // Skip target and hidden divs
                                if (divs[i] === targetDiv || divs[i].classList.contains("hidden")) {
                                    continue;
                                }

                                // Add hidden class to div and reset video
                                divs[i].classList.add("hidden");
                                divs[i].getElementsByTagName("video")[0].currentTime = 0;
                                console.log("Hiding div " + divs[i].id + " and reset video");
                            }

                            // Remove hidden class from target div
                            targetDiv.classList.remove("hidden");
                            console.log("Showing div " + targetDiv.id)
                        }}>
                            <option value="cleanup_playroom_env">Cleanup Playroom Env</option>
                            <option value="ball_ring_env">Ball-Ring Env</option>
                        </select>
                    </div>

                    {/* Real Robot Results */}
                    <RealRobotResult id="cleanup_playroom_env" demos={cleanup_playroom_results_table}
                                   demos_label="Results in the Cleanup Playroom Env" video={cleanup_playroom_final_video}>
                        Results over 5 Seeds
                    </RealRobotResult>

                    <RealRobotResult id="ball_ring_env" demos={ball_ring_results_table} hidden={true}
                                   demos_label="Results in the Ball-Ring Env" video={ball_ring_final_video}>
                        Results over 5 Seeds
                    </RealRobotResult>

                    {/* Limitations and Dirty Laundry */}
                    <h2 className="font-semibold border-b-[1px] !mb-4">Limitations and Dirty Laundry</h2>
                    <p>Our robot system implementation is far from perfect and has a number of limitations. We display and discuss some of them
                        here in the hopes that this promotes transparency and inspires future work. For more specific technical details around
                        system implementation and limitations, please see our paper and code linked above.
                    </p>

                    <h3 id="dead-end-states" className="!mt-4">Dead-End States</h3>
                    <p>A key assumption of our practicing framework is that the robot is always able to achieve the goal from any state it might ever
                        encounter. This was made largely true in our environments, however, it did sometimes get violated in rare and unexpected
                        circumstances, examples of which are shown below.
                    </p>
                    <div className="flex justify-center overflow-x-auto">
                        <img src={ring_on_table} className="rounded-lg mx-auto !my-4 max-w-[50%] sm:max-w-[50%]"/>
                        <img src={ball_stuck} className="rounded-lg mx-auto !my-4 max-w-[50%] sm:max-w-[50%]"/>
                    </div>
                    <p>In the left image, the ring got stuck in a position from which the robot's pick skill is unable to succeed (it assumes the ring is flat on a surface, never upright). On the right, the ball got trapped below the table such that the robot was unable to see or grasp it.
                        Below, we show an example of the robot accidentally getting into a dead-end state in the Cleanup Playroom environment.
                    </p>
                    <div className="flex justify-center">
                        <video autoPlay controls muted playsInline loop alt="example deadend video" className="rounded-lg max-w-[50%]">
                            <source src={deadend_fail} type="video/mp4"/>
                        </video>
                    </div>

                    <h3 id="perception-errors" className="!mt-4">Perception Errors</h3>
                    <p>Our perception pipeline relies on a combination of <a href="https://github.com/facebookresearch/Detic">Detic</a> and <a href="https://segment-anything.com/">SAM</a> to perform object detection and segmentation from robot camera images.
                    To get to a high level of reliability, this required significant tuning of language prompts describing objects that are input to Detic.
                    Despite this, false positive detections still occur.
                    </p>
                    <div className="flex justify-center overflow-x-auto">
                        <img src={chair_misdetection} className="rounded-lg mx-auto !my-4 max-w-[50%] sm:max-w-[50%]"/>
                        <img src={hammer_misdetection} className="rounded-lg mx-auto !my-4 max-w-[50%] sm:max-w-[50%]"/>
                    </div>
                    <p>These misdetections are usually not catastrophic, but can cause substantial replanning and sometimes contribute to the robot getting into dead-end states mentioned above.
                    </p>

                    <h3 id="skill-errors" className="!mt-4">Skill Execution Errors</h3>
                    <p>We leverage a library of skills to accomplish tasks, and each of these skills is prone to failures that cannot be improved even by practice...
                    </p>
                    <div className="flex justify-center overflow-x-auto">
                        <img src={brush_grasp_fail} className="rounded-lg mx-auto !my-4 max-w-[50%] sm:max-w-[50%]"/>
                        <img src={tray_grasp_fail} className="rounded-lg mx-auto !my-4 max-w-[50%] sm:max-w-[50%]"/>
                    </div>
                    <p>Similar to perception errors, these skill failures are usually overcome by replanning, but they can sometimes lead to dead end states.
                    </p>
                    <div className="flex justify-center">
                        <video autoPlay controls muted playsInline loop alt="example sweep failure video" className="rounded-lg max-w-[50%]">
                            <source src={sweep_fail} type="video/mp4"/>
                        </video>
                    </div>

                    <h3 id="object-finding" className="!mt-4">Object Finding</h3>
                    <p>Our implementation features a relatively simple skill that attempts to navigate to random locations to find an object once its been lost (e.g., by having been dropped after moving). This can sometimes take a very long time to terminate.
                    </p>
                    <div className="flex justify-center">
                        <video autoPlay controls muted playsInline loop alt="example object finding failure video" className="rounded-lg max-w-[50%]">
                            <source src={object_finding_fail} type="video/mp4"/>
                        </video>
                    </div>

                    {/* Citation */}
                    <h2 id="citation" className="border-b-[3px]">Citation</h2>
                    <div className="relative overflow-auto">
                        <pre className="bg-slate-100">
                            <code id="citation-bib" className="font-normal text-slate-600">{
                                `@inproceedings{kumar2024practice,
title={Practice Makes Perfect: Planning to Learn Skill Parameter Policies}, 
author={Nishanth Kumar and Tom Silver and Willie McClinton and Linfeng Zhao and Stephen Proulx and Tomás Lozano-Pérez and Leslie Pack Kaelbling and Jennifer Barry},
year={2024},
booktitle={Robotics: Science and Systems (RSS)}
}`}
                            </code>
                        </pre>
                        <div className="absolute top-0 right-0">
                            <button className="float-right text-2xl text-indigo-500 bg-white hover:bg-slate-50
                            hover:text-indigo-600 hover:transition-all rounded-full p-2 m-3 invisible md:visible"
                                    onClick={() => {
                                        // Select all text in the code block
                                        let bib = document.getElementById("citation-bib");
                                        let range = document.createRange();
                                        let selection = window.getSelection();

                                        // Check not null
                                        if (bib == null || range == null || selection == null) {
                                            return;
                                        }
                                        range.selectNode(bib);
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }}>
                                <LuTextSelect/>
                            </button>
                        </div>
                    </div>
                </Article>

                <footer className={"flex flex-col justify-center bg-gray-50 mt-8 py-8"}>
                    {/*click to go back to top*/}
                    <div className="flex justify-center align-middle text-lg">
                        <a role="button" className="text-blue-500" onClick={() => {
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        }}>
                                <span
                                    className="align-text-top inline-flex justify-center mr-0.25"><FaArrowUp/>&nbsp;</span>
                            <span>Back to Top</span>
                        </a>
                    </div>
                    <div className="mt-2.5 text-center">
                        Website adapted from&nbsp;
                        <a href="https://github.com/f3rm/f3rm.github.io" target="_blank" className="text-blue-500">
                            <span
                                className="align-text-top inline-flex justify-center mr-0.25"><AiFillGithub/>&nbsp;</span>
                            <span>F3RM Website Template</span>.
                        </a>
                    </div>
                </footer>
            </Main>
        </>
    )
}

export default IndexPage
