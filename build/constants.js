"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelNames = exports.ServerConfiguration = void 0;
class ServerConfiguration {
    static get PORT() {
        ServerConfiguration.port = Number(process.env.PORT) || 8001;
        return ServerConfiguration.port;
    }
    static get HOST() {
        ServerConfiguration.host = process.env.HOST || "localhost";
        return ServerConfiguration.host;
    }
}
exports.ServerConfiguration = ServerConfiguration;
var ModelNames;
(function (ModelNames) {
    ModelNames["USER"] = "user";
})(ModelNames || (exports.ModelNames = ModelNames = {}));
