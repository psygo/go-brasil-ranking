export type FirebaseRef = string;

export type Uid = string;

interface _Author {
  uid: Uid;
  name: string;
  email: string;
}
export type Author = Readonly<_Author>;

interface _FirebaseDoc {
  firebaseRef?: FirebaseRef;
  dateCreated?: number;
  author?: Author;
}
export type FirebaseDoc = Readonly<_FirebaseDoc>;
