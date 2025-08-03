import { prisma } from '$lib/db';
import type { Language } from '@prisma/client';

//@ts-expect-error - idk why
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	let pageData = new PageData();
	for (let i = 0; i < pageData.languages.length; i++) {
		const language = pageData.languages[i];
		let projects = await prisma.language.findFirst({
			where: {
				name: language.name
			}
		});

		// If project doesn't exist
		if (projects == null) {
			projects = await getFromGithub(language.name);
			await prisma.language.create({
				data: projects
			});
		}

		// if (projects.lastFetched.getTime() < Date.now() - 1000 * 60 * 60) {
		// 	// 1 hour
		// 	//@ts-expect-error - not returning like it wants
		// 	projects = await getFromGithub(language.name);
		// 	await prisma.language.update({
		// 		where: {
		// 			name: language.name
		// 		},
		// 		data: projects
		// 	});
		// }
    projects = await getFromGithub(language.name);
    

		pageData.languages[i].projectsOwned = projects.projectsOwned;
		pageData.languages[i].projectsContributed = projects.projectsContributed;
	}

	return { pageData: { ...pageData } };
};

async function getFromGithub(language: string): Promise<Language> {
	let ownedResults = 0;
	let contributedResults = 0;

	const req = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env.GH_TOKEN}`
		},
		body: JSON.stringify({
			query: `query userAndOrgRepos($login: String!) {
        user(login: $login) {
          # 1. Your own public, non-forked repositories
          repositories(
            ownerAffiliations: OWNER
            isFork: false
            first: 100
            privacy: PUBLIC
          ) {
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

          # 2. All repositories the user has contributed to (will be filtered client-side)
          repositoriesContributedTo(
            first: 100 # Adjust pagination as needed
            orderBy: {field: PUSHED_AT, direction: DESC} # Order by last contribution
            # No 'isFork', 'privacy', 'ownerAffiliations' arguments allowed here
          ) {
            nodes {
              name
              isFork # Fetch this field to filter client-side
              viewerCanAdminister # Indicates your permissions, implicitly privacy
              url # Useful for checking privacy (e.g., if it's a private repo URL)
              # To determine privacy: check if viewerCanAdminister is true (implies you have access)
              # or if the repository URL starts with a private GitHub instance URL if applicable.
              # Otherwise, assume public or handle based on context.

              owner { # Crucial for identifying if it's an Organization and its login
                __typename
                login
                ... on Organization {
                  name
                }
              }
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

          # 3. Organizations the user belongs to (needed for client-side filtering)
          organizations(first: 10) { # Fetch the organizations the user is a member of
            nodes {
              login # Get the login (identifier) for each organization
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
	if (!res.data || !res.data.user || !res.data.user.repositories) {
		return {
			name: language,
			projectsOwned: 0,
			projectsContributed: 0,
			lastFetched: new Date()
		};
	}

	let repositories = res.data.user.repositories.nodes;
	for (let repo of repositories) {
		if (!repo.languages || !repo.languages.edges) {
			continue;
		}

		let repoLangs: GithubEdge[] = repo.languages.edges;
		for (let lang of repoLangs) {
			if (lang.node.name.toUpperCase() == language.toUpperCase()) {
				ownedResults++;
			}
		}
	}

  for (let node of res.data.user.repositoriesContributedTo.nodes) {
    let repoLangs: GithubEdge[] = node.languages.edges;
    for (let lang of repoLangs) {
			if (lang.node.name.toUpperCase() == language.toUpperCase()) {
				contributedResults++;
			}
		}
  }

	return {
		name: language,
		projectsOwned: ownedResults,
    projectsContributed: contributedResults,
		lastFetched: new Date()
	};
}

type GithubResponse = {
	data: {
		user: {
			repositories: {
				nodes: GithubNode[];
			};
      repositoriesContributedTo: {
        nodes: GithubNode[];
      };
		};
    
	};
};

type GithubNode = {
	name: string;
	languages: {
		edges: GithubEdge[];
	};
};

type GithubEdge = {
	size: number;
	node: {
		color: string;
		name: string;
	};
};

class PageData {
	languages: Language[];

	constructor() {
		this.languages = [
			{
				name: 'javascript',
				projectsOwned: 0,
				projectsContributed: 0,
        lastFetched: new Date()
			},
			{
				name: 'typescript',
				projectsOwned: 0,
				projectsContributed: 0,
        lastFetched: new Date()
			},
			{
				name: 'svelte',
				projectsOwned: 0,
				projectsContributed: 0,
        lastFetched: new Date()
			},
			{
				name: 'python',
				projectsOwned: 0,
				projectsContributed: 0,
        lastFetched: new Date()
			},
			{
				name: 'go',
				projectsOwned: 0,
				projectsContributed: 0,
        lastFetched: new Date()
			},
			{
				name: 'swift',
				projectsOwned: 0,
				projectsContributed: 0,
        lastFetched: new Date()
			}
		];
	}
}
