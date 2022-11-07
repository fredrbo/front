import { SorteioProps, Error } from "../types/index";
import api from "./api";

class SorteioService {
    async list(id: string): Promise<SorteioProps | Error> {
        try {
            const { data } = await api.get(id);
            return data;
        }
        catch (e: any) {
            return { error: e.message };
        }
    }

}

export default new SorteioService();