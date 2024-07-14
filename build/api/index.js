"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URLS = exports.ApiResponse = exports.Status = exports.ResponseStatus = void 0;
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["OK"] = 200] = "OK";
    ResponseStatus[ResponseStatus["CREATED"] = 201] = "CREATED";
    ResponseStatus[ResponseStatus["UPDATED"] = 202] = "UPDATED";
    ResponseStatus[ResponseStatus["BAD_REQ"] = 400] = "BAD_REQ";
    ResponseStatus[ResponseStatus["UNAUTHORISED"] = 401] = "UNAUTHORISED";
    ResponseStatus[ResponseStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    ResponseStatus[ResponseStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    ResponseStatus[ResponseStatus["CONFLICT"] = 409] = "CONFLICT";
    ResponseStatus[ResponseStatus["TOO_LARGE_REQ"] = 413] = "TOO_LARGE_REQ";
    ResponseStatus[ResponseStatus["INV_PAYLOAD"] = 422] = "INV_PAYLOAD";
    ResponseStatus[ResponseStatus["ERROR"] = 500] = "ERROR";
    ResponseStatus[ResponseStatus["UNAVAILABLE"] = 503] = "UNAVAILABLE";
})(ResponseStatus || (exports.ResponseStatus = ResponseStatus = {}));
var Status;
(function (Status) {
    Status["SUCCESS"] = "success";
    Status["ERROR"] = "error";
    Status["EXCEPTION"] = "exception";
    Status["VALIDATION"] = "validation";
})(Status || (exports.Status = Status = {}));
class ApiResponse {
    constructor(status = Status.SUCCESS, message = "", data = null, entryBy = "127.0.0.1") {
        this.status = status;
        this.message = message;
        this.data = data;
        this.entryBy = entryBy;
    }
    get STATUS() {
        return this.status;
    }
    get MESSAGE() {
        return this.message;
    }
    get DATA() {
        return this.data;
    }
    get ENTERED_BY() {
        return this.entryBy;
    }
}
exports.ApiResponse = ApiResponse;
var API_URLS;
(function (API_URLS) {
    API_URLS["BASE_URL"] = "/api";
    API_URLS["USER_URL"] = "/user";
})(API_URLS || (exports.API_URLS = API_URLS = {}));
