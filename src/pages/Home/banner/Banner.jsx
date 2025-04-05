import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import team1img from "../../../assets/banner Photo/team-developers-doing-brainstorming-optimizing-code.jpg"
import team2img from "../../../assets/banner Photo/corporate-workers-brainstorming-together.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                   <div className='flex-1'>
                   <motion.img
                   animate={{y:[50,100,50]}}
                   transition={{duration:10,repeat:Infinity}}
                        src={team1img}
                        className="max-w-sm w-64 h-48 rounded-t-[40px] rounded-br-[40px] border-l-8 border-l-blue-500 
                        border-b-8 border-b-blue-500
                        shadow-2xl" />
                        <motion.img
                   animate={{x:[100,150,100]}}
                   transition={{duration:10,repeat:Infinity,delay:5}}
                        src={team2img}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-8 border-l-blue-500 
                        border-b-8 border-b-blue-500
                        shadow-2xl " />
                        
                   </div>
                    <div className='flex-1'>
                        <h1  className="text-5xl font-bold">Find Your Job Today</h1>
                        <motion.h1
                        animate={{x:100,color:['blue']}}
                        transition={{duration:3,delay:2,ease:easeOut,repeat:Infinity}}
                    
                        className="text-5xl font-bold">Latest <motion.span
                        animate={{color:['#33c4ff ','#ff33e1 ','#5bff33 ']}}
                        transition={{duration:1.5,repeat:Infinity,delay:2}}> Job</motion.span> for You!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;