import { Block } from "../../common/block";
import * as db from "@package/database";

export type CreateFormReqBody = Omit<db.Form, "id" | "startTime">;

export type UpdateFormReqBody = Partial<CreateFormReqBody>;

export type EnableFormReqBody = { enable: boolean };
