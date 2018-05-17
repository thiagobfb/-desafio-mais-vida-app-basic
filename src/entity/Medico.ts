export const enum StatusMedicoEnum {
    'OCUPADO',
    'DISPONIVEL'
}

export class Medico {
    
    constructor(
        public id?: number,
        public primeiroNome?: string,
        public ultimoNome?: string,
        public especialidade?: string,
        public email?: string,
        public ativo?: boolean,
        public status?: StatusMedicoEnum,
        public cidade?: string,
        public estado?: string,
    ) {
        this.ativo = false;
    }
}