import {BaseExtractor} from "../../common/types/BaseExtractor";

export class Mt4TradeExtractor extends BaseExtractor<SourceType.REPORTING_MT4_DB, ForexTrade> {
    async extract() {
        return [{
            id: 1,
            symbol: 'USD',
            updatedAt: new Date(),
        }]
    }
}
