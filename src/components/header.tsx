import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
	return (
		<header className="p-4 border-b border-zinc-600 flex justify-between">
			<nav className="font-medium space-x-3">
				<Link className="bg-white text-black p-1.5 rounded-md" href="/">
					Home
				</Link>
				<Link
					className="bg-white text-black p-1.5 rounded-md"
					href="/dashboard"
				>
					Dashboard
				</Link>
				<Link
					className="bg-white text-black p-1.5 rounded-md"
					href="/preferences"
				>
					Preferences
				</Link>
			</nav>
			<ThemeSwitcher />
		</header>
	);
}
