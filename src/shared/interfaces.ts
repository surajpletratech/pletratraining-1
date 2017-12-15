export interface IWorkshop {
    key: number;
    CourseName: string;
    Location: string;
    Instructor: string;
    Fee: number;
    Duration: number;
    StartDate: string;
    
}

export interface ICourse extends IWorkshop {

}

