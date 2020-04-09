import { ErrorHandler } from "@angular/core";


export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert("An unexpected error occured"); //real app we can use toast notification
        console.log(error)
    }
}