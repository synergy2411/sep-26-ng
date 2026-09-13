import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Course } from '../services/course';
import { ICourse } from '../../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit {
  allCourses!: Array<ICourse>;

  courseService = inject(Course);
  router = inject(Router);

  ngOnInit(): void {
    this.courseService.fetchAll().subscribe((courses) => (this.allCourses = courses));
  }

  onCourseSelect(course: ICourse) {
    this.router.navigate(['/courses/' + course.id]);
  }
}
