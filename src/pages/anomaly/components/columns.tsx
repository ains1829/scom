import {ColumnDef} from "@tanstack/react-table";

import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {DataTableRowActions} from "./data-table-row-actions";
import { Anomaly } from "../classes/Anomaly";

export const columns: ColumnDef<Anomaly>[] = [
	{
		accessorKey: "nameanomaly",
		header: ({column}) => <DataTableColumnHeader column={column} title="Anomaly" />,
		cell: ({row}) => <div>{row.getValue("nameanomaly")}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		id: "actions",
		cell: ({row}) => <DataTableRowActions row={row} />,
	},
];
