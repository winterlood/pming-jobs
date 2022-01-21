import axios from "axios";

const retryer = async (
  fetcher: any,
  variables: any,
  oauth_token,
  retries: number = 0
) => {
  try {
    const token = oauth_token;
    if (token) {
      let response = await fetcher(variables, token, retries);

      const isRateExceeded =
        response.data.errors && response.data.errors[0].type === "RATE_LIMITED";

      if (isRateExceeded) {
        throw new Error("RATE_LIMIT_EXCEEDED");
      }
      return response;
    }
  } catch (err) {
    console.log(err);
    const isBadCredential =
      err.response.data && err.response.data.message === "Bad credentials";

    if (isBadCredential) {
      retries++;
      // directly return from the function
      return retryer(fetcher, variables, retries);
    }
  }
};

const request = (data: any, headers: any) => {
  // @ts-ignore
  return axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data,
  });
};

const fetcher = (variables, token) => {
  return request(
    {
      query: `#graphql
      fragment RepoInfo on Repository{
        id
        nameWithOwner
        owner{
          avatarUrl
          login
        }
        stargazers{
          totalCount
        }
        description
        primaryLanguage{
          color
          id
          name
        }
        languages(first:10){
          edges {
            size
            node {
              color
              name
            }
          }
        }
        issues{
          totalCount
        }
        isPrivate
        openGraphImageUrl
        forkCount
        homepageUrl
        defaultBranchRef {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
        collaborators {
          totalCount
        }
      }
      query getContribution($login: String!) {
        user(login: $login) {
          id
          name
          email
          contributionsCollection {
            totalRepositoryContributions # commit the repository number
            totalCommitContributions  # total commit number to all repository committed
            commitContributionsByRepository {# information per repository
              repository {
                ...RepoInfo
              }
              contributions {
                totalCount
              }
            }
          }
        }
      }
    `,
      variables,
    },
    {
      Authorization: `token ${token}`,
    }
  );
};

async function fetchContribution(username, oauth_token) {
  if (!username) {
    throw new Error("Invalid username");
  }

  let res = await retryer(fetcher, { login: username }, oauth_token);
  const data = res.data.data;

  return {
    ...data,
  };
}
export default fetchContribution;
