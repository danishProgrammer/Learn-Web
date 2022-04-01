import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LearnCoursesComponent } from "./learn-courses/learn-courses.component";

const routes :Routes = [
    {path:'',component:LearnCoursesComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class LearnCourseRoutingModule {};