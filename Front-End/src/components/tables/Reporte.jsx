function Reporte() {
	handleDelete = (reporte) => {};

	handleEdit = (reporte) => {};
	return (
		<div className="bg-gray-50 p-4 ml-72">
			<h1 className="text-2xl font-bold mb-4">Reportes</h1>
			<table className="table-auto w-full">
				<thead>
					<tr>
						<th className="px-4 py-2 text-center cursor-pointer">
							Placa
						</th>
						<th className="px-4 py-2 text-center cursor-pointer">
							Marca
						</th>
						<th className="px-4 py-2 text-center cursor-pointer">
							Modelo
						</th>
						<th className="px-4 py-2 text-center cursor-pointer">
							Ingresos
						</th>
						<th className="px-4 py-2 text-center cursor-pointer">
							Gastos
						</th>
					</tr>
				</thead>
				<tbody>
					{reportes.map((reporte) => (
						<tr key={reporte.placa} className="hover:bg-gray-200">
							<td className="border px-4 py-2 text-center">
								{reporte.placa}
							</td>
							<td className="border px-4 py-2 text-center">
								{reporte.marca}
							</td>
							<td className="border px-4 py-2 text-center">
								{reporte.modelo}
							</td>
							<td className="border px-4 py-2 text-center">
								{reporte.ingresos} Bs
							</td>
							<td className="border px-4 py-2 text-center">
								{reporte.gastos} Bs
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Reporte;
