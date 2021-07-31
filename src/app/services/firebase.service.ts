import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { Base } from '../models/base';

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public firestore: AngularFirestore

  ) { }

  private col<T>(ref: CollectionPredicate<T>, queryFn?: any): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.firestore.collection<T>(ref, queryFn) : ref;
  }

  private doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.firestore.doc<T>(ref) : ref;
  }

  private currentTime(): any {
    return firebase.default.firestore.FieldValue.serverTimestamp();
  }

  private prepareBaseObject(object: Base): any {
    if(object !== null) {
      object.updatedDateTime = this.currentTime.toString()
    }
    return object;
  }

  public col$<T>(ref: CollectionPredicate<T>, queryFn?: any): Observable<T[]> {
    return this.col(ref, queryFn).valueChanges();
  }

  public doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref).snapshotChanges().pipe(map(doc => {
      return doc.payload.data() as T;
    }));
  }

  public update<T>(ref: DocPredicate<T>, key: string, data: any) {
    data = this.prepareBaseObject(data);
    return this.doc(ref + `/${key}`).update({
      ...data
    });
  }

  public set<T>(ref: DocPredicate<T>, data: any, id?: string) {
    data = this.prepareBaseObject(data);
    
    const uniqueRef = data.id ? data.id : this.firestore.createId();

    return this.doc(ref + `/${uniqueRef}`).set({
      ...data
    });
  }
}
