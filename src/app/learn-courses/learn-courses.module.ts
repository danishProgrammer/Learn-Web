import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/components/cards/card/shared.module';
import { LearnCourseRoutingModule } from './learn-courses-routing.module';
import { LearnCoursesComponent } from './learn-courses/learn-courses.component';

@NgModule({
  declarations: [LearnCoursesComponent],
  imports: [CommonModule, SharedModule, LearnCourseRoutingModule],
})
export class LearnCoursesModule {}
