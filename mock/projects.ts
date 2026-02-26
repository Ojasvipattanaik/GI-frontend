import { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'GI Event Calendar',
    description:
      'GI Event Calendar is an FH Aachen university initiative for building a project collaboration platform for the German Informatics Society.',
    image: '/project1.jpg',
    techStack: ['Java', 'C++', 'Figma', 'JavaScript', 'Python'],
    location: 'FH Aachen, Aachen, North Rhine Westphalia',
    milestones: [
      { title: 'Team formation', date: '30 September' },
      { title: 'Project planning', date: '31 October' },
      { title: 'Requirement gathering', date: '30 November' },
      { title: 'Web design', date: '31 December' },
      { title: 'Web development & Beta', date: '31 January' },
      { title: 'Full release', date: '28 February' }
    ],
    comments: [
      {
        author: 'Prof. Dr. Martin Wolf',
        organization: 'FH Aachen',
        text: 'This project has great potential and strong academic value.'
      }
    ]
  }
]
