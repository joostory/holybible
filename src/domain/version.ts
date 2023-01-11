import { Bible } from "domain/bible";

export interface Version {
  name: string,
  vcode: string,
  bibles: Array<Bible>
}
