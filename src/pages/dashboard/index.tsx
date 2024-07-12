import {Layout} from "@/components/custom/layout";
import {UserNav} from "@/components/user-nav";

export default function Dashboard() {
	console.log("RENDER DASHBOARD");
	return (
		<Layout>
			{/* ===== Top Heading ===== */}
			<Layout.Header>
				<div className="ml-auto flex items-center space-x-4">
					<UserNav />
				</div>
			</Layout.Header>

			{/* ===== Main ===== */}
			<Layout.Body>
				<div>Dashboard</div>{" "}
			</Layout.Body>
		</Layout>
	);
}
