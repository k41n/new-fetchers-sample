export abstract class BaseTransformer<From, To> {
    abstract transform(input: From): Promise<To>
}
