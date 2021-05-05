import { Posts } from "./Posts"
import { Usuario } from "./Usuario"

export class Temas{

    public id: number
    public titulo: string
    public texto: string
    public nivel: string
    public posts: Posts
    public usuariosInscritos: Usuario
}