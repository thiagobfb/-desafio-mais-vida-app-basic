export class Usuario {
    public id:string;
    public username:string;
    public senha:string;
    public habilitado:boolean;

    constructor(){
        this.id = '';
        this.username = '';
        this.senha = '';
        this.habilitado = true;
    }
}