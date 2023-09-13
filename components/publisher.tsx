import Link from "next/link";
import {Projects} from "@/service/projects";

type Props = {
	projects: Projects[];
}

export default function PublisherPage({projects}: Props) {
	const publisher = projects.filter((project) => project.category === "publisher");

	return <article>
		<h2 className="mt-24 font-bold text-5xl bg-gradient-to-b from-[#F1C93B] via-[#FD8D14] to-[#FFFFDD] bg-clip-text text-transparent">Publisher</h2>
    <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {publisher.map((project) => (
        <Link
          href={project.url}
          key={project.name}
          title={project.name}
          target="_blank"
          className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-[#F8DE22] transition"
        >
          {project.image &&
            <img
              src={project.image}
              alt={project.name}
              className="object-cover rounded-lg border border-gray-100 h-48 w-full"
            />
          }
          <div className="text-2xl truncate my-2 font-extrabold bg-gradient-to-r from-[#F1C93B] via-[#FD8D14] to-[#FFFFDD] bg-clip-text text-transparent text-center whitespace-nowrap">
            {project.name}
          </div>
          <span className="block text-center mb-3 text-slate-400">{project.date}</span>
        </Link>
      ))}
    </section>
	</article>
}