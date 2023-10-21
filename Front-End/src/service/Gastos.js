import { GET_ALL_GASTOS } from "../constants.js";
import axios from "axios";

const formatDate = (dateString) => {
	const date = new Date(dateString);
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear().toString();

	return `${day}-${month}-${year}`;
};

export const getAllGastos = () => {
	return axios
		.get(GET_ALL_GASTOS)
		.then((res) => res.data)
		.then((data) => {
			data.data.forEach((gasto) => {
				gasto.fecha = formatDate(gasto.fecha);
			});
			return data.data;
		});
};

export const deleteGasto = (id) => {
	return axios.delete(`${GET_ALL_GASTOS}/${id}`);
};
