import { PrismaService } from '../../lib/prisma';
import { OrdemServico, StatusOrdemServico } from '@prisma/client';
import { z } from "zod";
declare const UpdateStatusSchema: z.ZodObject<{
    id: z.ZodNumber;
    status: z.ZodNativeEnum<{
        ABERTA: "ABERTA";
        FINALIZADA: "FINALIZADA";
        CANCELADA: "CANCELADA";
    }>;
}, "strip", z.ZodTypeAny, {
    id?: number;
    status?: "ABERTA" | "FINALIZADA" | "CANCELADA";
}, {
    id?: number;
    status?: "ABERTA" | "FINALIZADA" | "CANCELADA";
}>;
export type UpdateStatusDto = z.infer<typeof UpdateStatusSchema>;
declare const CreateOrdemSchema: z.ZodObject<{
    id: z.ZodNumber;
    descricao: z.ZodString;
    preco: z.ZodNumber;
    dataAbertura: z.ZodString;
    dataFinalizacao: z.ZodString;
    status: z.ZodEnum<["ABERTA", "FINALIZADA", "CANCELADA"]>;
    clientId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: number;
    status?: "ABERTA" | "FINALIZADA" | "CANCELADA";
    descricao?: string;
    preco?: number;
    dataAbertura?: string;
    dataFinalizacao?: string;
    clientId?: string;
}, {
    id?: number;
    status?: "ABERTA" | "FINALIZADA" | "CANCELADA";
    descricao?: string;
    preco?: number;
    dataAbertura?: string;
    dataFinalizacao?: string;
    clientId?: string;
}>;
export type CreateOrdemDto = z.infer<typeof CreateOrdemSchema>;
export declare class OrdemService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    criarServico(createOrdemServicoDto: OrdemServico): Promise<OrdemServico>;
    buscarTodosService(): Promise<{
        message?: string;
        todosServicos?: OrdemServico[];
    }>;
    atualizarStatus(id: number, status: StatusOrdemServico): Promise<{
        message?: string;
        servico?: OrdemServico[];
    }>;
}
export {};
