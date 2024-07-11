import {FC, ReactNode} from "react";
import {Outlet} from "react-router-dom";

const Layout: FC<{children?: ReactNode}> = ({children}) => {
	return (
		<>
			<div>
				{children}
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
