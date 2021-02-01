import { AUTH_URL, COMMON_URL, PROPERTY_URL } from "../config";

export enum Service {
  none,
  auth,
  authn,
  property,
  storage,
  common,
}

export const serviceArray = [];
serviceArray[Service.none] = "";
serviceArray[Service.auth] = `${AUTH_URL}/api/v1/auth`;
serviceArray[Service.authn] = "/api/v1/authn";
serviceArray[Service.property] = `${PROPERTY_URL}/api/v1/property`;
serviceArray[Service.storage] = `${COMMON_URL}/api/v1/storage`;
serviceArray[Service.common] = `${COMMON_URL}/api/v1`;

export enum ApiMethod {
  get = "GET",
  post = "POST",
  patch = "PATCH",
  delete = "DELETE",
}

export interface ApiParameters {
  service: Service;
  customURL?: string;
  method: ApiMethod;
  headers?: any;
  params?: { [key: string]: any };
  data?: any;
  suffixURL: any;
  withCredentials: boolean;
  responseType: any;
}

export interface callParameters {
  url: string;
  timeout: number;
  responseEncoding: string;
  headers: any;
  data?: any;
  method: ApiMethod;
  withCredentials: boolean;
  responseType: any;
  params: { [key: string]: any };
}
