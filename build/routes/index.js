"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_route_1 = __importDefault(require("./home.route"));
const users_route_1 = __importDefault(require("./users.route"));
const api_1 = require("../api");
const routes = (0, express_1.Router)();
routes.use(home_route_1.default);
routes.use(api_1.API_URLS.USER_URL, users_route_1.default);
exports.default = routes;
