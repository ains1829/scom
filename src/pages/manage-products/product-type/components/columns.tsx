import {ColumnDef} from "@tanstack/react-table";
import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {DataTableRowActions} from "./data-table-row-actions";
import { productTypes } from "../data/product-types";
export const columns: ColumnDef<productTypes>[] = [
	{
		accessorKey: "idtypeproduct",
		header: ({column}) => <DataTableColumnHeader column={column} title="ID" />,
		cell: ({row}) => <div>{row.getValue("idtypeproduct")}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "nametypeproduct",
		header: ({column}) => <DataTableColumnHeader column={column} title="Nom" />,
		cell: ({row}) => <div>{row.getValue("nametypeproduct")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorFn :(row) => row.unite.nameunite,
		id: "unite.nameunite",
		header: ({column}) => <DataTableColumnHeader column={column} title="Unité" />,
		cell: ({row}) => <div>{row.getValue("unite.nameunite")}</div>,
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		id: "actions",
		cell: ({row}) => <DataTableRowActions row={row} />,
	},
];
