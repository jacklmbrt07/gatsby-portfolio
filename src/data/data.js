module.exports = {
  SiteTitle: "Jack Lambert",
  Sitelogo: "#",
  SiteLogoText: "Jack Lambert",
  SiteAuthor: "Jack Lambert",
  SiteDescription: "Software Engineer",
  defaultDescription: "I’m Jack and I’m a Software engineer!",
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  },
  SiteSocialLinks: {
    // twitter: "https://twitter.com/AbdaliDahir",
    github: "https://github.com/jacklmbrt07",
    linkedin: "https://www.linkedin.com/in/jack-lambert-389567121/",
  },
  SiteAddress: {
    city: "Livermore",
    region: "California",
    country: "United States",
    zipCode: "94550",
  },
  SiteContact: {
    email: "jacklmbrt07@gmail.com",
    phone: "9259807780",
  },
  SiteCopyright: "2020",
}
