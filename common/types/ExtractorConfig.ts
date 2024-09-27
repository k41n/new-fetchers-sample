import {BaseExtractor} from "./BaseExtractor";
import {SourceConfig} from "./FetchersConfig";

export interface ExtractorConfig<TSource extends SourceType, TMessage extends object> {
    source: SourceConfig<TSource>
    interval: number,
    enabled: boolean,
    implementation: {
        new (config: ExtractorConfig<TSource, TMessage>): BaseExtractor<TSource, TMessage>;
    }
}
