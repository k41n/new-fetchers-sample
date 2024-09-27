import {BaseUploader} from "../../common/types/BaseUploader";
import {CxTrade} from "../../transformers/cx/messages/CxTrade";

export class CxTradeUploader extends BaseUploader<DestinationType.CxReplica,CxTrade> {
    upload(msg: CxTrade): Promise<void> {
        return Promise.resolve(undefined);
    }
}
