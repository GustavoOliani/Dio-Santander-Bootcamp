import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit{

    filterdCourses: Course[] = [];
    _courses: Course[] = [];
    _filterBy: string = "";

    constructor(private courseService: CourseService){ }

    ngOnInit(): void {
        this._courses = this.courseService.retriveAll();
        this.filterdCourses = this._courses;
    }

    set filter(busca: string){
        this._filterBy = busca;

        this.filterdCourses = this._courses.filter((
            course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
        );
    }

    get filter(){
        return this._filterBy;
    }
}