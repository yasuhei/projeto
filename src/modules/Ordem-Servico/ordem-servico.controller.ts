import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { OrdemService } from './ordem-servico.service';
import { OrdemServico, StatusOrdemServico } from '@prisma/client';

@Controller('ordemServicos/')
export class OrdemServicoController {
  constructor(private readonly ordemService: OrdemService) {}

  @Get()
  async buscarTodosServicos(): Promise<{message?: string; servicos?: OrdemService[] }> {
    return this.ordemService.buscarTodosService();
  }
    
  @Post()
  async criarServico(@Body() createOrdemServicoDto: OrdemServico): Promise<OrdemServico> {
    return this.ordemService.criarServico(createOrdemServicoDto);
  }


  @Put('atualizar-status')
  async atualizarStatus(@Body() body: { id: number; status: StatusOrdemServico }): Promise<{ message?: string; todosServicos?: OrdemServico[] }> {
    const { id, status } = body;
    return this.ordemService.atualizarStatus(id, status);
  }

}
