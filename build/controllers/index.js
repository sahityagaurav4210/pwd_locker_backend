"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller_1 = __importDefault(require("./home.controller"));
const users_controller_1 = __importDefault(require("./users.controller"));
class Controllers {
    static home() {
        return home_controller_1.default;
    }
    static user() {
        return users_controller_1.default;
    }
}
exports.default = Controllers;
