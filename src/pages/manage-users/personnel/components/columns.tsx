import {ColumnDef} from "@tanstack/react-table";

import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {DataTableRowActions} from "./data-table-row-actions";

import {regions} from "@/pages/company/data/data";
import {profiles} from "../data/data";
import {Personnel} from "../data/schema";

export const columns: ColumnDef<Personnel>[] = [
	{
		accessorKey: "id",
		header: ({column}) => <DataTableColumnHeader column={column} title="ID" />,
		cell: ({row}) => <div>{row.getValue("id")}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "image",
		header: ({column}) => <DataTableColumnHeader column={column} title="Image" />,
		cell: ({row}) => <img src={row.getValue("image")} alt="Profile" className="h-10 w-10 rounded-full" />,
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
		accessorKey: "firstName",
		header: ({column}) => <DataTableColumnHeader column={column} title="Prénom" />,
		cell: ({row}) => <div>{row.getValue("firstName")}</div>,
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
		accessorKey: "telephone",
		header: ({column}) => <DataTableColumnHeader column={column} title="Téléphone" />,
		cell: ({row}) => <div>{row.getValue("telephone")}</div>,
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
		accessorKey: "region",
		header: ({column}) => <DataTableColumnHeader column={column} title="Region" />,
		cell: ({row}) => {
			const region = regions.find((region) => region.value === row.getValue("region"));

			if (!region) {
				return null;
			}

			return (
				<div className="flex w-[100px] items-center">
					{region.icon && <region.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
					<span>{region.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "profile",
		header: ({column}) => <DataTableColumnHeader column={column} title="Profil" />,
		cell: ({row}) => {
			const profile = profiles.find((profile) => profile.value === row.getValue("profile"));

			if (!profile) {
				return null;
			}

			return (
				<div className="flex items-center">
					{profile.icon && <profile.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
					<span>{profile.label}</span>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		id: "actions",
		cell: ({row}) => <DataTableRowActions row={row} />,
	},
];
