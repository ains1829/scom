import "./App.css";
import {Routes, Route, Navigate} from "react-router-dom";
import Login from "@/pages/auth/login";
import "@/output.css";
import Signin from "./pages/auth/sign-in";
import ResetPassword from "./pages/auth/reset-password";
import NewPassword from "./pages/auth/new-password";
import Dashboard from "./pages/dashboard";
import AppShell from "./components/appshel";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate to="/signup" />} />
				<Route path="/signup" element={<Login />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/new-password" element={<NewPassword />} />

				<Route element={<AppShell />}>
					<Route path="/admin" element={<Dashboard />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
