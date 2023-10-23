"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IvyNestStrategiesCommonModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvyNestStrategiesCommonModule = void 0;
const common_1 = require("@nestjs/common");
const ivy_script_config_service_1 = require("./services/ivy-script-config/ivy-script-config.service");
let IvyNestStrategiesCommonModule = IvyNestStrategiesCommonModule_1 = class IvyNestStrategiesCommonModule {
    static register(options) {
        return {
            module: IvyNestStrategiesCommonModule_1,
            exports: [ivy_script_config_service_1.IvyScriptConfigService],
            providers: [
                ivy_script_config_service_1.IvyScriptConfigService,
                {
                    provide: "IVY_SCRIPT_INITIAL_CONFIG",
                    useValue: options.scriptInitialScriptConfig,
                },
                {
                    provide: "IVY_SDK_CONFIG",
                    useValue: options.SDKConfig,
                },
            ],
        };
    }
};
IvyNestStrategiesCommonModule = IvyNestStrategiesCommonModule_1 = __decorate([
    (0, common_1.Module)({})
], IvyNestStrategiesCommonModule);
exports.IvyNestStrategiesCommonModule = IvyNestStrategiesCommonModule;
