import mongoose from "mongoose";

export class Database {
    server: string = '127.0.0.1';
    port:string = '27017';
    db:string = 'codetrix'

    constructor(){
        mongoose.connect(`mongodb://${this.server}:${this.port}/${this.db}`)
        .then(()=>{
            console.log("SE CONECTÓ A MONGO");
        }).catch((error)=>{
            console.error("ERROR al conectarse a mongo", error);
        });
    }
}