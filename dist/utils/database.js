"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        this.server = '127.0.0.1';
        this.port = '27017';
        this.db = 'codetrix';
        mongoose_1.default.connect(`mongodb://${this.server}:${this.port}/${this.db}`)
            .then(() => {
            console.log("SE CONECTÓ A MONGO");
        }).catch((error) => {
            console.error("ERROR al conectarse a mongo", error);
        });
    }
}
exports.Database = Database;
