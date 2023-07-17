import axios from "axios";
const BASEURL = "http://localhost:4000/api/v1";
const axiosInstance = axios.create({
	baseURL: BASEURL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const regiserUser = async (userData) => {
	try {
		const response = await axiosInstance.post(`/register`, JSON.stringify(userData));
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const loginUser = async (userData) => {
	try {
		const response = await axiosInstance.post(`/login`, JSON.stringify(userData));
		return response.data;
	} catch (error) {
		throw error;
	}
};
