import axios from "../../utils/axios";


//Get Job Api
export const getJobs = async () =>{
    const response = await axios.get("/jobs");
    return response.data;
};

//Delete Job Api
export const deleteJob = async (id) =>{
    const response = await axios.delete(`/jobs/${id}`);
    return response.data;
}

// update Job api
export const editJob = async (id,data) =>{
    const response = await axios.put(`/jobs/${id}`,data);
}

// Add Job api
export const addJob = async (data) => {
    const response = await axios.post("/jobs", data);

    return response.data;
};