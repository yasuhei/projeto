import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../lib/prisma';
import {  Comentario } from '@prisma/client';

@Injectable()
export class ComentariosService {
  constructor(private readonly prisma: PrismaService) {}

  async criarComentario(createComentarioDto: any, id?: number): Promise<Comentario> {
    const { descricao, dataEnvio, idOrdemServico } = createComentarioDto;
    // const ordemServico =  this.prisma.ordemServico.findUnique({
    //     where: { idOrdemServico }
    // })

    return this.prisma.comentario.create({
      data: {
        descricao,
        dataEnvio: new Date(dataEnvio),
        idOrdemServico,
      
      },
    });
  }



}
