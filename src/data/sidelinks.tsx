import {
	IconLayoutDashboard,
	IconUserShield,
	IconPackage,
	IconUser,
	IconUsersGroup,
	IconBuildings,
	IconZoomExclamation,
	IconUsers,
} from "@tabler/icons-react";

export interface NavLink {
	title: string;
	label?: string;
	href: string;
	icon: JSX.Element;
}

export interface SideLink extends NavLink {
	sub?: NavLink[];
}

export const sidelinks: SideLink[] = [
	{
		title: "Dashboard",
		label: "",
		href: "/dashboard",
		icon: <IconLayoutDashboard size={18} />,
	},
	{
		title: "Produits",
		label: "",
		href: "/products",
		icon: <IconPackage size={18} />,
	},
	{
		title: "Utilisateur",
		label: "",
		href: "/users",
		icon: <IconUser size={18} />,
		sub: [
			{
				title: "Missionnaire",
				label: "",
				href: "/personnel",
				icon: <IconUsers size={18} />,
			},
			{
				title: "Administrateur",
				label: "",
				href: "/administrator",
				icon: <IconUserShield size={18} />,
			},
		],
	},
	{
		title: "Equipes",
		label: "",
		href: "/teams",
		icon: <IconUsersGroup size={18} />,
	},
	{
		title: "Sociétés",
		label: "",
		href: "/companies",
		icon: <IconBuildings size={18} />,
	},
	{
		title: "Anomalies",
		label: "",
		href: "/anomalies",
		icon: <IconZoomExclamation size={18} />,
	},
];
