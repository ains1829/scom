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
import {Textarea} from "@/components/ui/textarea";

type Props = {
	isCreateModalOpen: boolean;
	setIsCreateModalOpen: (value: boolean) => void;
};

const DialogCreate: FC<Props> = ({isCreateModalOpen, setIsCreateModalOpen}) => {
	return (
		<Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
			<DialogContent className="!w-[800px] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Creation d'une société</DialogTitle>
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
					<div className="flex flex-col gap-1">
						<Label htmlFor="nif" className="text-left">
							NIF
						</Label>
						<Input id="nif" placeholder="NIF" className="col-span-3" />
					</div>
					<div className="flex flex-col gap-1">
						<Label htmlFor="stat" className="text-left">
							STAT
						</Label>
						<Input id="stat" placeholder="STAT" className="col-span-3" />
					</div>
					<div className="flex flex-col gap-1">
						<Label htmlFor="fiscalNumber" className="text-left">
							Numéro Fiscal
						</Label>
						<Input id="fiscalNumber" placeholder="Numéro Fiscal" className="col-span-3" />
					</div>
					<div className="flex flex-col gap-1">
						<Label htmlFor="telephone" className="text-left">
							Téléphone
						</Label>
						<Input id="telephone" placeholder="Téléphone" className="col-span-3" />
					</div>
					<div className="flex flex-col gap-1">
						<Label htmlFor="responsiblePerson" className="text-left">
							Responsable
						</Label>
						<Input id="responsiblePerson" placeholder="Responsable" className="col-span-3" />
					</div>
					<div className="flex flex-col gap-1">
						<Label htmlFor="address" className="text-left">
							Adresse
						</Label>
						<Input id="address" placeholder="Adresse" className="col-span-3" />
					</div>
					<div className="flex flex-col gap-1">
						<Label htmlFor="region" className="text-left">
							Région
						</Label>
						<Input id="region" placeholder="Région" className="col-span-3" />
					</div>
					<div className="flex flex-col gap-1">
						<Label htmlFor="district" className="text-left">
							District
						</Label>
						<Input id="district" placeholder="District" className="col-span-3" />
					</div>
					<div className="flex flex-col gap-1">
						<Label htmlFor="description" className="text-left">
							Description
						</Label>
						<Textarea id="description" placeholder="Description" className="col-span-3" />
					</div>
				</div>
				<DialogFooter>
					<div>
						<Button
							type="submit"
							onClick={(e) => {
								e.preventDefault(); // Prevent form submission
								setIsCreateModalOpen(false);
								console.log("Submit Create");
							}}>
							Créer une société
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DialogCreate;
