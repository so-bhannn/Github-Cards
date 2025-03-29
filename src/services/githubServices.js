const GITHUB_TOKEN=import.meta.env.VITE_GITHUB_TOKEN
export const fetchContributions = async(username)=>{
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            totalCommitContributions
          }
        }
      }
    `;

    try{
      const response = await fetch('https://api.github.com/graphql',{
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          query,
          variables: { username }
        }) 
      })
    const data = await response.json()
    return data['data']['user']['contributionsCollection']['totalCommitContributions']
    }
    catch (error){
      console.error("Error fetching contributions: ", error)
      return null
    }
  }

const getUserRepos = async(username)=>{
    try{
        const headers = GITHUB_TOKEN ? { 
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          } : {};
        const response=await fetch(`https://api.github.com/users/${username}/repos`,{headers})
        const data = await response.json()
        return data
    }
    catch (error){
      console.error("Error fetching repos: ", error)
      return null
    }
}

const getRepoLanguages = async(username, repo)=>{
    try{
        const headers = GITHUB_TOKEN ? { 
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          } : {};
        const response=await fetch(`https://api.github.com/repos/${username}/${repo}/languages`,{headers})
        const data = await response.json()
        return data
    }
    catch(error){
        console.error(`Error fetching languages for the repo: ${repo}`)
        return null
    }
}

export const analyzeLanguages = async(username)=>{
    const repos = await getUserRepos(username)

    if(!repos.length){
        throw new Error('User has no public repositories!')
    }

    const languagePromises = repos.map((repo)=>{
        return getRepoLanguages(username,repo.name)
    })

    const results = await Promise.allSettled(languagePromises)

    const languageDataArray = results.filter(result=> result.status==='fulfilled').map(result=>result.value)

    let all_languages={}
    let percentages={}
    let total_count=0

    languageDataArray.forEach((data)=>{
        if(data){
        Object.entries(data).forEach(([language,bytes])=>{
            all_languages[language]=(all_languages[language]||0)+bytes
            total_count+=bytes
        })
    }
    })

    Object.entries(all_languages).forEach(([language,bytes])=>{
        percentages[language] = ((bytes/total_count)*100).toFixed(2)
    })

    return Object.entries(percentages).sort((a,b)=>b[1]-a[1])
}



export const getLanguageColor=(language)=>{
  return 
}