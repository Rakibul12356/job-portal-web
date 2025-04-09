import React, { useState } from 'react';
import { useEffect } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setJobs(data)
            })
    }, [])
    const allData = jobs;
   
    console.log(jobs, allData)
    return (
        <div>
            <div className='grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 '>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
                
            </div>
        </div>
    );
};

export default HotJobs;