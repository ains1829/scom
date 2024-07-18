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
import { useTypeProduct } from "@/api/query";
import { useCreateproduct } from "@/api/mutation";
import { number } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Typejsonproduct } from "@/api/json/requestbody/product/Typejsonproduct";

type Props = {
	isCreateModalOpen: boolean;
	setIsCreateModalOpen: (value: boolean) => void;
};

const DialogCreate: FC<Props> = ({isCreateModalOpen, setIsCreateModalOpen}) => {
	const [selectedUnit, setSelectedUnit] = useState('1');
	const typeproducts = useTypeProduct();
	const createproduct = useCreateproduct();
	const { register, handleSubmit, setValue } = useForm<Typejsonproduct>();
	const handleCreate: SubmitHandler<Typejsonproduct> = (data) => {
		data.id = Number.parseInt(selectedUnit),
		createproduct.mutate(data)
		setIsCreateModalOpen(false)
	}
	if (typeproducts.isPending) {
		return <span>Loading....</span>
	}
	if (typeproducts.isError) {
		return <span>Error</span>
	}
	return (
		<Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
			<DialogContent className="!w-[800px] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Creation d'un produit</DialogTitle>
					<DialogDescription></DialogDescription>
					<DialogClose />
				</DialogHeader>
				<form onSubmit={handleSubmit(handleCreate)}>
					<div className="grid gap-4 py-4">
						<div className="flex flex-col gap-1">
							<Label htmlFor="name" className="text-left">
								Type de produit
							</Label>
							<Select value={selectedUnit} onValueChange={(value) => {
								setSelectedUnit
								setValue('id' , Number.parseInt(value))
							}}>
								<SelectTrigger>
									<SelectValue>{typeproducts.data.find((productType) => productType.idtypeproduct.toString() === selectedUnit)?.nametypeproduct}</SelectValue>
								</SelectTrigger>
								<SelectContent>
									{typeproducts.data.map((productType) => (
										<SelectItem key={productType.idtypeproduct} value={productType.nametypeproduct}>
											{productType.nametypeproduct}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="flex flex-col gap-1">
							<Label htmlFor="name" className="text-left">
								Nom
							</Label>
							<Input {...register('name')} id="name" placeholder="Nom" className="col-span-3" />
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
