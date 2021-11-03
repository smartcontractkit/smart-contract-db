# Contributing to Smart Contract DB

Thank you for considering contributing to Smart Contract DB. We value contributions of any size from anyone! Additions of any size make a difference.

# Submitting New Resources

We use [GitHub Flow](https://guides.github.com/introduction/flow/index.html), so all code changes take place via pull requests.

If you have web resources that can benefit the growing smart contracts community, the best course of action is to open a pull request with the addition (please search for related pull requests first). Pull requests are moderated and prioritized before merging. We actively welcome your submission.

Please follow these steps when submitting a new pull request:

1. Fork the repo and create your branch from `main`.
2. Make changes to resource files in `data/resources`. Images should be added in `/public/img/`.
3. If adding a resource with a date (eg. an new event), submit the event's date in ISO format.
4. Ensure your resource was added successfully by running the project.
5. Make sure your code lints.
6. Submit the pull request!

## Submission Criteria

All pull requests made on GitHub will be reviewed for the following criteria:

- Completeness: basic information about the resource must be complete based on the type of resource. Required fields are given as part of the type in the file located at `data/resources` (eg.: a new book has a `Book` type with details for its listing).
- Validity: the contribution must be valid and contain a supporting link to the related page.
- Value: the contribution should add value to the smart contract community. Please avoid submitting changes in order to market products.
- Quality: each resource type must be from a reputable source.

# Commit message guidelines

This project uses [husky v7](https://github.com/typicode/husky) to lint your commits. The project uses the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) guideline.

# Report bugs using Github's [issues](https://github.com/smartcontractkit/smart-contract-db/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/smartcontractkit/smart-contract-db/issues/new).
