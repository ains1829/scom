import { Administration } from "./Administration";

export interface PageAdmintration{
  data: Administration[];
  hasnext: boolean;
  hasprevious: boolean;
  nombrepage: number;
  page: number;
}