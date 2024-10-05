import Link from "next/link";

export const Header = () => {
	return (
		<header className="header">
		<nav className="nav">
			<ul className="navlist">
			<Link href="">Home</Link>
			<Link href="">About us</Link>
			<Link href="">Contact</Link>
			</ul>
		</nav>
		<div className="sesion">
			<button>Login</button>
			<button>Register</button>
		</div>
		</header>
	);
};
