import { OrdemService } from './ordem-servico.service';
import { OrdemServico, StatusOrdemServico } from '@prisma/client';
export declare class OrdemServicoController {
    private readonly ordemService;
    constructor(ordemService: OrdemService);
    buscarTodosServicos(): Promise<{
        message?: string;
        servicos?: OrdemService[];
    }>;
    criarServico(createOrdemServicoDto: OrdemServico): Promise<OrdemServico>;
    atualizarStatus(id: number, status: StatusOrdemServico): Promise<{
        message?: string;
        ordem?: OrdemServico[];
    }>;
}
