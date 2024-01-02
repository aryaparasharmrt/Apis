const username = 'aryaparasharmrt'
const = 'github MuN01NM5OP0Qabp91Nbt8fME90oQpPiOu'

// function to get user information
async function getUserInfo() {
  const url = `https://api.github.com/users/${username}`;
  const headers = new Headers({
    Authorization: `token ${token}`,
  });

try {
  const response = await fetch(url, { headers });
  const userData = await response.json();

  console.log('User Information:');
  console.log(`Username: ${userData.login}`);
  console.log(`Name: ${userData.name}`);
  console.log(`Bio: ${userData.bio}`);
  console.log(`Public Repositories: ${userData.public_repos}`);
} catch (error) {
  console.error(`Error: ${error}`);
}
}

// Function to get user repositories
async function getUserRepositories() {
  const url = `https://api.github.com/users/${username}/repos`;
  const headers = new Headers({
    Authorization: `token ${token}`,
  });

try {
  const response = await fetch(url, { headers });
  const repoData = await response.json();

  console.log('\nUser Repositories:');
  reposData.forEach((repo) => {
    console.log(`Name: ${repo.name}`);
    console.log(`Description: ${repo.description}`);
    console.log(`Language: ${repo.language}`);
    console.log(`URL: ${repo.html_url}\n`);
  });
} catch (error) {
  console.error(`Error: ${error}`);
}
}

// Main function
async function main() {
  await getUserInfo();
  await getUserRepositories();
}

// Run the main function
main();















                    
