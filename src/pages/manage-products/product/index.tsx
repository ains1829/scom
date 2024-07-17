import {DataTable} from "@/components/table/data-table";
import {columns} from "./components/columns";
import {companies} from "./data/products";
import {Button} from "@/components/ui/button";
import {IconPlus} from "@tabler/icons-react";
import {useState} from "react";
import DialogCreate from "./components/dialog-create";

export default function Product() {
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	return (
		<>
			<div className="mb-2 flex items-center justify-between space-y-2">
				<div>
					<h2 className="text-2xl font-bold tracking-tight">Produits</h2>
				</div>
				<Button onClick={() => setIsCreateModalOpen(true)}>
					<IconPlus size={18} className="mr-2" /> Nouveau
				</Button>
			</div>
			<div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
				<DataTable data={companies} columns={columns} />
			</div>

			{/* ===== Create Company Modal ===== */}
			<DialogCreate
				isCreateModalOpen={isCreateModalOpen}
				setIsCreateModalOpen={(value: boolean) => setIsCreateModalOpen(value)}
			/>
		</>
	);
}