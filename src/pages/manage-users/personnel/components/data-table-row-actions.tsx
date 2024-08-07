import {DotsHorizontalIcon} from "@radix-ui/react-icons";
import {Row} from "@tanstack/react-table";

import {Button} from "@/components/custom/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

// import {personnelSchema} from "../data/schema";

interface DataTableRowActionsProps<TData> {
	row: Row<TData>;
}

export function DataTableRowActions<TData>({row}: DataTableRowActionsProps<TData>) {
	// const company = personnelSchema.parse(row.original);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
					<DotsHorizontalIcon className="h-4 w-4" />
					<span className="sr-only">Ouvrir le menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[160px]">
				<DropdownMenuItem>Editer</DropdownMenuItem>

				<DropdownMenuItem>Supprimer</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
