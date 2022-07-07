import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: "app-course-list",
    templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: "Angular: Forms",
                imageUrl: "/assets/images/forms.png",
                price: 0.01,
                code: "A-1",
                duration: 120,
                rating: 5.0,
                releaseDate: "July, 6, 2022"
            },
            {
                id: 2,
                name: "Angular: HTTP",
                imageUrl: "/assets/images/http.png",
                price: 0.02,
                code: "A-2",
                duration: 80,
                rating: 4.0,
                releaseDate: "July, 7, 2022"
            }
    
        ];
    }

}