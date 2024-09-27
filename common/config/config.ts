import {DestinationMap, FetchersConfig, SourceMap} from "../types/FetchersConfig";
import {CxTradeTransformer} from "../../transformers/cx/CxTradeTransformer";
import {CxTradeUploader} from "../../uploaders/cx/CxTradeUploader";
import {Mt4TradeExtractor} from "../../extractors/mt4/Mt4TradeExtractor";
import {DealioTradeUploader} from "../../uploaders/dealio/DealioTradeUploader";
import {DealioTradeTransformer} from "../../transformers/dealio/DealioTradeTransformer";

const sources = {
    backend: {
        type: SourceType.BACKEND_DB,
        connectionString: 'postgresql://localhost:27017',
    },
    real01: {
        type: SourceType.REPORTING_MT4_DB,
        connectionString: 'mysql://localhost:3309',
    },
    mlReal01: {
        type: SourceType.REPORTING_MT4_DB,
        connectionString: 'mysql://localhost:3306',
    },
} as const satisfies SourceMap

const destinations = {
    cellxpertsTauroMarkets: {
        type: DestinationType.CxReplica,
        connectionString: 'postgres://localhost:2232',
    },
    cellxpertsValutaMarkets: {
        type: DestinationType.CxReplica,
        connectionString: 'postgres://localhost:2233',
    },
    dealio: {
        type: DestinationType.DealioReplica,
        connectionString: 'mysql://localhost:3309',
    }
} as const satisfies DestinationMap

export const config: FetchersConfig = {
    pipelines: [
        {
            extractor: {
                source: sources.mlReal01,
                interval: 600,
                enabled: true,
                implementation: Mt4TradeExtractor
            },
            uploaders: [
                {
                    destination: destinations.cellxpertsTauroMarkets,
                    transformer:  new CxTradeTransformer(),
                    uploader: new CxTradeUploader()
                },
                {
                    destination: destinations.dealio,
                    transformer: new DealioTradeTransformer(),
                    uploader: new DealioTradeUploader()
                }
            ],
        },
        {
            extractor: {
                source: sources.backend,
                interval: 600,
                enabled: true,
                implementation: Mt4TradeExtractor
            },
            uploaders: [
                {
                    destination: destinations.cellxpertsValutaMarkets,
                    transformer:  new CxTradeTransformer(),
                    uploader: new CxTradeUploader()
                },
                {
                    destination: destinations.dealio,
                    transformer: new DealioTradeTransformer(),
                    uploader: new DealioTradeUploader()
                }
            ],
        },
    ]
}
