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
exports.OrdemService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../lib/prisma");
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const StatusOrdemServicoEnum = zod_1.z.enum([client_1.StatusOrdemServico.ABERTA, client_1.StatusOrdemServico.FINALIZADA, client_1.StatusOrdemServico.CANCELADA]);
const UpdateStatusSchema = zod_1.z.object({
    id: zod_1.z.number(),
    status: zod_1.z.nativeEnum(client_1.StatusOrdemServico),
});
const CreateOrdemSchema = zod_1.z.object({
    id: zod_1.z.number(),
    descricao: zod_1.z.string().min(4, "A descrição tem que conter no minímo 4 digitos"),
    preco: zod_1.z.number(),
    dataAbertura: zod_1.z.string(),
    dataFinalizacao: zod_1.z.string(),
    status: StatusOrdemServicoEnum,
    clientId: zod_1.z.string()
});
let OrdemService = class OrdemService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async criarServico(createOrdemServicoDto) {
        try {
            const parseDto = CreateOrdemSchema.parse(createOrdemServicoDto);
            const { descricao, preco, dataAbertura, dataFinalizacao, status, clientId } = parseDto;
            return this.prisma.ordemServico.create({
                data: {
                    descricao,
                    preco,
                    dataAbertura: new Date(dataAbertura),
                    dataFinalizacao: new Date(dataFinalizacao),
                    status,
                    clientId
                },
            });
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                throw new common_1.BadRequestException(error.errors);
            }
            else {
                throw new Error('Erro ao criar o serviço');
            }
        }
    }
    async buscarTodosService() {
        const servicos = await this.prisma.ordemServico.findMany();
        if (servicos.length === 0) {
            return { message: "Nenhum serviço encontrado" };
        }
        return { todosServicos: servicos };
    }
    async atualizarStatus(id, status) {
        try {
            const parseDto = UpdateStatusSchema.parse({ id: id, status: status });
            const update = await this.prisma.ordemServico.update({
                where: { id: parseDto.id },
                data: { status: parseDto.status }
            });
            return { message: "Status atualizado com sucesso.", servico: [update] };
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                throw new common_1.BadRequestException(error.errors);
            }
            else {
                throw new Error('Erro ao atualizar o status');
            }
        }
    }
};
exports.OrdemService = OrdemService;
exports.OrdemService = OrdemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], OrdemService);
//# sourceMappingURL=ordem-servico.service.js.map