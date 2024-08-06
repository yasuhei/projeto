import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../lib/prisma';
import { Client } from '@prisma/client';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}

  async criarUsuario(createClientDto: any): Promise<Client> {
    const { nome, email, telefone, endereco } = createClientDto;

    return this.prisma.client.create({
      data: {
        nome,
        email,
        telefone,
        endereco,
      },
    });
  }

  async buscarTodosClientes(): Promise<Client[]> {
    return this.prisma.client.findMany();
  }

  async buscarUmUnicoCliente(id: any): Promise<Client> {
    const client = await this.prisma.client.findUnique({
      where: { id },
    });
    if (!client) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }
    return client;
  }

}
