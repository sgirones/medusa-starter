import { model } from "@medusajs/framework/utils";
import Criteria from "./criteria";

export default model.define("voucher", {
  id: model.id({ prefix: "voucher" }).primaryKey(),
  handle: model.text().unique(),
  name: model.text(),
  criterias: model.manyToMany(() => Criteria, {
    mappedBy: "vouchers",
  }),
});