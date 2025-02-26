import type { MedusaRequest, MedusaResponse } from '@medusajs/framework/http';

const { GITHUB_COMMIT, GITHUB_BRANCH, GITHUB_REPOSITORY } = process.env;

export async function GET(req: MedusaRequest, res: MedusaResponse) {
    res.json({
        foo: 'bar',
        github_commit: GITHUB_COMMIT,
        github_branch: GITHUB_BRANCH,
        github_repository: GITHUB_REPOSITORY,
    });
}
