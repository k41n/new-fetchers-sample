import {CxTrade} from "./messages/CxTrade";
import {BaseTransformer} from "../../common/types/BaseTransformer";

export class CxTradeTransformer extends BaseTransformer<ForexTrade, CxTrade> {
    async transform(input: ForexTrade): Promise<CxTrade> {
        return input;
    }
}
