export declare type FirebaseRef = string;
export declare type Uid = string;
interface _Author {
    uid: Uid;
    name: string;
    email: string;
}
export declare type Author = Readonly<_Author>;
interface _FirebaseDoc {
    firebaseRef?: FirebaseRef;
    dateCreated?: number;
    author?: Author;
}
export declare type FirebaseDoc = Readonly<_FirebaseDoc>;
export {};
