import "./App.css";
import {Routes, Route} from "react-router-dom";
import Login from "@/pages/auth/login";
import "@/output.css";
import Signin from "./pages/auth/sign-in";
import ResetPassword from "./pages/auth/reset-password";
import NewPassword from "./pages/auth/new-password";
import Dashboard from "./pages/dashboard";
import AppShell from "./components/appshel";
import ManageProducts from "./pages/manage-products";
import Companies from "./pages/company/index";
import Personnel from "./pages/manage-users/personnel";
import Administrator from "./pages/manage-users/admin";
import Anomaly from "./pages/anomaly";
import Team from "./pages/team";
import Details from "./pages/company/components/details";
import MyProfile from "./pages/profile";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/new-password" element={<NewPassword />} />

				<Route element={<AppShell />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/products" element={<ManageProducts />} />
					<Route path="/personnel" element={<Personnel />} />
					<Route path="/administrator" element={<Administrator />} />
					<Route path="/teams" element={<Team />} />
					<Route path="/companies" element={<Companies />} />
					<Route path="/companies/:id" element={<Details />} />
					<Route path="/anomalies" element={<Anomaly />} />
					<Route path="/my-profile" element={<MyProfile />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
