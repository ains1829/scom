import {Layout} from "@/components/custom/layout";
import {UserNav} from "@/components/user-nav";
import {DataTable} from "@/components/table/data-table";
import {columns} from "./components/columns";
import {Button} from "@/components/ui/button";
import {IconPlus} from "@tabler/icons-react";
import {useState} from "react";
import DialogCreate from "./components/dialog-create";
import { useGetMissionnaire } from "@/api/admin/Queryadmin";

export default function Personnel() {
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const page = 0;
	const region = 0;
	const Missionaire = useGetMissionnaire(page, region)
	if (Missionaire.isPending) {
		return <span>Loading...</span>
	}
	if (Missionaire.isError) {
		return <span>Error...</span>
	}
	return (
		<Layout>
			<Layout.Header sticky>
				<div className="ml-auto flex items-center space-x-4">
					<UserNav />
				</div>
			</Layout.Header>
			<Layout.Body>
				<div className="mb-2 flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">Missionnaire</h2>
					</div>
					<Button onClick={() => setIsCreateModalOpen(true)}>
						<IconPlus size={18} className="mr-2" /> Nouveau
					</Button>
				</div>
				<div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
					<DataTable data={Missionaire.data.data} columns={columns} />
				</div>
				<DialogCreate
					isCreateModalOpen={isCreateModalOpen}
					setIsCreateModalOpen={(value: boolean) => setIsCreateModalOpen(value)}
				/>
			</Layout.Body>
		</Layout>
	);
}
