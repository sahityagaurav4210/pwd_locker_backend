"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectTryCatch = InjectTryCatch;
const api_1 = require("../api");
function InjectTryCatch(target, propertyKey, descriptor) {
    const originalMethodImplementation = descriptor.value;
    descriptor.value = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const [, response] = args;
            try {
                return yield originalMethodImplementation.apply(this, args);
            }
            catch (error) {
                const reply = new api_1.ApiResponse(api_1.Status.EXCEPTION, error.message || "An error occurred", error);
                return response.status(api_1.ResponseStatus.ERROR).json(reply);
            }
        });
    };
    return descriptor;
}
