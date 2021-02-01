import { ErrorChecker } from "../apiErrorChecker";
import { BaseAPI } from "./BaseAPI";
import { ApiParameters, Service, ApiMethod } from "./Interfaces";
import { systemErrorHandler } from "../../domains/error/ErrorHandler";
import { errorFlags } from "../../domains/error/ExceptionFlags";

class APIServices extends BaseAPI {
	constructor() {
		super();
		this.authToken = null;
		this.errorChecker = new ErrorChecker(this);
	}

	//TODO: Finish up this function.
	validateConnection() {
		return true;
	}

	invilidateURLs() {
		//TODO: Do stuff
	}

	invalidateCredentials() {
		//TODO: Do stuff
	}

  authToken = null;

  handleError(error) {
  	systemErrorHandler(
  		"Error: " + error.message,
  		"formReducer",
  		errorFlags.GeneralError,
  	);
  }

  getAuthToken() {
  	return this.authToken;
  }

  setAuthToken(token) {

  	this.authToken = token;
  }

  async fetchOktaURL() {
  	let apiParam: ApiParameters = {
  		service: Service.auth,
  		method: ApiMethod.get,
  		params: {},
  		headers: {},
  		suffixURL: "/getOktaUrl",
  		withCredentials: false,
  		responseType: "text",
  	};

  	return await apiService.Call(apiParam);
  }

  async getOktaURL() {
  	let results = await this.fetchOktaURL();
  	if (results instanceof Error) {
  		this.handleError(results);
  		return results;
  	}
  	return results.data;
  }

  authHeader() {
  	let token = this.getAuthToken();

  	if (token) {
  		return { Authorization: "Bearer " + token };
  	} else {
  		return new Error("Auth Error");
  	}
  }

  brewTea() {
  	//TODO: Fill this out.
  }
}

const apiService = new APIServices();

export default apiService;


export const storeHouse = { token: null };
