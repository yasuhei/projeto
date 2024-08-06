import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../lib/prisma';
import {  OrdemServico } from '@prisma/client';

@Injectable()
export class OrdemService {
  constructor(private readonly prisma: PrismaService) {}

  async criarServico(createOrdemServicoDto: any): Promise<OrdemServico> {
    const { descricao, preco, dataAbertura, dataFinalizacao,  status, clientId } = createOrdemServicoDto;

    return this.prisma.ordemServico.create({
      data: {
        descricao,
        preco,
        dataAbertura: new Date(dataAbertura),
        dataFinalizacao: new Date(dataFinalizacao),
        status,
        clientId
      },
    });
  }

  async buscarTodosService(): Promise<OrdemServico[]> {
    return this.prisma.ordemServico.findMany();
  }

}
