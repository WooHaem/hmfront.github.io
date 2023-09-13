import {getProject} from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
	params: { project: string };
}

export default async function ProjectPage({params}: Props) {
	const slug = params.project;
	const project = await getProject(slug);

	return <section className="max-w-7xl mx-auto my-14">
		<header className="flex items-center justify-between">
			<h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow">
				{project.name}
			</h1>
			<a
				href={project.url}
				title="View Project"
				target="_blank"
				rel="noopener noreferrer"
				className="bg-gray-800 rounded-lg text-slate-200 font-bold py-3 px-4 whitespace-nowrap hover:bg-green-900 hover:text-white transition"
			>
				View Project
			</a>
		</header>

		{/* content goes here	*/}
		<div className="text-lg text-slate-200 mt-5">
			<PortableText value={project.content} />
		</div>

		{/*	image goes here */}
		<Image
			src={project.image}
			alt={project.name}
			width={1920}
			height={1080}
			priority
			className="mt-10 border-2 border-gray-700 object-cover rounded-xl max-h-[50vh]"
		/>
	</section>
}