import {BaseTransformer} from "../../common/types/BaseTransformer";
import {DealioTrade} from "./messages/DealioTrade";

export class DealioTradeTransformer extends BaseTransformer<ForexTrade, DealioTrade> {
    async transform(input: ForexTrade): Promise<DealioTrade> {
        return input;
    }
}
