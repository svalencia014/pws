export async function load({ params }) {
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
    }
  ]
  let loadLanguages = async (resolve, reject) => {
    let i = 0;
    for (i = 0; i < languages.length; i++) {
      languages[i].projects = await getLanguageData(languages[i].name)
      console.log(`${languages[i].name}: ${languages[i].projects}`)
    }
    if (i != languages.length) {
      reject('Error loading languages')
    } else {
      resolve();
    }
  }
  async function main() {
    await new Promise((resolve, reject) => loadLanguages(resolve, reject))
    console.log(languages);
    return languages;
  }
  await main()
  return {
    languages
  }
}

async function getLanguageData(language) {
  let res = await fetch(`https://api.svalencia.me/github/languages/${language}`)
  let data = await res.json()
  return data.projects;
}