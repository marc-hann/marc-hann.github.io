import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** All projects, newest year first, then by `order` within a year. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => b.data.year - a.data.year || a.data.order - b.data.order);
}

/** Projects grouped by year, newest year first. */
export function groupByYear(projects: Project[]): [number, Project[]][] {
  const groups = new Map<number, Project[]>();
  for (const project of projects) {
    const group = groups.get(project.data.year) ?? [];
    group.push(project);
    groups.set(project.data.year, group);
  }
  return [...groups.entries()];
}

/** Hash link that unfolds a project's details in the index. */
export const projectHref = (project: Project) => `#${project.id}`;
