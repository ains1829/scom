import "./App.css";
import {Routes, Route, Navigate} from "react-router-dom";
import Login from "@/pages/auth/Login";
import "@/output.css";
import Layout from "@/Layout";
import Dashboard from "@/pages/admin/dashboard";
import Signin from "./pages/auth/Signin";
import ResetPassword from "./pages/auth/ResetPassword";
import NewPassword from "./pages/auth/NewPassord";

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Navigate to="/signup" />} />
					<Route path="/signup" element={<Login />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/reset-password" element={<ResetPassword />} />
					<Route path="/new-password" element={<NewPassword />} />
					<Route path="/admin" element={<Dashboard />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
