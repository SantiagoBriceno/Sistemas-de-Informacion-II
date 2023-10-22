import React from "react";
import { useSortedEntity } from "../../hooks/useSortedEntity";
import { useViajes } from "../../hooks/useViajes";

function Viajes() {
	const { viajes, deleteViaje } = useViajes();
	const { sortedEntity, handleSort, getSortIndicator } =
		useSortedEntity(viajes);

	const sortedViajes = sortedEntity;

	const handleDelete = (viaje) => {
		deleteViaje(viaje.id);
	};

	return (
		<div className="bg-gray-50 p-4">
			<h1 className="text-2xl font-bold mb-4">Viajes</h1>
			<table className="table-auto w-full">
				<thead>
					<tr>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("placa")}
						>
							Placa del Vehiculo {getSortIndicator("placa")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("fechaInicio")}
						>
							Fecha de inicio {getSortIndicator("fechaInicio")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("fechaFin")}
						>
							Fecha de finalizaion {getSortIndicator("fechaFin")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("ubicacion")}
						>
							Ubicacion {getSortIndicator("ubicacion")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("distancia")}
						>
							Distancia {getSortIndicator("distancia")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("costo")}
						>
							Costo {getSortIndicator("costo")}
						</th>
						<th className="px-4 py-2 text-center">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{sortedViajes.map((viaje) => (
						<tr key={viaje.id} className="hover:bg-slate-200">
							<td className="border px-4 py-2 text-center">
								{viaje.placaVehiculo}
							</td>
							<td className="border px-4 py-2 text-center">
								{viaje.fechaInicio}
							</td>
							<td className="border px-4 py-2 text-center">
								{viaje.fechaFin}
							</td>
							<td className="border px-4 py-2 text-center">
								{viaje.ubicacion}
							</td>
							<td className="border px-4 py-2 text-center">
								{viaje.distancia}
							</td>
							<td className="border px-4 py-2 text-center">
								{viaje.costo}
							</td>
							<td className="border px-4 py-2 text-center">
								<button
									className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
									onClick={() => handleDelete(viaje)}
								>
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

export default Viajes;
