import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Pauper",
	description: "Seu app para controle finaceiro!",
};

type RootProps = Readonly<{
	children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootProps) {
	return (
		<html lang="en" className="">
			<body
				className={`${font.className} min-h-screen flex flex-col bg-background`}
			>
				{children}
			</body>
		</html>
	);
}
