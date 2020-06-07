import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';





@NgModule({
  declarations: [],
  imports: [
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule

	],
	exports: [
		AngularFireModule,
		AngularFireAuthModule,
		AngularFirestoreModule
	]
})
export class CustomFirebaseModule { }