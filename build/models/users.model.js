"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const Patterns = require("@book-junction/patterns");
const constants_1 = require("../constants");
const user_hooks_1 = require("../db/hooks/user.hooks");
const userSchema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.default.Schema.Types.String,
        required: [true, "Name is required"],
        minlength: 2,
        maxlength: 32,
        match: [Patterns.common.name, "Invalid name"],
    },
    email: {
        type: mongoose_1.default.Schema.Types.String,
        minlength: 5,
        maxlength: 100,
        unique: true,
        default: null,
        match: [Patterns.common.email, "Invalid email"],
    },
    phone: {
        type: mongoose_1.default.Schema.Types.String,
        minlength: 10,
        maxlength: 15,
        unique: true,
        required: [true, "Phone number is required"],
        index: true,
        match: [Patterns.common.phone, "Invalid phone"],
    },
    password: {
        type: mongoose_1.default.Schema.Types.String,
        minlength: 8,
        maxlength: 32,
        required: [true, "Password is required"],
        match: [Patterns.common.password, "Invalid password"],
    },
}, { timestamps: true });
userSchema.pre("save", user_hooks_1.registerUserPreSaveHook);
const User = (0, mongoose_1.model)(constants_1.ModelNames.USER, userSchema);
exports.default = User;
