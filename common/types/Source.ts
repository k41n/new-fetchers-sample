export class Source<TType extends SourceType> {
    async query(sql: string): Promise<any[]> {
        return []
    }
}
