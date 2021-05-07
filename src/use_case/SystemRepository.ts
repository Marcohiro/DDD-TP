import { getRepository } from "typeorm";


export interface ISystemRepository {
    save(system): void;
}

