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
exports.ComentariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../lib/prisma");
const zod_1 = require("zod");
const CreateComentarioDto = zod_1.z.object({
    id: zod_1.z.number().min(1, 'Id é obrigatório'),
    descricao: zod_1.z.string().min(4, "É obrigatório a descrição"),
    dataEnvio: zod_1.z.coerce.date(),
    idOrdemServico: zod_1.z.number().min(1, "O Id deve ser do tipo número"),
});
let ComentariosService = class ComentariosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async criarComentario(createComentarioDto) {
        try {
            const parsedDto = CreateComentarioDto.parse(createComentarioDto);
            const { descricao, dataEnvio, idOrdemServico } = parsedDto;
            return this.prisma.comentario.create({
                data: {
                    descricao,
                    dataEnvio: new Date(dataEnvio),
                    idOrdemServico,
                },
            });
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                throw new common_1.BadRequestException(error.errors);
            }
            else {
                throw new Error('Erro ao criar o comentário');
            }
        }
    }
};
exports.ComentariosService = ComentariosService;
exports.ComentariosService = ComentariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], ComentariosService);
//# sourceMappingURL=comentarios.service.js.map