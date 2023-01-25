import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost btn-circle"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<NavLink exact to="/aboutus">👤 About Us</NavLink>
                            <hr />
							<NavLink to="/logs/new">📝 Create Log</NavLink>
                            <hr />
							<NavLink exact to="/logs">🗒️ View Logs</NavLink>
						</ul>
					</div>
				</div>
				<div className="navbar-center">
                <a href="https://www.youtube.com/watch?v=-fQGPZTECYs">🪵</a>
					<Link
						exact
						to="/"
						className="btn btn-ghost normal-case text-xl"
					>
					🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵 The Log 🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵🪵
					</Link>
				</div>
				<div className="navbar-end">
                    <a href="https://www.youtube.com/watch?v=siwpn14IE7E">?</a>
				</div>
			</div>
		</>
	);
};

export default NavBar;
