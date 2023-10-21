import React from "react";
import { useConductores } from "../../hooks/useCondoctores";
import { useSortedEntity } from "../../hooks/useSortedEntity";

function Conductores() {
	const { conductores } = useConductores();
	const { sortedEntity, handleSort, getSortIndicator } =
		useSortedEntity(conductores);
	const sortedConductores = sortedEntity;

	return (
		<div className="bg-gray-50 p-4">
			<h1 className="text-2xl font-bold mb-4">Conductores</h1>
			<table className="table-auto w-full">
				<thead>
					<tr>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("cedula")}
						>
							Cedula {getSortIndicator("cedula")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("nombre")}
						>
							Nombre {getSortIndicator("nombre")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("edad")}
						>
							Edad {getSortIndicator("edad")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("telefono")}
						>
							Telefono {getSortIndicator("telefono")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("disponibilidad")}
						>
							Disponibilidad {getSortIndicator("disponibilidad")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("ganancia")}
						>
							Bs/Semanal {getSortIndicator("ganancia")}
						</th>
						<th
							className="px-4 py-2 text-center cursor-pointer"
							onClick={() => handleSort("viajesRealizados")}
						>
							Viajes Realizados{" "}
							{getSortIndicator("viajesRealizados")}
						</th>
						<th className="px-4 py-2 text-center">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{sortedConductores.map((conductor) => (
						<tr
							key={conductor.cedula}
							className="hover:bg-gray-200"
						>
							<td className="border px-4 py-2 text-center">
								{conductor.cedula}
							</td>
							<td className="border px-4 py-2 text-center">
								{conductor.nombre}
							</td>
							<td className="border px-4 py-2 text-center">
								{conductor.edad}
							</td>
							<td className="border px-4 py-2 text-center">
								{conductor.telefono}
							</td>
							<td className="border px-4 py-2 text-center">
								{conductor.disponibilidad
									? "Disponible"
									: "No disponible"}
							</td>
							<td className="border px-4 py-2 text-center">
								{conductor.ganancia} Bs
							</td>
							<td className="border px-4 py-2 text-center">
								{conductor.viajesRealizados}
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

export default Conductores;
