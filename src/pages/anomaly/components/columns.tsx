import {ColumnDef} from "@tanstack/react-table";

import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {DataTableRowActions} from "./data-table-row-actions";

import {Anomaly} from "../data/schema";

export const columns: ColumnDef<Anomaly>[] = [
	{
		accessorKey: "id",
		header: ({column}) => <DataTableColumnHeader column={column} title="ID" />,
		cell: ({row}) => <div>{row.getValue("id")}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({column}) => <DataTableColumnHeader column={column} title="Nom" />,
		cell: ({row}) => <div>{row.getValue("name")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		id: "actions",
		cell: ({row}) => <DataTableRowActions row={row} />,
	},
];
