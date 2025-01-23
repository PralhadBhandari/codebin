import { inject, Injectable } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc  ,getDocs ,query, where } from "firebase/firestore"; 
// import { AuthService } from './auth.service';
// import { Snippet } from '../models/snippet';
import { doc, getDoc } from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class DbService {

//   private db : any ;

//   constructor(  public authService : AuthService) {
//     this.db = getFirestore();
//   }


//   async createSnippet(snippet : Snippet){
//     try {
//       const docRef = await addDoc(collection(this.db, "snippets"), {
//         // to pass the title , code and snippet owner ID
//         ... snippet ,
//         by : this.authService.getUserId()

//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }

//   async readAllSnippets(){
//     let result : any[] = [];
//     try {
//       const querySnapshot = await getDocs(collection(this.db, "snippets"));
//       querySnapshot.forEach((doc) => {
//         result.push({ id : doc.id , ...doc.data()})
//       });
//     } catch (error) {
//       console.error("Error Reading Snippets : ", error);
//     }
//     return result;
//   }

//   async getSingleSnippet(id : string){
//     //                  database , collectionName, doc id
//     const docRef = doc(this.db, "snippets", id);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       return docSnap.data();
//       console.log("getSingleSnippet:", docSnap.data());
//     } else {
//       console.log("getSingleSnippet No such document!");
//     }
//     return docSnap.data();

//   }


// // // this method shows the record by taking name as input
// //  async getByName(title : string ){
// //   const querySnapshot = await getDocs(query(collection(this.db, "snippets"), where("title", "==", title)));

// //   querySnapshot.forEach((doc) => {
// //     console.log("getByName:", doc.data());
// //   });
// // }


}
