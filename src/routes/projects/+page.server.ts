import { prisma } from "$lib/db";

//@ts-expect-error - idk why
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  let pageData = new PageData();
  for (let i = 0; i < pageData.languages.length; i++) {
    const language = pageData.languages[i];
    let projects = await prisma.language.findFirst({
      where: {
        name: language.name
      }
    })
    if (projects == null) {
      //@ts-expect-error - not returning like it wants
      projects = await getFromGithub(language.name);
      projects.lastFetched = new Date();
      await prisma.language.create({
        data: projects
      })
    }

    if (projects.lastFetched.getTime() < Date.now() - 1000 * 60 * 60) { // 1 hour
      //@ts-expect-error - not returning like it wants
      projects = await getFromGithub(language.name);
      projects.lastFetched = new Date();
      await prisma.language.create({
        data: projects
      })
    }

    pageData.languages[i].projects = projects.projects;
  }

  return { pageData: {...pageData} }
  
}

async function getFromGithub(language: string): Promise<Language> {
  let results = 0;
  const req = await fetch('https://api.github.com/graphql', {
    method: "POST",  
    headers: {
      "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({
      query: `query userInfo($login: String!) {
        user(login: $login) {
          # fetch only owner repos & not forks
          repositories(ownerAffiliations: OWNER, isFork: false, first: 100, privacy: PUBLIC) {
            nodes {
              name
              languages(first: 100, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node {
                    color
                    name
                  }
                }
              }
            }
          }
        }
      }`,
      variables: {
        login: 'svalencia014'
      }
    })
  });

  const res: GithubResponse = await req.json();
  let repositories = res.data.user.repositories.nodes;
  for (let i = 0; i < repositories.length; i++) {
    if (repositories[i].languages.edges == undefined) {
      return;
    }

    let repoLangs: GithubEdge[] = repositories[i].languages.edges;
    for (let a = 0; a < repoLangs.length; a++) {
      if (repoLangs[a].node.name.toUpperCase() == language.toUpperCase()) {
        results++;
      }
    }
  }
  return {
    name: language,
    projects: results
  };
}

type GithubResponse = {
  data: {
    user: {
      repositories: {
        nodes: GithubNode[]
      }
    }
  }
}

type GithubNode = {
  name: string;
  languages: {
    edges: GithubEdge[]
  };
}

type GithubEdge = {
  size: number;
  node: {
    color: string;
    name: string;
  }
}


class PageData {
  languages: Language[];

  constructor() {
    this.languages = [
      {
        name: 'JavaScript',
        projects: 0
      },
      {
        name: 'Typescript',
        projects: 0
      },
      {
        name: 'Svelte',
        projects: 0,
      },
      {
        name: "Python",
        projects: 0
      },
      {
        name: "Go",
        projects: 0
      }
    ];
  }
}

type Language = {
  name: string;
  projects: number;
}