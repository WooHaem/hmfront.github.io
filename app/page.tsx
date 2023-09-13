import {getProjects} from "@/service/projects";
import FrontendPage from "@/components/frontend";
import PublisherPage from "@/components/publisher";
import CmsPage from "@/components/cms";

export default async function Home() {
  const projects = await getProjects();

  return <section className="max-w-7xl mx-auto my-20">
    <h1 className="text-7xl font-extrabold flex items-center">
      <img src="/hmfront_logo.png" alt="logo" className="w-20 h-20 mr-5" />
      Welcome to&nbsp;
      <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        Hmfront.com!
      </span>
    </h1>
    <p className="mt-3 text-3xl text-slate-500">
      Hello everyone! Check out my projects
    </p>

    <FrontendPage projects={projects}/>
    <PublisherPage projects={projects}/>
    <CmsPage projects={projects} />
  </section>

}
