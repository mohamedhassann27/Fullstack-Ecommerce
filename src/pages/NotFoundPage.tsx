import { Button } from "@/components/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui/empty";
import { HomeIcon, CompassIcon } from "lucide-react";
import { Link } from "react-router";

export function NotFoundPage() {
	return (
		<div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
			<Empty>
				<EmptyHeader>
					<EmptyTitle className=" md:mask-b-to-80% mask-b-from-20% mask-b-to-80% font-extrabold text-9xl md:text-[200px]">
						404
					</EmptyTitle>
					<EmptyDescription className="md:-mt-12 -mt-8 md:text-2xl text-nowrap text-foreground/80">
						The page you're looking for might have been <br />
						moved or doesn't exist.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent>
					<div className="flex gap-3">
						<Button asChild className="md:text-lg md:px-6 md:py-6">
							<Link to="/">
								<HomeIcon className="md:w-6! md:h-6!"/>
								Go Home
							</Link>
						</Button>

						<Button asChild variant="outline" className=" md:text-lg md:px-6 md:py-6">
							<Link to="/">
								<CompassIcon  className="md:w-6! md:h-6!"/>{" "}
								Explore
							</Link>
						</Button>
					</div>
				</EmptyContent>
			</Empty>
		</div>
	);
}
