import { RouterModule } from '@angular/router';
import { PostCreateComponent } from './post-create/post-create.component';
import { AngularMaterialModule } from './../angular-material-module';
import { PostListComponent } from './post-list/post-list.component';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';






@NgModule({
  declarations:[
    PostCreateComponent,
    PostListComponent,

  ],
  imports:[
    ReactiveFormsModule,
    AngularMaterialModule,
    CommonModule,
    RouterModule

  ]
})

export class PostsModule{}
