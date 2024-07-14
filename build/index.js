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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const constants_1 = require("./constants");
const db_1 = __importDefault(require("./db"));
const mongoose_1 = require("mongoose");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.default.connect(process.env.DB_QUERY_STRING || "");
        if (connection[mongoose_1.STATES.connected]) {
            app_1.default.listen(constants_1.ServerConfiguration.PORT, constants_1.ServerConfiguration.HOST, () => console.log(`Server is started on port ${constants_1.ServerConfiguration.PORT}`));
        }
        else
            console.error(`Error connecting to database....`);
    }
    catch (error) {
        console.error("An error occured", error);
    }
}))();
