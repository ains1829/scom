import {ColumnDef} from "@tanstack/react-table";

import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {DataTableRowActions} from "./data-table-row-actions";

import {Team} from "../data/schema";

export const columns: ColumnDef<Team>[] = [
	{
		accessorKey: "name",
		header: ({column}) => <DataTableColumnHeader column={column} title="Nom" />,
		cell: ({row}) => <div>{row.getValue("name")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "leader",
		header: ({column}) => <DataTableColumnHeader column={column} title="Chef d'equipe" />,
		cell: ({row}) => <div>{row.getValue("leader")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "members",
		header: ({column}) => <DataTableColumnHeader column={column} title="Membres" />,
		cell: ({row}) => {
			const members = row.getValue("members") as string[];
			return (
				<div className="flex flex-wrap gap-2">
					{members.map((member, index) => (
						<span key={index}>{member}</span>
					))}
				</div>
			);
		},
		enableSorting: false,
		enableHiding: false,
	},
	{
		id: "actions",
		cell: ({row}) => <DataTableRowActions row={row} />,
	},
];
