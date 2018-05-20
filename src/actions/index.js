import actions from '../constants/actions';

const apiEndpoint = 'https://api.github.com';
const username = 'tianhanl';
const reponame = 'blog';

export const fetchArticles = page => ({
  type: actions.FETCH_ARTICLES,
  payload: fetch(
    `${apiEndpoint}/repos/${username}/${reponame}/issues?page=${page}`
  ).then(response => response.json())
});
