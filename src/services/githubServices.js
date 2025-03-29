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