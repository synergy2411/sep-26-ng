import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { Course } from '../services/course';
import { ICourse } from '../../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  route = inject(ActivatedRoute);
  courseService = inject(Course);

  courseId!: string;
  course!: ICourse;

  ngOnInit(): void {
    this.course = this.route.snapshot.data['resolvedCourse'];

    // this.route.params
    //   .pipe(
    //     switchMap((params) => {
    //       const { courseId } = params;
    //       return this.courseService.fetch(courseId);
    //     }),
    //   )
    //   .subscribe((course) => {
    //     console.log('Course : ', course);
    //     this.course = course;
    //   });
  }
}
