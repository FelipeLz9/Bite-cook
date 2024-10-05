import Link from "next/link";

export const Header = () => {
	return (
		<header className="header">
		<nav className="nav">
			<ul className="navlist">
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/about">About us</Link>
			</li>
			<li>
				<Link href="/contact">Contact</Link>
			</li>
			</ul>
		</nav>
		<div className="sesion">
			<Link href="/login">Login</Link>
			<Link href="/register">Register</Link>
		</div>
		</header>
	);
};
