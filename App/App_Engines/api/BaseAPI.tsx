import {
	serviceArray,
	Service,
	ApiParameters,
	ApiMethod,
	callParameters,
} from "./Interfaces";
import axios from "axios";
import { systemErrorHandler } from "../../domains/error/ErrorHandler";
import { errorFlags } from "../../domains/error/ExceptionFlags";

export class BaseAPI {
	constructor() {}

  errorChecker = null;

  public static requestTimeout = 60 * 1000 * 1;
  getRequestTimeout() {
  	return BaseAPI.requestTimeout;
  }

  public static responseEncoding = "utf8";
  getResponseEncoding() {
  	return BaseAPI.responseEncoding;
  }

  Call = async (apiParam: ApiParameters) => {
  	let url = "";
  	if (apiParam.service === Service.authn) {
  		url = `${apiParam.customURL}${serviceArray[apiParam.service]}`;
  	} else if (apiParam.service !== Service.none) {
  		url = serviceArray[apiParam.service];
  	} else {
  		url = `${apiParam.customURL}`;
  	}
  	const timeout = BaseAPI.requestTimeout;

  	url = `${url}${apiParam.suffixURL}`;

  	const callParams: callParameters = {
  		url,
  		method: apiParam.method,
  		params: apiParam.params,
  		headers: apiParam.headers,
  		timeout,
  		responseEncoding: BaseAPI.responseEncoding,
  		withCredentials: apiParam.withCredentials,
  		responseType: apiParam.responseType,
  	};

  	if (
  		apiParam.method === ApiMethod.post ||
      apiParam.method === ApiMethod.patch ||
      apiParam.method === ApiMethod.delete
  	) {
  		callParams.data = apiParam.data;
  	}

  	const results = await axios
  		.request(callParams)
  		.then((res) => {
  			return res;
  		})
  		.catch((error) => {

  			apiParam.service !== Service.authn
  				? systemErrorHandler(
  					"Error: " + error.message + "\n" + callParams,
  					"baseAPI",
  					errorFlags.GeneralError,
  				)
  				: systemErrorHandler(
  					"Error: " + error.response.data.errorSummary,
  					"oktaAPI",
  					errorFlags.authentication,
  				);
  			return error;
  		});
  	return results;
  };
}
