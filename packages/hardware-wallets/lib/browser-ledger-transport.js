"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hw_transport_webhid_1 = __importDefault(require("@ledgerhq/hw-transport-webhid"));
exports.transports = {
    "hid": hw_transport_webhid_1.default,
    "default": hw_transport_webhid_1.default
};
//# sourceMappingURL=browser-ledger-transport.js.map