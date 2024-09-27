import {config} from "./common/config/config";

// sample of running extractors
for(const pipeline of config.pipelines){
    const extractor = new pipeline.extractor.implementation(pipeline.extractor)
    extractor.start()
}
