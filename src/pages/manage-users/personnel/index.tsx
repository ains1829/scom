import {Layout} from "@/components/custom/layout";
import {UserNav} from "@/components/user-nav";
import {DataTable} from "@/components/table/data-table";
import {columns} from "./components/columns";
import {personnels} from "./data/personnels";
import {Button} from "@/components/ui/button";
import {IconPlus} from "@tabler/icons-react";
import {useState} from "react";
import DialogCreate from "./components/dialog-create";

export default function Personnel() {
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	return (
		<Layout>
			{/* ===== Top Heading ===== */}
			<Layout.Header sticky>
				<div className="ml-auto flex items-center space-x-4">
					<UserNav />
				</div>
			</Layout.Header>

			<Layout.Body>
				<div className="mb-2 flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">Personnels</h2>
					</div>
					<Button onClick={() => setIsCreateModalOpen(true)}>
						<IconPlus size={18} className="mr-2" /> Nouveau
					</Button>
				</div>
				<div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
					<DataTable data={personnels} columns={columns} isShowToolbar />
				</div>

				{/* ===== Create Company Modal ===== */}
				<DialogCreate
					isCreateModalOpen={isCreateModalOpen}
					setIsCreateModalOpen={(value: boolean) => setIsCreateModalOpen(value)}
				/>

				{/* ===== Edit Company Modal ===== */}
			</Layout.Body>
		</Layout>
	);
}
