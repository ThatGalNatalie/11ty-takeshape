const fetch = require('node-fetch');

const key = process.env.API_KEY;
const projectId = process.env.PROJECT_ID;

const endponit = `https://api.takeshape.io/project/${projectId}/graphql`;

module.exports = async () => {
  const getBlogs = await fetch(endponit, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      query: `
      {
        getPostList {
          items {
            title
            author
            datetime
            content
          }
        }
      }
      `,
    }),
  });
  const response = await getBlogs.json();

  return response.data.getPostList.items;
};
