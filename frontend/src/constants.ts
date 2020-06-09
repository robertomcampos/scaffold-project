import { environment } from "./environments/environment";

export class Constants {
    static readonly DOMAIN = environment.domain;
    static readonly API_BASE_URL = environment.apiUrl;
    static readonly PARENT_DOMAIN = environment.parentDomain;
    static readonly IS_CANVAS_PROJECT = true;
}
