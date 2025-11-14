import { Button } from "@shift/ui/components/ui/button";
import { Card } from "@shift/ui/components/ui/card";
import Link from "next/link";

export default function About() {
	return (
		<main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-24">
			<div className="w-full max-w-5xl space-y-12 text-center">
				<div className="space-y-4">
					<h1 className="font-bold text-5xl tracking-tight">About Shift</h1>
					<p className="mx-auto max-w-2xl text-muted-foreground text-xl">
						We're revolutionizing the delivery industry with fast, reliable, and
						efficient service.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					<Card className="p-6">
						<h3 className="mb-2 font-semibold text-xl">Fast Delivery</h3>
						<p className="text-muted-foreground">
							Get your packages delivered quickly with our optimized routing
							system.
						</p>
					</Card>
					<Card className="p-6">
						<h3 className="mb-2 font-semibold text-xl">Real-time Tracking</h3>
						<p className="text-muted-foreground">
							Track your deliveries in real-time with our advanced tracking
							system.
						</p>
					</Card>
					<Card className="p-6">
						<h3 className="mb-2 font-semibold text-xl">24/7 Support</h3>
						<p className="text-muted-foreground">
							Our support team is always available to help you with any
							questions.
						</p>
					</Card>
				</div>

				<div className="flex justify-center gap-4">
					<Button asChild size="lg">
						<Link href="http://localhost:3001">Get Started</Link>
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link href="/">Back to Home</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}
