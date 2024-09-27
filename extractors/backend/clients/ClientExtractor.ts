import {BaseExtractor} from "../../../common/types/BaseExtractor";
import {Client} from "./messages/Client";

export class ClientExtractor extends BaseExtractor<SourceType.BACKEND_DB, Client> {
    async extract() {
        return [{
            id: 2,
            updatedAt: new Date(),
        }];
    }
}
