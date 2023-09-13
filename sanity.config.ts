import  { defineConfig } from 'sanity';
import {deskTool} from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  title: 'hmfront-next',

  projectId: 'u73u7f8x',
  dataset: 'production',

	apiVersion: "2023-09-10",
	basePath: "/admin",

	plugins: [deskTool()],
	schema: {types: schemas},
});

export default config