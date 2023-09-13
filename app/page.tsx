import Image from "next/image";
import Link from "next/link";
import {getProjects} from "@/service/projects";

export default async function Home() {
  const projects = await getProjects();

  return <section className="max-w-7xl mx-auto my-14">
    <h1 className="text-7xl font-extrabold">
      Welcome to&nbsp;
      <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        Hmfront.com!
      </span>
    </h1>
    <p className="mt-3 text-3xl text-slate-500">
      Hello everyone! Check out my projects
    </p>
    <h2 className="mt-24 font-bold text-slate-400 text-3xl">List</h2>

    <article className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link
          href={project.url}
          key={project.name}
          title={project.name}
          target="_blank"
          className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
        >
          {project.image &&
            <img
              src={project.image}
              alt={project.name}
              className="object-cover rounded-lg border border-gray-100 h-48"
            />
          }
          <div className="text-3xl my-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-center whitespace-nowrap text-ellipsis">
            {project.name}
          </div>
          <span className="block text-center mb-3">{project.date}</span>
        </Link>
      ))}
    </article>
  </section>

}
