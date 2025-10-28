import createProjectsRepo from '@/repositories/towns/projects';


export default function(appFetch: typeof $fetch) {
  const projects = createProjectsRepo(appFetch);

  return {
    projects,
  }
}
