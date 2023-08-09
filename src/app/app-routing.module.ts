import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageAnalysisComponent } from './image-analysis/image-analysis.component';
import { VideoAnalysisComponent } from './video-analysis/video-analysis.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'Detect-Image', component: ImageAnalysisComponent},
  {path: 'Detect-Video', component: VideoAnalysisComponent},
  {path: 'SignUp', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
