import { useState, useEffect } from "react";
import {
	getAllGastos,
	deleteGasto as deleteGastoApi,
} from "../service/Gastos.js";

const useGastos = () => {
	const [gastos, setGastos] = useState([]);

	const refreshGastos = () => {
		getAllGastos().then((gastos) => setGastos(gastos));
	};
	useEffect(() => {
		refreshGastos();
	}, []);

	const deleteGasto = async (id) => {
		try {
			await deleteGastoApi(id);
			setGastos((prevGastos) =>
				prevGastos.filter((gasto) => gasto.id !== id)
			);
		} catch (error) {
			console.log("Error deleting gasto:", error);
		}
	};
	return { gastos, deleteGasto };
};

export { useGastos };
