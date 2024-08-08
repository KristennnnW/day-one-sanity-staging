# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

Deploy to Production (deploy-production.yml):
Trigger: Runs when code is pushed to the main branch.
Purpose: Builds and deploys your project to the production environment.

Deploy to Staging (deploy-staging.yml):
Trigger: Runs when code is pushed to the staging branch.
Purpose: Builds and deploys your project to the staging environment and syncs production data to staging.

Cleanup Dataset (cleanup-dataset.yml):
Trigger: Runs when a pull request is closed.
Purpose: Cleans up datasets associated with feature branches.

Prepare Dataset (prepare-dataset.yml):
Trigger: Runs on pushes to feature branches.
Purpose: Prepares new feature branches by cloning the production dataset.

Sync Staging Dataset (sync-staging.yml):
Trigger: Runs when changes are pushed to the staging branch.
Purpose: Syncs data from the production dataset to the staging dataset.
Simplified Explanation of Each Workflow

Deploy to Production Workflow:
What it does: When you push code to the main branch, this workflow runs. It checks out the code, sets up Node.js, installs dependencies, builds the project, and deploys it to your production environment.
Why it's important: This ensures that your production environment is always up to date with the latest code from the main branch.

Deploy to Staging Workflow:
What it does: When you push code to the staging branch, this workflow runs. It follows a similar process to the production deployment but also includes a step to sync data from the production dataset to the staging dataset.
Why it's important: This allows you to test new changes in a staging environment that mirrors the production environment, ensuring consistency between the two.

Cleanup Dataset Workflow:
What it does: When you close a pull request, this workflow deletes the dataset associated with that feature branch to keep things clean and tidy.
Why it's important: Helps manage and clean up datasets created for feature branches, preventing clutter.

Prepare Dataset Workflow:
What it does: When you push to a feature branch, this workflow deletes any existing dataset with the same name and clones the production dataset into it.
Why it's important: Ensures that your feature branches start with a fresh copy of the production data, making it easier to develop and test new features.

Sync Staging Dataset Workflow:
What it does: When changes are pushed to the staging branch, this workflow runs to sync the staging dataset with the production dataset.
Why it's important: Keeps the staging environment data consistent with production, allowing you to see how changes will impact the production environment.
How to Use These Workflows

Deploying Changes to Production:
Action: Push your code changes to the main branch.
Result: The deploy-production.yml workflow runs, deploying your changes to the production environment.

Deploying and Testing Changes in Staging:
Action: Push your code changes to the staging branch.
Result: The deploy-staging.yml workflow runs, deploying your changes to the staging environment and syncing data from production to staging.

Preparing Feature Branches:
Action: Push code to a new feature branch (e.g., feature/my-new-feature).
Result: The prepare-dataset.yml workflow runs, preparing a fresh dataset for your feature branch.

Cleaning Up After Merging:
Action: Merge your feature branch into main and close the pull request.
Result: The cleanup-dataset.yml workflow runs, cleaning up the dataset associated with your feature branch.

Syncing Data:
Action: Push changes to the staging branch.
Result: The sync-staging.yml workflow runs, ensuring the staging dataset is synced with the latest production data.

Steps to Follow
Make sure your GitHub Secrets are set correctly:
SANITY_PROJECT, SANITY_TOKEN, SANITY_AUTH_TOKEN
Push changes to staging for testing:
Make changes and push to the staging branch.
Verify the deployment and data synchronization in the staging environment.
Push changes to main for production deployment:
Once tested, merge your changes from staging to main.
Verify the deployment in the production environment.