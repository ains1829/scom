import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Input, InputProps} from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {XIcon} from "lucide-react";
import {Dispatch, SetStateAction, forwardRef, useState} from "react";

type InputTagsProps = InputProps & {
	value: string[];
	onChange: Dispatch<SetStateAction<string[]>>;
	options?: string[];
};

export const SelectTags = forwardRef<HTMLInputElement, InputTagsProps>(({value, onChange, options, ...props}, ref) => {
	const [pendingDataPoint, setPendingDataPoint] = useState("");

	const addPendingDataPoint = () => {
		if (pendingDataPoint && !value.includes(pendingDataPoint)) {
			onChange([...value, pendingDataPoint]);
			setPendingDataPoint("");
		}
	};

	const removeDataPoint = (item: string) => {
		onChange(value.filter((i) => i !== item));
	};

	const handleSelectChange = (selectedValue: string) => {
		if (selectedValue && !value.includes(selectedValue)) {
			onChange([...value, selectedValue]);
		}
	};

	return (
		<>
			<div className="flex gap-2">
				{options !== undefined ? (
					<Select onValueChange={handleSelectChange}>
						<SelectTrigger className="">
							<SelectValue placeholder="Selectionner un membre" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Membres</SelectLabel>
								{options.map((option, idx) => (
									<SelectItem key={idx} value={option}>
										{option}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				) : (
					<>
						<Input
							value={pendingDataPoint}
							onChange={(e) => setPendingDataPoint(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === ",") {
									e.preventDefault();
									addPendingDataPoint();
								}
							}}
							className="rounded-r-none"
							placeholder="Ajouter un membre"
							{...props}
							ref={ref}
						/>
						<Button
							type="button"
							variant="secondary"
							className="rounded-l-none border border-l-0"
							onClick={addPendingDataPoint}>
							Ajouter
						</Button>
					</>
				)}
			</div>
			{value.length > 0 && (
				<div className="border rounded-md min-h-[2.5rem] overflow-y-auto p-2 flex gap-2 flex-wrap items-center mt-2">
					{value.map((item, idx) => (
						<Badge key={idx} variant="secondary">
							{item}
							<button type="button" className="w-3 ml-2" onClick={() => removeDataPoint(item)}>
								<XIcon className="w-3" />
							</button>
						</Badge>
					))}
				</div>
			)}
		</>
	);
});

SelectTags.displayName = "SelectTags";
