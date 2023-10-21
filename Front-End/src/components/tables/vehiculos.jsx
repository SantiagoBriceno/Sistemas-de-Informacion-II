import axios from "axios";
import React, { useEffect, useState } from "react";

function Vehiculos() {
	const [vehiculos, setVehiculos] = useState([]);
	const [sortConfig, setSortConfig] = useState({ key: null, direction: "" });

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/vehiculos")
			.then((res) => {
				setVehiculos(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSort = (key) => {
		let direction = "ascending";
		if (sortConfig.key === key && sortConfig.direction === "ascending") {
			direction = "descending";
		}
		setSortConfig({ key, direction });
	};

	const sortedVehiculos = vehiculos.sort((a, b) => {
		if (sortConfig.direction === "ascending") {
			if (a[sortConfig.key] < b[sortConfig.key]) return -1;
			if (a[sortConfig.key] > b[sortConfig.key]) return 1;
		} else if (sortConfig.direction === "descending") {
			if (a[sortConfig.key] > b[sortConfig.key]) return -1;
			if (a[sortConfig.key] < b[sortConfig.key]) return 1;
		}
		return 0;
	});

	const getSortIndicator = (key) => {
		if (sortConfig.key === key) {
			if (sortConfig.direction === "ascending") {
				return <span>&#9650;</span>; // Up arrow
			} else if (sortConfig.direction === "descending") {
				return <span>&#9660;</span>; // Down arrow
			}
		}
		return null;
	};

	return (
		<div className="bg-gray-50 p-4">
			<h1 className="text-2xl font-bold mb-4">Vehiculos</h1>
			<table className="table-auto w-full">
				<thead>
					<tr>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("placa")}
						>
							Placa {getSortIndicator("placa")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("marca")}
						>
							Marca{getSortIndicator("marca")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("modelo")}
						>
							Modelo {getSortIndicator("modelo")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("capacidad")}
						>
							Capacidad {getSortIndicator("capacidad")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("disponibilidad")}
						>
							Disponibilidad {getSortIndicator("disponibilidad")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("aire")}
						>
							Aire {getSortIndicator("aire")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("viajesRealizados")}
						>
							Viajes Realizados{" "}
							{getSortIndicator("viajesRealizados")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("cedulaConductor")}
						>
							Cedula Conductor{" "}
							{getSortIndicator("cedulaConductor")}
						</th>
						<th className="px-4 py-2 text-center">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{sortedVehiculos.map((vehiculo) => (
						<tr key={vehiculo.id}>
							<td className="border px-4 py-2 text-center">
								{vehiculo.placa}
							</td>
							<td className="border px-4 py-2 text-center">
								{vehiculo.marca}
							</td>
							<td className="border px-4 py-2 text-center">
								{vehiculo.modelo}
							</td>
							<td className="border px-4 py-2 text-center">
								{vehiculo.capacidad}
							</td>
							<td className="border px-4 py-2 text-center">
								{vehiculo.disponibilidad
									? "Disponible"
									: "No disponible"}
							</td>
							<td className="border px-4 py-2 text-center">
								{vehiculo.aire ? "Si" : "No"}
							</td>
							<td className="border px-4 py-2 text-center">
								{vehiculo.viajesRealizados}
							</td>
							<td className="border px-4 py-2 text-center">
								{vehiculo.cedulaConductor}
							</td>
							<td className="border px-4 py-2 text-center">
								<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4">
									Eliminar
								</button>
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
									Editar
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Vehiculos;