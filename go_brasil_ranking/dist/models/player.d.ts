export interface SerializedCountry {
    name: string;
    state?: string;
    city?: string;
}
export default interface SerializedPlayer {
    name: string;
    countries: SerializedCountry[];
    elo: number;
}
export declare class Player {
    readonly name: string;
    readonly countries: readonly SerializedCountry[];
    readonly elo: number;
    constructor(name: string, countries: readonly SerializedCountry[], elo: number);
    serialize: () => SerializedPlayer;
    static deserialize: (json: any) => Player;
}
export declare const dummyPlayers: SerializedPlayer[];
