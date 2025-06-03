import { MedusaRequest, MedusaResponse } from '@medusajs/framework/http';

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    res.sendStatus(200);
}
