export async function load() {
  let languages = [
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
      projects: 0
    },
    {
      name: "Python",
      projects: 0
    },
    {
      name: "Go",
      projects: 0
    }
  ]
  let loadLanguages = async (resolve, reject) => {
    let i = 0;
    for (i = 0; i < languages.length; i++) {
      languages[i].projects = await getLanguageData(languages[i].name)
    }
    if (i != languages.length) {
      reject('Error loading languages')
    } else {
      resolve();
    }
  }
  async function main() {
    await new Promise((resolve, reject) => loadLanguages(resolve, reject))
    return languages;
  }
  await main()
  return {
    languages
  }
}

async function getLanguageData(language) {
  let res = await fetch(`https://api.svalencia.me/languages/${language}`)
  let data = await res.json()
  return data.projects;
}