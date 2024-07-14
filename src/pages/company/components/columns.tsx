import {ColumnDef} from "@tanstack/react-table";

import {DataTableColumnHeader} from "../../../components/table/data-table-column-header";
import {DataTableRowActions} from "./data-table-row-actions";

import {regions, districts} from "../data/data";
import {Company} from "../data/schema";

export const columns: ColumnDef<Company>[] = [
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
		accessorKey: "district",
		header: ({column}) => <DataTableColumnHeader column={column} title="District" />,
		cell: ({row}) => {
			const district = districts.find((district) => district.value === row.getValue("district"));

			if (!district) {
				return null;
			}

			return (
				<div className="flex items-center">
					{district.icon && <district.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
					<span>{district.label}</span>
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
