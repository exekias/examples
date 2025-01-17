// Generated by Xata Codegen 0.18.0. Please do not edit.
import {
  BaseClientOptions,
  buildClient,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "users",
    columns: [
      { name: "username", type: "string" },
      { name: "password", type: "string" },
    ],
  },
  {
    name: "items",
    columns: [
      { name: "label", type: "string" },
      { name: "is_done", type: "bool" },
      { name: "user", type: "link", link: { table: "users" } },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type Items = InferredTypes["items"];
export type ItemsRecord = Items & XataRecord;

export type DatabaseSchema = {
  users: UsersRecord;
  items: ItemsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://xata_examples-hf8grf.xata.sh/db/nextjs_basic_auth",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
