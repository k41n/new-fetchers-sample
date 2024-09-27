export abstract class BaseUploader<TDestination extends DestinationType, TMessage extends object> {
    abstract upload(msg: TMessage): Promise<void>
}
