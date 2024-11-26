import { model } from "@medusajs/framework/utils";
import Voucher from "./voucher";

export default model.define("criteria", {
  id: model.id({ prefix: "criteria" }).primaryKey(),
  name: model.text(),
  vouchers: model.manyToMany(() => Voucher, {
    mappedBy: "criterias",
  }),
});