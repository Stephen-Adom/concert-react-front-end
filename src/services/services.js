import axios from "axios";
import localforage from "localforage";
const BASEURL = "http://localhost:3000/api/v1";
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

export const fetchAllConcerts = async () => {
	try {
		const token = await localforage.getItem("token");
		axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		const response = await axiosInstance.get(`/concerts`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const fetchConcert = async (id) => {
	try {
		const token = await localforage.getItem("token");
		axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		const response = await axiosInstance.get(`/concerts/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const reserveConcert = async (postBody) => {
	try {
		const token = await localforage.getItem("token");
		axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		const response = await axiosInstance.post(`/reservations`, JSON.stringify(postBody));
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const createConcert = async (postBody) => {
	try {
		const token = await localforage.getItem("token");
		axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		const response = await axiosInstance.post(`/concerts`, JSON.stringify(postBody));
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const adminAllConcert = async () => {
	try {
		const token = await localforage.getItem("token");
		axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		const response = await axiosInstance.get(`/all_concerts`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const deleteConcert = async (id) => {
	try {
		const token = await localforage.getItem("token");
		axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		axiosInstance.defaults.headers.common["X-Permitted-Cross-Origin"] = "*";
		const response = await axiosInstance.delete(`/concerts/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const fetchAllReservations = async () => {
	try {
		const token = await localforage.getItem("token");
		axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		const response = await axiosInstance.get(`/reservations`);
		return response.data;
	} catch (error) {
		throw error;
	}
};