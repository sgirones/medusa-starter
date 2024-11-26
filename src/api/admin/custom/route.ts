import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { MULTIVOUCHER_CRITERIAS_MODULE } from "src/modules/multivoucher";
import MultivoucherCriteriasModuleService from "src/modules/multivoucher/service";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const service = req.scope.resolve(MULTIVOUCHER_CRITERIAS_MODULE) as MultivoucherCriteriasModuleService
  const criteria = await service.listCriterias()
  console.log(criteria)
  const vouchers = await service.listVouchers()
  console.log(vouchers)
  res.json(criteria)
}
