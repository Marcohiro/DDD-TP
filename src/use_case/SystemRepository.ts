import { getRepository } from "typeorm";


export interface ISystemRepository {

    save(system): void;

}

export class SystemRepository implements ISystemRepository {

    private readonly _repository: any;

    constructor() {
        this._repository = getRepository(System);
    }

    save(system: System): void {
        this._repository.save(system).catch((err) => console.log(err));
    }


}
