const apiEndpoint = 'https://api.github.com';
const username = 'tianhanl';
const reponame = 'blog';

export const getArticles = page => {
  return fetch(
    `${apiEndpoint}/repos/${username}/${reponame}/issues?page=${page}`
  ).then(response => response.json());
};

export const getLabels = () => {
  return fetch(`${apiEndpoint}/repos/${username}/${reponame}/labels`).then(
    response => response.json()
  );
};
