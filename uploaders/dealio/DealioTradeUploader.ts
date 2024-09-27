import {DealioTrade} from "../../transformers/dealio/messages/DealioTrade";
import {BaseUploader} from "../../common/types/BaseUploader";

export class DealioTradeUploader extends BaseUploader<DestinationType.CxReplica,DealioTrade> {
    upload(msg: DealioTrade): Promise<void> {
        return Promise.resolve(undefined);
    }
}
