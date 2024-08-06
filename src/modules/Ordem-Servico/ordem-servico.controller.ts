import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdemService } from './ordem-servico.service';
import { OrdemServico } from '@prisma/client';

@Controller('ordemServicos')
export class OrdemServicoController {
  constructor(private readonly ordemService: OrdemService) {}

  @Get()
  async buscarTodosServicos(): Promise<{message?: string; servicos?: OrdemService[] }> {
    return this.ordemService.buscarTodosService();
  }
    
  @Post()
  async criarServico(@Body() createOrdemServicoDto: any): Promise<OrdemServico> {
    return this.ordemService.criarServico(createOrdemServicoDto);
  }


}
