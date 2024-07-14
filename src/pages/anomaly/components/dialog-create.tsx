import {FC} from "react";
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

type Props = {
	isCreateModalOpen: boolean;
	setIsCreateModalOpen: (value: boolean) => void;
};

const DialogCreate: FC<Props> = ({isCreateModalOpen, setIsCreateModalOpen}) => {
	return (
		<Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
			<DialogContent className="!w-[800px] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Creation d'un anomalie</DialogTitle>
					<DialogDescription></DialogDescription>
					<DialogClose />
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="flex flex-col gap-1">
						<Label htmlFor="name" className="text-left">
							Nom
						</Label>
						<Input id="name" placeholder="Nom" className="col-span-3" />
					</div>
				</div>
				<DialogFooter>
					<div className="flex gap-2">
						<Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
							Annuler
						</Button>
						<Button
							type="submit"
							onClick={(e) => {
								e.preventDefault(); // Prevent form submission
								setIsCreateModalOpen(false);
								console.log("Submit Create");
							}}>
							Créer
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DialogCreate;
