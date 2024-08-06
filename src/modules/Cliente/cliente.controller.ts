import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Client } from '@prisma/client';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}
  @Post('criar')
  async criarUsuario(@Body() createClientDto: any): Promise<Client> {
    return this.clienteService.criarUsuario(createClientDto);
  }

  @Get()
  async buscarTodosClientes(): Promise<{ message?: string; clients?: Client[] }> {
    return this.clienteService.buscarTodosClientes();
  }


  @Get('/:id')
  async buscarUmUnicoCliente(@Param('id') id: string): Promise<Client> {
    return this.clienteService.buscarUmUnicoCliente(id);
  }


  
}
