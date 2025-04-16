import Link from 'daisyui/components/link';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {
    const applications = useLoaderData();
    console.log(applications)
    const handleStatusUpdate=(e,id)=>{
        console.log(e.target.value,id);
        const data={
            status:e.target.value
        }
        fetch(`http://localhost:5000/job-applications/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
      

    }
    return (
        <div className='min-h-screen'>
            <h2>APplication for this job: {applications.length}</h2>
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
                            <th>Update Status</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map(app => <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <div className="font-bold">{app.applicant_email
                                            }</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <select
                                    onChange={(e)=>handleStatusUpdate(e,app._id)}
                                    defaultValue={app.status || 'change Status'} className='select select-bordered select-xs w-full max-w-xs' id="">
                                        <option disabled >Change status</option>
                                        <option >UnderReview</option>
                                        <option >Set Interview</option>
                                        <option >Hired</option>
                                        <option >Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;