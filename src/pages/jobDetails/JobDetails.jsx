import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { title,
        _id,
        location,
        jobType,
        category,
        description,
        company,
        requirements,
        responsibilities,
        company_logo,
        hr_email,
        hr_name,
        salaryRange,
        applicationDeadline } = useLoaderData();
    return (
        <div>
            <div className="card bg-base-100  mt-2 shadow-sm">
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
                    <div className=''>
                        <p><i class="ri-briefcase-line"></i>{jobType}</p>
                    </div>
                    <div>
                        <h2 className=''>{category}</h2>
                    </div>
                    <p>{description}</p>
                    <div className='gap-2 flex'>
                        {
                            requirements.map(requirement => <button className="btn btn-xs">{requirement}</button>)
                        }
                    </div>
                    <div>
                        <h2 className=''>Responsibilities</h2>
                        {
                            <ol className="list-decimal pl-6 space-y-1">
                                {responsibilities.map((responsibilitie, index) => (
                                    <li key={index} className="text-gray-800">
                                        {responsibilitie}
                                    </li>
                                ))}
                            </ol>
                        }
                    </div>
                    <div>
                        <h2><span>${salaryRange.min}-{salaryRange.max}.</span>{salaryRange.currency}/per month</h2>
                    </div>
                    <div>
                        <h1 className='text-red-500 font-bold'>Last Date Of Apply:{applicationDeadline}</h1>
                    </div>
                    <div>
                        <h1 className='text- font-bold'>HR:{hr_name}</h1>
                        <h1 className='text- font-bold'>contact:{hr_email}</h1>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/jobApply/${_id}`}>
                        <button className="btn btn-dash btn-error">Apply Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;