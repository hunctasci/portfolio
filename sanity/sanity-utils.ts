import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "c12a9tcn",
    dataset: "production",
    apiVersion: "2023-08-23",
  });

  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    alt,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }`
  );
}
