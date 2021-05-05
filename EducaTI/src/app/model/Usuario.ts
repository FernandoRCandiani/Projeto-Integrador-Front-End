import { Posts } from "./Posts"
import { Temas } from "./Temas"

export class Usuario{

    public id: number
    public nome: string
    public email: string
    public senha: string
    public foto: string
    public temasInscritos : Temas
    public postsUsuario: Posts

}