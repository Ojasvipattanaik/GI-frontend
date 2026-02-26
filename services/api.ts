
import { projects } from '../mock/projects'
import { Project } from '../types'

export async function getProjects(): Promise<Project[]> {
  return projects
}

export async function getProjectById(id: string): Promise<Project | null> {
  return projects.find((p) => p.id === id) ?? null
}
