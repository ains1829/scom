import {FC, useState} from "react";
import {Button} from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { useCreateanomaly } from "@/api/mutation";

type Props = {
	isCreateModalOpen: boolean;
	setIsCreateModalOpen: (value: boolean) => void;
};
const DialogCreate: FC<Props> = ({ isCreateModalOpen, setIsCreateModalOpen }) => {
	const [nameanomaly, setAnomaly] = useState('anomaly');
	const createanomaly = useCreateanomaly();
	const handleSubmit = async (event: any) => {
		event.preventDefault();
		createanomaly.mutate(nameanomaly);
		setIsCreateModalOpen(false);
	}
	return (
		<Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
			<DialogContent className="!w-[800px] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Creation d'un anomalie</DialogTitle>
					<DialogDescription></DialogDescription>
					<DialogClose />
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="flex flex-col gap-1">
							<Label htmlFor="name" className="text-left">
								Nom
							</Label>
							<Input id="name" onChange={(e) => setAnomaly(e.target.value)} placeholder="Nom" className="col-span-3" />
						</div>
					</div>
					<DialogFooter>
						<div className="flex gap-2">
							<Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
								Annuler
							</Button>
							<Button type="submit"> Créer </Button>
						</div>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default DialogCreate;
