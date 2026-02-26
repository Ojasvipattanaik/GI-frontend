// types/index.ts

export interface Milestone {
  id: string
  title: string
  date: string
  description?: string
}

export interface Comment {
  id: string
  author: string
  affiliation?: string
  text: string
  createdAt: string
}

export interface Project {
  id: string
  title: string
  description: string
  location: string
  image?: string
  banner?: string
  techStack: string[]
  milestones: Milestone[]
  comments: Comment[]
}

export interface User {
  id: string
  name: string
  email?: string
  memberId: string
  registered: string
  profileImage?: string
  projects?: Project[]
}
