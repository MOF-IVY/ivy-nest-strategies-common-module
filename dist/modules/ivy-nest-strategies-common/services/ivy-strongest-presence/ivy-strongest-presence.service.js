"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvyStrongestPresenceService = void 0;
const common_1 = require("@nestjs/common");
const ivy_strongest_presence_base_1 = require("./base/ivy-strongest-presence.base");
const ivy_sdk_service_1 = require("../ivy-sdk/ivy-sdk.service");
const ivy_script_config_service_1 = require("../ivy-script-config/ivy-script-config.service");
let IvyStrongestPresenceService = class IvyStrongestPresenceService extends ivy_strongest_presence_base_1.IvyStrongestPresenceServiceBase {
    sdk;
    config;
    constructor(sdk, config) {
        super(sdk, config);
        this.sdk = sdk;
        this.config = config;
    }
};
IvyStrongestPresenceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ivy_sdk_service_1.IvySDKService,
        ivy_script_config_service_1.IvyScriptConfigService])
], IvyStrongestPresenceService);
exports.IvyStrongestPresenceService = IvyStrongestPresenceService;
