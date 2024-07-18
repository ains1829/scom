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
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { usegetUnite } from "@/api/query";
import { useCreateTypeproduct } from "@/api/mutation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Typejsonproduct } from "@/api/json/requestbody/product/Typejsonproduct";

type Props = {
	isCreateModalOpen: boolean;
	setIsCreateModalOpen: (value: boolean) => void;
};

const DialogCreate: FC<Props> = ({ isCreateModalOpen, setIsCreateModalOpen }) => {
	const [selectedUnit, setSelectedUnit] = useState('1');
	const Unite = usegetUnite();
	const newTypeproduct = useCreateTypeproduct();
	const { register, handleSubmit , setValue} = useForm<Typejsonproduct>();
	const handleCreate: SubmitHandler<Typejsonproduct> =  (data) => {
		data.id = Number.parseInt(selectedUnit);
		newTypeproduct.mutate(data);
		console.log(data)
		setIsCreateModalOpen(false);
	}
	if (Unite.isPending) {
		return <span>loading....</span>
	}
	if (Unite.isError) {
		return <span>Error...</span>
	}
	return (
		<Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
				<DialogContent className="!w-[800px] max-h-[90vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle>Creation d'un type de produit</DialogTitle>
						<DialogDescription></DialogDescription>
						<DialogClose />
					</DialogHeader>
					<form onSubmit={handleSubmit(handleCreate)}>
						<div className="grid gap-4 py-4">
							<div className="flex flex-col gap-1">
								<Label htmlFor="name" className="text-left">
									Unite
								</Label>
								<Select
									value={selectedUnit.toString()}
									onValueChange={(value) => {
										setSelectedUnit(value);
										setValue("id", Number.parseInt(value)); 
									}}
								>
									<SelectTrigger>
										<SelectValue>{Unite.data.find((unit) => unit.idunite.toString() === selectedUnit)?.nameunite}</SelectValue>
									</SelectTrigger>
									<SelectContent>
										{Unite.data.map((unit) => (
											<SelectItem key={unit.idunite} value={unit.idunite.toString()}>
												{unit.nameunite}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col gap-1">
								<Label htmlFor="name" className="text-left">
									Nom
								</Label>
								<Input {...register("name")} id="name" placeholder="Nom" className="col-span-3" />
							</div>
						</div>
						<DialogFooter>
							<div className="flex gap-2">
								<Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
									Annuler
								</Button>
								<Button type="submit">Créer</Button>
							</div>
						</DialogFooter>
					</form>
				</DialogContent>
		</Dialog>
	);
};

export default DialogCreate;
