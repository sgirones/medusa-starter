import { MedusaService } from "@medusajs/framework/utils";
import Voucher from "./models/voucher";
import Criteria from "./models/criteria";

class MultivoucherCriteriasModuleService extends MedusaService({
  Criteria,
  Voucher,
}) {}

export default MultivoucherCriteriasModuleService;