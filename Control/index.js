"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoConsole = exports.colorConsole = exports.Info = exports.Error = void 0;
const Error_1 = __importDefault(require("./Error"));
exports.Error = Error_1.default;
const Info_1 = __importDefault(require("./Info"));
exports.Info = Info_1.default;
const Console_1 = require("./Console");
Object.defineProperty(exports, "colorConsole", { enumerable: true, get: function () { return Console_1.colorConsole; } });
Object.defineProperty(exports, "infoConsole", { enumerable: true, get: function () { return Console_1.infoConsole; } });
//# sourceMappingURL=index.js.map