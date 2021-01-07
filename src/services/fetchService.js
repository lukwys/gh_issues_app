const baseUrl = 'https://api.github.com/repos/facebook/react/issues?state=all';

export const fetchIssues = async () => {
  const data = await fetch(baseUrl);
  const results = await data.json();
  
  return results;
}
