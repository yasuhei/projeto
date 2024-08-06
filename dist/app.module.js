"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cliente_controller_1 = require("./modules/Cliente/cliente.controller");
const cliente_service_1 = require("./modules/Cliente/cliente.service");
const prisma_1 = require("./lib/prisma");
const ordem_servico_controller_1 = require("./modules/Ordem-Servico/ordem-servico.controller");
const comentarios_controller_1 = require("./modules/Comentarios/comentarios.controller");
const ordem_servico_service_1 = require("./modules/Ordem-Servico/ordem-servico.service");
const comentarios_service_1 = require("./modules/Comentarios/comentarios.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, cliente_controller_1.ClienteController, ordem_servico_controller_1.OrdemServicoController, comentarios_controller_1.ComentariosController],
        providers: [app_service_1.AppService, cliente_service_1.ClienteService, prisma_1.PrismaService, ordem_servico_service_1.OrdemService, comentarios_service_1.ComentariosService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map