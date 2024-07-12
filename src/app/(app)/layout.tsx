import { Header } from "@/components/header";

type LayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
