import React from 'react';
import { data, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'
const JobApply = () => {
    const{id}=useParams();
    const{user}= useAuth()
    //console.log(id,user)
    const handleJobSubmit=e=>{
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedin.value;
        const gitHub = form.github.value;
        const resume= form.resume.value;
       // console.log(linkedIn,gitHub,resume )
        const jobApplication = {
            job_id:id,
            applicant_email:user.email,
            linkedIn,
            gitHub,
            resume
        }
        fetch('http://localhost:5000/job-applications',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Apply job successfully",
                    icon: "success"
                  });
            }
            console.log(data)
        })
    }
    return (
        <div className=" min-h-screen mt-2">
            <form onSubmit={handleJobSubmit} className="card-body">
                <label className="fieldset-label">Linkedin Url</label>
                <input type="url"  name='linkedin' className="input w-full" placeholder="Your linkedin profile url" />
                <label className="fieldset-label">Github Url</label>
                <input type="url" name='github' className="input w-full" placeholder="Your Github url" />
                <label className="fieldset-label">Resume Url</label>
                <input type="url" name='resume' className="input w-full" placeholder="Your Resume url" />
                <button className="btn btn-neutral mt-4">Submit</button>
            </form>
        </div>
    );
};

export default JobApply;