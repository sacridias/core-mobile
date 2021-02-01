import { systemErrorHandler } from "../domains/error/ErrorHandler";
import { errorFlags } from "../domains/error/ExceptionFlags";

export class ErrorChecker {
	constructor(callback) {
		this.callback = callback;
	}
  callback = null;

  processError(error) {
  	switch (error.response) {
  	//These errors are not reported from here.
  	case 400:
  	case 405:
  	case 406:
  	case 407:
  	case 409:
  	case 410:
  	case 411:
  	case 412:
  	case 413:
  	case 415:
  	case 416:
  	case 417:
  	case 423:
  	case 422:
  	case 426:
  	case 428:
  	case 429:
  	case 431:
  	case 451:
  		return error;

  	case 418: {
  		this.callback.brewTea();
  		("");
  		return error;
  	}
  	case 401:
  	case 403:
  	case 423: {
  		systemErrorHandler(
  			"Error: Unauthorized",
  			"api response",
  			errorFlags.authentication,
  		);
  		return error;
  	}
  	case 404:
  	case 408:
  	case 511: {
  		if (this.callback.validateConnection()) {
  			return error;
  		} else {
  			systemErrorHandler(
  				"Error: network unreachable",
  				"api response",
  				errorFlags.networkInternetDown,
  			);
  		}
  		this.callback.handleError(error);
  		return error;
  	}
  	case 410:
  	case 414:
  	case 421: {
  		this.callback.invilidateURLs();
  		return error;
  	}
  	default:
  		if (error.response?.code < 300) {
  			return error;
  		} //Not an error.
  		else if (error.response?.code < 400) {
  			return error;
  		} //url notification.
  		else {
  			systemErrorHandler(
  				"Error: Unknown Network",
  				"api response",
  				errorFlags.networkInternetDown,
  			);
  		}
  		this.callback.handleError(error);
  		return error;
  	}
  }
}
