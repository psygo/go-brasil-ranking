export type FirebaseRef = string;

export type Uid = string;

interface _FirebaseDoc {
  firebaseRef?: FirebaseRef;
  dateCreated?: number;
  author?: Uid;
}
export type FirebaseDoc = Readonly<_FirebaseDoc>;
