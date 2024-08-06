import { ClienteService } from './cliente.service';
import { Client } from '@prisma/client';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    buscarTodosClientes(): Promise<{
        message?: string;
        clients?: Client[];
    }>;
    buscarUmUnicoCliente(id: string): Promise<Client>;
    criarUsuario(createClientDto: Client): Promise<Client>;
}
