const apiEndpoint = 'https://api.github.com';
const username = 'tianhanl';
const reponame = 'blog';

export const requestArticles = page => {
  return fetch(
    `${apiEndpoint}/repos/${username}/${reponame}/issues?page=${page}`
  ).then(response => response.json());
};
