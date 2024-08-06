import { Comentario } from '@prisma/client';
import { ComentariosService } from './comentarios.service';
export declare class ComentariosController {
    private readonly comentarioService;
    constructor(comentarioService: ComentariosService);
    criarComentario(createComentarioDto: Comentario): Promise<Comentario>;
}
