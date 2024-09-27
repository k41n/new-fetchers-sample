import {ExtractorConfig} from "./ExtractorConfig";

export abstract class BaseExtractor<TSource extends SourceType, TMessage extends object> {

    constructor(config: ExtractorConfig<TSource, TMessage>) {

    }

    start() {

    }

    abstract extract(): Promise<TMessage[]>
}
