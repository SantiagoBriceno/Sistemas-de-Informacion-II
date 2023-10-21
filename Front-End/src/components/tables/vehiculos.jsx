import React from "react";
import { useVehiculos } from "../../hooks/useVehiculos";
import { useSortedEntity } from "../../hooks/useSortedEntity";
function Vehiculos() {
	const { vehiculos } = useVehiculos();
	const { sortedEntity, handleSort, getSortIndicator } =
		useSortedEntity(vehiculos);

	const sortedVehiculos = sortedEntity;

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
						<tr key={vehiculo.placa} className="hover:bg-gray-200">
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
