import { PrismaService } from '../../lib/prisma';
import { Client } from '@prisma/client';
import { z } from "zod";
declare const CreateClientSchema: z.ZodObject<{
    nome: z.ZodString;
    email: z.ZodString;
    telefone: z.ZodString;
    endereco: z.ZodString;
}, "strip", z.ZodTypeAny, {
    nome?: string;
    email?: string;
    telefone?: string;
    endereco?: string;
}, {
    nome?: string;
    email?: string;
    telefone?: string;
    endereco?: string;
}>;
export type CreateClientDto = z.infer<typeof CreateClientSchema>;
export declare class ClienteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    criarUsuario(createClientDto: CreateClientDto): Promise<Client>;
    buscarTodosClientes(): Promise<{
        message?: string;
        clients?: Client[];
    }>;
    buscarUmUnicoCliente(id: any): Promise<Client>;
}
export {};
