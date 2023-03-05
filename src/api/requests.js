import API from "./axios";


export const signupRequest = async (email, password, name) => {
    const res = await API.post('/api/user/create', { email, password, name });
    return res.data;
}

export const loginRequest = async (email, password) => {
    const res = await API.post("/api/auth/login", { email, password })
    return res.data;
}

export const createAttraction = async (name, photoUrl, description, org, latitude, longitude, category) => {
    const res = await API.post("/api/attractions/createOne", { name, photoUrl, description, org, latitude, longitude, category})
    return res.data;
}

export const getAllAttraction = async () =>{
    const res = await API.get('/api/attractions/')
    return res.data;
}
