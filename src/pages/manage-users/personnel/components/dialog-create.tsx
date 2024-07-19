"use client";

import {FC, useState, ChangeEvent} from "react";
import {useForm} from "react-hook-form";
import {format} from "date-fns";
import {zodResolver} from "@hookform/resolvers/zod";
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
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {regions} from "@/pages/company/data/data";
// import {profiles} from "../data/data";
// import {Personnel, personnelSchema} from "../data/schema";

type Props = {
	isCreateModalOpen: boolean;
	setIsCreateModalOpen: (value: boolean) => void;
};

function getImageData(event: ChangeEvent<HTMLInputElement>) {
	const dataTransfer = new DataTransfer();
	Array.from(event.target.files!).forEach((image) => dataTransfer.items.add(image));
	const files = dataTransfer.files;
	const displayUrl = URL.createObjectURL(event.target.files![0]);
	return {files, displayUrl};
}

const DialogCreate: FC<Props> = ({isCreateModalOpen, setIsCreateModalOpen}) => {
	const [date, setDate] = useState<Date>();
	const [preview, setPreview] = useState("");
	// const [selectedRegion, setSelectedRegion] = useState(regions[0].value);
	// const [selectedProfile, setSelectedProfile] = useState(profiles[0].value);
	// const form = useForm<Personnel>({
	// 	mode: "onSubmit",
	// 	resolver: zodResolver(personnelSchema),
	// });

	// function submitCircleRegistration(value: Personnel) {
	// 	console.log({value});
	// }

	return (
		<Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
			<DialogContent className="!w-[800px] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Création d'un personnel</DialogTitle>
					<DialogDescription></DialogDescription>
					<DialogClose />
				</DialogHeader>
				{/* <Form {...form}>
					<form className="space-y-8" onSubmit={form.handleSubmit(submitCircleRegistration)}>
						<div className="grid gap-4 py-4">
							<div className="flex flex-col gap-1">
								<FormField
									control={form.control}
									name="profile"
									render={({field: {onChange, value, ...rest}}) => (
										<FormItem>
											<div className="w-full flex justify-center">
												<Avatar className="w-24 h-24 mt-2 border-2">
													<AvatarImage src={preview} />
													<AvatarFallback>BU</AvatarFallback>
												</Avatar>
											</div>
											<FormControl>
												<Input
													type="file"
													{...rest}
													onChange={(event) => {
														const {files, displayUrl} = getImageData(event);
														setPreview(displayUrl);
														onChange(files);
													}}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="flex flex-col gap-1">
								<Label htmlFor="name" className="text-left">
									Nom
								</Label>
								<Input id="name" placeholder="Nom" className="col-span-3" />
							</div>
							<div className="flex flex-col gap-1">
								<Label htmlFor="firstName" className="text-left">
									Prénom
								</Label>
								<Input id="firstName" placeholder="Prénom" className="col-span-3" />
							</div>
							<div className="flex flex-col gap-1">
								<Label htmlFor="matricule" className="text-left">
									Matricule
								</Label>
								<Input id="matricule" placeholder="Matricule" className="col-span-3" />
							</div>
							<div className="flex flex-col gap-1">
								<Label htmlFor="telephone" className="text-left">
									Téléphone
								</Label>
								<Input id="telephone" placeholder="Téléphone" className="col-span-3" />
							</div>
							<div className="flex flex-col gap-1">
								<Label htmlFor="email" className="text-left">
									Email
								</Label>
								<Input id="email" placeholder="Email" className="col-span-3" />
							</div>
							<div className="flex flex-col gap-1">
								<Label htmlFor="birthdate" className="text-left">
									Date de naissance
								</Label>
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant={"outline"}
											className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
											<CalendarIcon className="mr-2 h-4 w-4" />
											{date ? format(date, "PPP") : <span>Pick a date</span>}
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0">
										<Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
									</PopoverContent>
								</Popover>
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
								<Select value={selectedRegion} onValueChange={setSelectedRegion}>
									<SelectTrigger>
										<SelectValue>{regions.find((region) => region.value === selectedRegion)?.label}</SelectValue>
									</SelectTrigger>
									<SelectContent>
										{regions.map((region) => (
											<SelectItem key={region.value} value={region.value}>
												{region.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col gap-1">
								<Label htmlFor="profile" className="text-left">
									Profil
								</Label>
								<Select value={selectedProfile} onValueChange={setSelectedProfile}>
									<SelectTrigger>
										<SelectValue>{profiles.find((profile) => profile.value === selectedProfile)?.label}</SelectValue>
									</SelectTrigger>
									<SelectContent>
										{profiles.map((profile) => (
											<SelectItem key={profile.value} value={profile.value}>
												{profile.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
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
									Créer un personnel
								</Button>
							</div>
						</DialogFooter>
					</form>
				</Form> */}
			</DialogContent>
		</Dialog>
	);
};

export default DialogCreate;
