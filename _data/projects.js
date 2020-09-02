const fetch = require('node-fetch');

const key = process.env.API_KEY;
const projectId = process.env.PROJECT_ID;

const endponit = `https://api.takeshape.io/project/${projectId}/graphql`;

module.exports = async () => {
  const getProjects = await fetch(endponit, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      query: `
        {
          getProjectList {
            items {
              name
              description
              startDate
              endDate
              client {
                name
              }
            }
          }
        }
      `,
    }),
  });
  const response = await getProjects.json();

  return response.data.getProjectList.items;
};
