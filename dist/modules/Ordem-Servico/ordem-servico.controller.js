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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdemServicoController = void 0;
const common_1 = require("@nestjs/common");
const ordem_servico_service_1 = require("./ordem-servico.service");
const client_1 = require("@prisma/client");
let OrdemServicoController = class OrdemServicoController {
    constructor(ordemService) {
        this.ordemService = ordemService;
    }
    async buscarTodosServicos() {
        return this.ordemService.buscarTodosService();
    }
    async criarServico(createOrdemServicoDto) {
        return this.ordemService.criarServico(createOrdemServicoDto);
    }
    async atualizarStatus(id, status) {
        console.log(id, status, 'qqqqq');
        return this.ordemService.atualizarStatus(id, status);
    }
};
exports.OrdemServicoController = OrdemServicoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdemServicoController.prototype, "buscarTodosServicos", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdemServicoController.prototype, "criarServico", null);
__decorate([
    (0, common_1.Put)('atualizar-status'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], OrdemServicoController.prototype, "atualizarStatus", null);
exports.OrdemServicoController = OrdemServicoController = __decorate([
    (0, common_1.Controller)('ordemServicos/'),
    __metadata("design:paramtypes", [ordem_servico_service_1.OrdemService])
], OrdemServicoController);
//# sourceMappingURL=ordem-servico.controller.js.map