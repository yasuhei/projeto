import { PrismaService } from '../../lib/prisma';
import { Comentario } from '@prisma/client';
import { z } from "zod";
declare const CreateComentarioDto: z.ZodObject<{
    id: z.ZodNumber;
    descricao: z.ZodString;
    dataEnvio: z.ZodDate;
    idOrdemServico: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id?: number;
    descricao?: string;
    dataEnvio?: Date;
    idOrdemServico?: number;
}, {
    id?: number;
    descricao?: string;
    dataEnvio?: Date;
    idOrdemServico?: number;
}>;
export type CreateComentarioDto = z.infer<typeof CreateComentarioDto>;
export declare class ComentariosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    criarComentario(createComentarioDto: CreateComentarioDto): Promise<Comentario>;
}
export {};
