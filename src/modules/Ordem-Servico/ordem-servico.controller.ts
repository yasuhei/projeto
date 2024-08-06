import { Body, Controller, Post } from '@nestjs/common';
import { OrdemService } from './ordem-servico.service';
import { OrdemServico } from '@prisma/client';

@Controller('ordemServicos')
export class OrdemServicoController {
  constructor(private readonly ordemService: OrdemService) {}
    
  @Post()
  async create(@Body() createOrdemServicoDto: any): Promise<OrdemServico> {
    return this.ordemService.criarServico(createOrdemServicoDto);
  }


}
