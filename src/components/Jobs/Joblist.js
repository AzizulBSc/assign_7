import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/job/jobSlice";
import JobItem from "./JobItem";

export default function Joblist() {



    const dispatch = useDispatch();

    const { jobs, isLoading, isError } = useSelector(
        (state) => state.job
    );
console.log(jobs);
    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    // decide what to render
    let content = null;
    // if (isLoading) content = <p>Loading...</p>;

    // if (!isLoading && isError)
    //     content = <p>There was an error occured</p>;

    // if (!isLoading && !isError && jobs?.length > 0) {
        content = jobs.map((job) => (
            <JobItem key={job.id} job={job} />
        ));
    // }

    // if (!isLoading && !isError && jobs?.length === 0) {
    //     content = <p>No Jobs Found!</p>;
    // }



  return (
    <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 className="lws-section-title">All Available Jobs</h1>
        <div className="flex gap-4">
            <div className="search-field group flex-1">
                <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                <input type="text" placeholder="Search Job" className="search-input" id="lws-searchJob"/>
            </div>
            <select id="lws-sort" name="sort" autocomplete="sort" className="flex-1">
                <option>Default</option>
                <option>Salary (Low to High)</option>
                <option>Salary (High to Low)</option>
            </select>
        </div>
    </div>

    <div className="jobs-list">
        {/* <!-- All Jobs --> */}
       {content}
        {/* <!-- All Jobs --> */}
    </div>
</main>
  )
}
