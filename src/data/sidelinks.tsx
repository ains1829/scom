import {
	IconApps,
	IconLayoutDashboard,
	IconMessages,
	IconUserShield,
	IconPackage,
	IconUser,
	IconUsersGroup,
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
		href: "/",
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
				title: "Personnel",
				label: "",
				href: "/",
				icon: <IconUsersGroup size={18} />,
			},
			{
				title: "Administrateur",
				label: "",
				href: "/adminnistrator",
				icon: <IconUserShield size={18} />,
			},
		],
	},
	{
		title: "Sociétés",
		label: "",
		href: "/companies",
		icon: <IconMessages size={18} />,
	},
	{
		title: "Anomalies",
		label: "",
		href: "/anomalies",
		icon: <IconApps size={18} />,
	},
];
