export class Junction {

    constructor(
        public id: string,
        public creationDate: Date,
        public userCreated: string,
        public host: string,
        public context: string,
        public ordning: string,
        public server: string,
        public datoPilo: Date,
        public datoProd: Date,
        public inError: boolean,
        public errorMessage: string

) {  }
}