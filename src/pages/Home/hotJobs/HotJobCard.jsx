import button from 'daisyui/components/button';
import React from 'react';
import { Link } from 'react-router-dom';


const HotJobCard = ({ job }) => {
    const {
        _id,
        title,
        location,
        jobType,
        category,
        description,
        company,
        requirements,
        responsibilities,
        company_logo,
        hr_email,
        salaryRange,
        applicationDeadline } = job

    return (
        <div>
            <div className="card bg-base-100 lg:w-72 lg:h-96 mt-2 shadow-sm">
                <div className='flex gap-2'>
                    <img
                        className='w-10 h-10 '
                        src={company_logo} />
                    <div>
                        <h1 className='font-bold text-2xl hover:text-cyan-400'>
                            {company}
                        </h1>
                        <p className='gap-5'><i className="w-2  ri-map-pin-line"></i>{location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title hover:text-purple-400">{title}</h2>
                    <div className='flex gap-'>
                        <p><i class="ri-briefcase-line"></i>{jobType}</p>
                        <p><i class="ri-time-line"></i></p>
                    </div>
                    <p>{description}</p>
                    <div className='gap-2 flex'>
                        {
                            requirements.map(requirement => <button className="btn btn-xs">{requirement.slice(0, 7)}</button>)
                        }
                    </div>
                    <div>
                        <h2><span>${salaryRange.min}-{salaryRange.max}.</span>{salaryRange.currency}/per month</h2>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/jobs/${_id}`}>  <button className="btn btn-primary">Job Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;