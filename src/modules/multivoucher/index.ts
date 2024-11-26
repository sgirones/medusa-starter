import { Module } from "@medusajs/framework/utils"
import MultivoucherCriteriasModuleService from "./service"
export const MULTIVOUCHER_CRITERIAS_MODULE = "multivoucherCriteriasModule"

export default Module(MULTIVOUCHER_CRITERIAS_MODULE, {
  service: MultivoucherCriteriasModuleService,
})