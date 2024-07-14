import {ColumnDef} from "@tanstack/react-table";

import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {DataTableRowActions} from "./data-table-row-actions";

import {ProductType} from "../data/schema";

export const columns: ColumnDef<ProductType>[] = [
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
		accessorKey: "unit",
		header: ({column}) => <DataTableColumnHeader column={column} title="Unité" />,
		cell: ({row}) => <div>{row.getValue("unit")}</div>,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		id: "actions",
		cell: ({row}) => <DataTableRowActions row={row} />,
	},
];
