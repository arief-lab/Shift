import { Button } from "@shift/ui/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<div className="w-full max-w-5xl space-y-8 text-center">
				<h1 className="font-bold text-6xl tracking-tight">
					Welcome to <span className="text-blue-600">Shift</span>
				</h1>
				<p className="mx-auto max-w-2xl text-muted-foreground text-xl">
					Fast, reliable delivery service that gets your packages where they
					need to be, when they need to be there.
				</p>
				<div className="flex justify-center gap-4">
					<Button asChild size="lg">
						<Link href="http://localhost:3001">Launch App</Link>
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link href="/about">Learn More</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}
