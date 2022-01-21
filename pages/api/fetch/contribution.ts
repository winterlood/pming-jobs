import fetchContribution from "lib/fetchers/fetchContribution";

export default async function handler(req, res) {
  const { user_name, access_token } = req.body;
  const fetch_res = await fetchContribution(user_name, access_token);
  const data = fetch_res.user;
  const final_res = {
    totalCommitContributions: data.totalCommitContributions,
    totalRepositoryContributions: data.totalRepositoryContributions,
    repositories:
      data.contributionsCollection.commitContributionsByRepository.map((it) => {
        return {
          id: it.repository.id,
          myCommitCount: it.contributions.totalCount,
          totalCommitCount:
            it.repository.defaultBranchRef.target.history.totalCount,
          nameWithOwner: it.repository.nameWithOwner,
          description: it.repository.description,
          openGraphImageUrl: it.repository.openGraphImageUrl,
          starCount: it.repository.stargazers.totalCount,
          languageList: it.repository.languages.edges.map((it) => {
            return {
              size: it.size,
              name: it.node.name,
              color: it.node.color,
            };
          }),
        };
      }),
  };
  res.status(200).json(final_res);
}
