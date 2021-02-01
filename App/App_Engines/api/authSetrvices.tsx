import apiService from "./system/APIService";
import { Service, ApiParameters, ApiMethod } from "./system/Interfaces";
import { AUTH_URL } from "./config";

export const getOktaAuthenticationToken = async (sessionToken) => {
	let apiParam: ApiParameters = {
		service: Service.auth,
		method: ApiMethod.get,
		params: {},
		headers: {},
		suffixURL: `/oktaUser/${sessionToken}`,
		responseType: "json",
		withCredentials: false,
	};
	return await apiService.Call(apiParam);
};

export const getOktaAuthenticationSessionToken = async (
	username: string,
	password: string,
) => {
	let URL = await apiService.getOktaURL();
	if (URL instanceof Error) {
		return URL;
	}

	let data = {
		username,
		password,
		options: {
			multiOptionalFactorEnroll: false,
			warnBeforePasswordExpired: true,
		},
	};

	const str = JSON.stringify(data);

	const length = str.length;

	let apiParam: ApiParameters = {
		service: Service.authn,
		customURL: URL,
		method: ApiMethod.post,
		params: {},
		headers: {
			"Content-Type": "application/json",
			"Content-Length": length,
		},
		data,
		suffixURL: "",
		responseType: "json",
		withCredentials: true,
	};
	var resp = await apiService.Call(apiParam);
	return resp;
};

export const getSecureAuthURL = async () => {
	let apiParam = {
		service: Service.auth,
		method: ApiMethod.get,
		headers: {},
		baseURL: AUTH_URL,
		suffixURL: "/secureAuthUrl",
		withCredentials: true,
		responseType: "text",
	};
	return await apiService.Call(apiParam);
};
