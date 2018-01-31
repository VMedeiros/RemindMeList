import * as firebase from "../firebase";
import { auth as firebaseAuthModule } from "./auth";
import { database as firebaseDatabaseModule } from "./database";
import { firestore as firebaseFirestoreModule } from "./firestore";
export declare function initializeApp(options?: firebase.InitOptions, name?: string): Promise<any>;
export declare function auth(app?: any): firebaseAuthModule.Auth;
export declare function database(app?: any): firebaseDatabaseModule.Database;
export declare function firestore(app?: any): firebaseFirestoreModule.Firestore;
