export declare type JsonDatum = string | boolean | number | Date | Json[] | Object | null | undefined;
export interface JsonInterface {
    [key: string]: Json;
}
export declare type Json = JsonDatum | JsonInterface;
export default abstract class Serializable {
    abstract serialize(): Json;
}
