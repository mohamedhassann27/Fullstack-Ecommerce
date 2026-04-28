"use client";
// import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
// import { Logo } from "@/components/logo";
// import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "lucide-react";
import { FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Input } from "../ui/input";
import { VscSend } from "react-icons/vsc";


type FooterLink = {
	title: string;
	href: string;
	icon?: ReactNode;
};

type FooterSection = {
	label: string;
	links: FooterLink[];
};

const footerLinks: FooterSection[] = [
	{
		label: "Product",
		links: [
			{ title: "Features", href: "#" },
			{ title: "Pricing", href: "#" },
			{ title: "Testimonials", href: "#" },
			{ title: "Integration", href: "#" },
		],
	},
	{
		label: "Company",
		links: [
			{ title: "FAQs", href: "#" },
			{ title: "About Us", href: "#" },
			{ title: "Privacy Policy", href: "#" },
			{ title: "T&S", href: "#" },
		],
	},
	{
		label: "Resources",
		links: [
			{ title: "Blog", href: "#" },
			{ title: "Changelog", href: "#" },
			{ title: "Brand", href: "#" },
			{ title: "Help", href: "#" },
		],
	},
	{
		label: "Social Links",
		links: [
			{
				title: "Facebook",
				href: "#",
				icon: (
					<FaFacebook/>
				),
			},
			{
				title: "Instagram",
				href: "#",
				icon: (
					<FaInstagram/>
				),
			},
			{
				title: "Youtube",
				href: "#",
				icon: (
					<FaLinkedinIn/>
				),
			},
			{
				title: "LinkedIn",
				href: "#",
				icon: (
					<FaTwitter/>
				),
			},
		],
	},
];

export function Footer() {
	return (
		<footer data-aos="fade-up" data-aos-duration="600" className="relative mx-auto flex w-full l flex-col items-center justify-center rounded-t-4xl border-t p-6 md:p-8 md:rounded-t-2xl text-white dark:text-black bg-[#0a0a0a] dark:bg-[#eee]">
			<div ata-aos="fade-in" data-aos-delay="100" className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20 blur" />

			<div className="grid w-full gap-8 py-6 md:py-8 lg:grid-cols-3 lg:gap-8">
				{/* <AnimatedContainer className="space-y-4"> */}
					{/* <Logo className="h-4" /> */}
                    <div data-aos="fade-right" data-aos-delay="100" className="flex flex-col gap-4">
                        {/* <p className="mt-8 text-sm md:mt-0"> */}
                            {/* Beautify your app with efferd. */}
                            <p className="text-3xl">Exclusive Supscripe</p>
                            <p>Get 10% off your first order</p>
                            <div data-aos="zoom-in" data-aos-delay="150" className=" relative w-fit">
                                <Input type="text" className="w-fit py-5 px-4 rounded-sm placeholder:text-md dark:border-black" placeholder="Enter your email" />
                                <VscSend className="absolute top-2.5 right-5 text-2xl"/>
                            </div>
                        {/* </p> */}
                    </div>
				{/* </AnimatedContainer> */}

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2 lg:mt-0">
					{footerLinks.map((section,index) => (
						// <AnimatedContainer delay={0.1 + index * 0.1} key={section.label}>
						<div key={index} data-aos="fade-up" data-aos-delay={index * 80} className="mb-10 md:mb-0">
							<h3 className="text-lg">{section.label}</h3>
							<ul className="mt-4 space-y-2 text-sm">
								{section.links.map((link) => (
									<li key={link.title}>
										<a
											className="inline-flex items-center duration-250 hover:text-foreground dark:hover:text-theme [&_svg]:me-1 [&_svg]:size-4"
											href={link.href}
											key={`${section.label}-${link.title}`}
										>
											{link.icon}
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</div>
						// {/* </AnimatedContainer> */}
					))}
				</div>
			</div>
			<div data-aos="fade-in" className="h-px w-full bg-linear-to-r via-border" />
			<div data-aos="fade-up" data-aos-delay="100" className="flex w-full items-center justify-center py-4">
				<p className="text-sm">
					&copy; {new Date().getFullYear()} Mohamed Hassan, All rights reserved
				</p>
			</div>
		</footer>
	);
}

export default Footer
