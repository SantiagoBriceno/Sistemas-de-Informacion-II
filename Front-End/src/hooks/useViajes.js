import { useState, useEffect } from "react";
import {
	getAllViajes,
	deleteViaje as deleteViajeApi,
} from "../service/Viajes.js";

const useViajes = () => {
	const [viajes, setViajes] = useState([]);

	const refreshViajes = () => {
		getAllViajes().then((viajes) => setViajes(viajes));
	};
	useEffect(() => {
		refreshViajes();
	}, []);

	const deleteViaje = async (viajeId) => {
		try {
			await deleteViajeApi(viajeId);
			setViajes((prevViajes) =>
				prevViajes.filter((viaje) => viaje.id !== viajeId)
			);
		} catch (error) {
			console.log("Error deleting viaje:", error);
		}
	};
	return { viajes, deleteViaje };
};

export { useViajes };
