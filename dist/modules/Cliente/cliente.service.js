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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../lib/prisma");
const zod_1 = require("zod");
const CreateClientSchema = zod_1.z.object({
    nome: zod_1.z.string().min(1, 'Nome é obrigatório'),
    email: zod_1.z.string().email('Email inválido'),
    telefone: zod_1.z.string().min(10, 'Telefone deve ter pelo menos 10 caracteres'),
    endereco: zod_1.z.string().min(5, 'O endereço informado esta incompleto'),
});
let ClienteService = class ClienteService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async criarUsuario(createClientDto) {
        try {
            const parsedDto = CreateClientSchema.parse(createClientDto);
            const { nome, email, telefone, endereco } = parsedDto;
            return this.prisma.client.create({
                data: {
                    nome,
                    email,
                    telefone,
                    endereco,
                },
            });
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                throw new common_1.BadRequestException(error.errors);
            }
            else {
                throw new Error('Erro ao criar o usuário');
            }
        }
    }
    async buscarTodosClientes() {
        const clientes = await this.prisma.client.findMany();
        if (clientes.length === 0) {
            return { message: 'Nenhum cliente encontrado' };
        }
        return { clients: clientes };
    }
    async buscarUmUnicoCliente(id) {
        const client = await this.prisma.client.findUnique({
            where: { id },
        });
        if (!client) {
            throw new common_1.NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
        return client;
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map