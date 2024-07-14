"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const api_1 = require("./api");
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "12kb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "6kb" }));
app.use((0, cors_1.default)({
    origin: process.env.ALLOWED_CLIENTS,
}));
app.use(`${api_1.API_URLS.BASE_URL}/${process.env.API_VERSION}`, routes_1.default);
exports.default = app;
