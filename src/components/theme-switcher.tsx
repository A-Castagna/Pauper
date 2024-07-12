"use client";

import { useEffect, useState } from "react";

export function ThemeSwitcher() {
	const [theme, setTheme] = useState<"dark" | "light">("dark");

	useEffect(() => {
		setTheme(
			document.documentElement.classList.contains("dark") ? "dark" : "light",
		);
	});

	const change = () => {
		const state = document.documentElement.classList.toggle("dark");

		setTheme(state ? "dark" : "light");
	};

	return (
		<button
			onClick={change}
			type="button"
			className={theme === "dark" ? "text-white" : ""}
		>
			{theme}
		</button>
	);
}
