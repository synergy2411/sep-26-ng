import { ResolveFn } from '@angular/router';
import { ICourse } from '../../model/course';
import { inject } from '@angular/core';
import { Course } from '../services/course';

export const courseResolverResolver: ResolveFn<ICourse> = (route, state) => {
  const courseService = inject(Course);

  const courseId = route.paramMap.get('courseId')!;

  return courseService.fetch(courseId);
};
