import {ColumnDef} from "@tanstack/react-table";

import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {DataTableRowActions} from "./data-table-row-actions";

import { Administration } from "../../class/Administration";

export const columns: ColumnDef<Administration>[] = [
	{
		accessorKey: "photo",
		header: ({column}) => <DataTableColumnHeader column={column} title="Image" />,
		cell: ({row}) => <img src={row.getValue("photo")} alt="Profile" className="h-10 w-10 rounded-full" />,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "nameadministration",
		header: ({column}) => <DataTableColumnHeader column={column} title="Nom" />,
		cell: ({row}) => <div>{row.getValue("nameadministration")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "matricule",
		header: ({column}) => <DataTableColumnHeader column={column} title="Matricule" />,
		cell: ({row}) => <div>{row.getValue("matricule")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "email",
		header: ({column}) => <DataTableColumnHeader column={column} title="Email" />,
		cell: ({row}) => <div>{row.getValue("email")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		
		accessorKey: "telephone",
		header: ({column}) => <DataTableColumnHeader column={column} title="Telephone" />,
		cell: ({row}) => <div>{row.getValue("telephone")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorFn: (row) => row.region.province.nameprovince,
		id: "region.province.nameprovince",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Province" />,
		cell: ({row}) => <div>{row.getValue("region.province.nameprovince")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorFn: (row) => row.region.nameregion,
		id: "region.nameregion",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Region" />,
		cell: ({row}) => <div>{row.getValue("region.nameregion")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorFn: (row) => row.profil.description,
		id: "profil.description",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Region" />,
		cell: ({row}) => <div>{row.getValue("profil.description")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		id: "actions",
		cell: ({row}) => <DataTableRowActions row={row} />,
	},
];
