import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth'
const MyPostedJobs = () => {
    const [jobs,setJobs]=useState([]);
    const {user}=useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])
    return (
        <div>
            <h2>My Posted Jobs:{jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Application Deadline</th>

                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        jobs.map(job=> <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={job.company_logo} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{job.title}</div>
                                        <div className="text-sm opacity-50">{job.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {job.company}
                                <br />
                                <span className="badge badge-ghost badge-sm">{job.category}</span>
                            </td>
                            <td>{job.applicationDeadline}</td>
                            <td><button className='btn btn-link'>View Application</button></td>
                            
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;