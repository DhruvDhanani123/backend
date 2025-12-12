import axios from "axios";

const API = "https://backend-x41c.onrender.com/api/tasks";

export const getTasks = () => axios.get(API);
export const createTask = (data) => axios.post(API, data);
export const updateTask = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteTask = (id) => axios.delete(`${API}/${id}`);
