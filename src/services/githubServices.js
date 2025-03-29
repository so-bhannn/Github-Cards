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
          "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
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