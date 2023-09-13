import path from "path";
import {readFile} from "fs/promises";

export type Projects = {
	name: string;
	url: string;
	image: string;
	content: string;
	date: string;
	category: string;
}


export async function getProjects() {
	const filePath = path.join(process.cwd(), 'data', 'projects.json');

	return readFile(filePath, 'utf-8')
		.then<Projects[]>(JSON.parse)
		// JavaScript 객체로 변환된 json파일 내용을 날짜순으로 재정렬하기.
		.then((posts) => posts.sort((a, b)=> (a.date > b.date ? -1 : 1)))
}
