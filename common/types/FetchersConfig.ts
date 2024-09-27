import {BaseUploader} from "./BaseUploader";
import {BaseTransformer} from "./BaseTransformer";
import {ExtractorConfig} from "./ExtractorConfig";

export type SourceMap = {
    [key in string]: SourceConfig<any>
}

export type DestinationMap = {
    [key in string]: DestinationConfig<any>
}

export interface DestinationConfig<Destination extends DestinationType> {
    type: Destination,
    connectionString: string,
}

export interface SourceConfig<Source extends SourceType> {
    type: Source,
    connectionString: string,
}

export interface UploaderConfig<
    TDestination extends DestinationType,
    TSourceMessage extends object,
    TDestinationMessage extends object,
    TUploader
> {
    destination: DestinationConfig<TDestination>,
    transformer: BaseTransformer<TSourceMessage, TDestinationMessage>,
    uploader: TUploader
}
export interface PipelineConfig<
    TSource extends SourceType,
    TDestination extends DestinationType,
    TSourceMessage extends object,
    TDestinationMessage extends object,
    TUploader = BaseUploader< TDestination, TDestinationMessage>
> {
    extractor: ExtractorConfig<TSource,TSourceMessage>
    uploaders: UploaderConfig<TDestination,TSourceMessage,TDestinationMessage,TUploader>[]

}
export interface FetchersConfig {
    pipelines: PipelineConfig<any, any,any,any>[],
}
