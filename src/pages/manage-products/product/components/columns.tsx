import {ColumnDef} from "@tanstack/react-table";

import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {DataTableRowActions} from "./data-table-row-actions";
import { product } from "../data/products";

export const columns: ColumnDef<product>[] = [
	{
		accessorKey: "idproduct",
		header: ({column}) => <DataTableColumnHeader column={column} title="ID" />,
		cell: ({row}) => <div>{row.getValue("idproduct")}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "nameproduct",
		header: ({column}) => <DataTableColumnHeader column={column} title="Nom du produit" />,
		cell: ({row}) => <div>{row.getValue("nameproduct")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorFn: (row) => row.typeproduct.nametypeproduct,
		id:"typeproduct.nametypeproduct",
		header: ({column}) => <DataTableColumnHeader column={column} title="Type de produit" />,
		cell: ({row}) => <div>{row.getValue("typeproduct.nametypeproduct")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		id: "actions",
		cell: ({row}) => <DataTableRowActions row={row} />,
	},
];
