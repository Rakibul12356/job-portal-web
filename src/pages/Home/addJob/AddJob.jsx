import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';


const AddJob = () => {
    const navigate = useNavigate()
    const { user } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const job = {
            title: form.title.value,
            location: form.location.value,
            jobType: form.jobType.value,
            category: form.category.value,
            applicationDeadline: form.applicationDeadline.value,
            salaryRange: {
                min: parseInt(form.salaryMin.value),
                max: parseInt(form.salaryMax.value),
                currency: "bdt",
            },
            description: form.description.value,
            company: form.company.value,
            requirements: form.requirements.value.split(',').map(item => item.trim()),
            responsibilities: form.responsibilities.value.split(',').map(item => item.trim()),
            status: "active",
            hr_email: form.hr_email.value,
            hr_name: form.hr_name.value,
            company_logo: form.company_logo.value,
        };
        // Optional: send job to backend
        // fetch('/api/jobs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(job) })
        fetch('http://localhost:5000/jobs', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Added job successfully",
                        icon: "success"
                    });
                    navigate('/myPostedJobs')
                }
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="card-body">
                {/**Title */}
                <label className="fieldset-label">Title</label>
                <input name="title" className="input w-full" placeholder="Job Title" required />
                {/**Location */}
                <label className="fieldset-label">Location</label>
                <input name="location" className="input w-full" placeholder="Location" required />
                {/**Job Type */}
                <label className="fieldset-label">Job Type</label>
                <input name="jobType" className="input w-full" placeholder="Job Type (e.g. Hybrid)" required />
                {/**Category*/}
                <label className="fieldset-label">Category</label>
                <input name="category" className="input w-full" placeholder="Category (e.g. Engineering)" required />
                {/**applicationDeadline*/}
                <label className="fieldset-label">applicationDeadline</label>
                <input type="date" className="input w-full" name="applicationDeadline" required />
                {/**Min Salary */}
                <label className="fieldset-label">Min Salary</label>
                <input name="salaryMin" className="input w-full" placeholder="Min Salary" type="number" required />
                {/**Max Salary */}
                <label className="fieldset-label">Max Salary</label>
                <input name="salaryMax" className="input w-full" placeholder="Max Salary" type="number" required />
                {/**Job Description*/}
                <label className="fieldset-label">Job Description</label>
                <textarea name="description" className="input w-full" placeholder="Job Description" required />
                {/**Company Name */}
                <label className="fieldset-label">Company Name</label>
                <input name="company" className="input w-full" placeholder="Company Name" required />
                {/**Requirements */}
                <label className="fieldset-label">Requirements</label>
                <input name="requirements" className="input w-full" placeholder="Requirements (comma separated)" />
                {/**Responsibilities  */}
                <label className="fieldset-label">Responsibilities </label>
                <input name="responsibilities" className="input w-full" placeholder="Responsibilities (comma separated)" />
                {/**HR Email */}
                <label className="fieldset-label">HR Email</label>
                <input name="hr_email" defaultValue={user.email} className="input w-full" placeholder="HR Email" required />
                {/**LHR Name*/}
                <label className="fieldset-label">HR Name</label>
                <input name="hr_name" defaultValue={user.
                    displayName
                } className="input w-full" placeholder="HR Name" required />
                {/**Company Logo URL */}
                <label className="fieldset-label">Company Logo URL</label>
                <input name="company_logo" className="input w-full" placeholder="Company Logo URL" required />
                <button className="btn btn-neutral mt-4">Create Job</button>
            </form>
        </div>
    );
};

export default AddJob;