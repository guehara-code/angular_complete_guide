import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found-component/not-found-component";


export const routes: Routes = [
    {
        path: '', // <your-domain>/
        component: NoTaskComponent,
    },
    {
        path: 'users/:userId', // <your-domain>/tasks
        component: UserTasksComponent,
        children: [
            {
                path: 'tasks', // <your-domain>/users/<uid>/tasks
                component: TasksComponent
            }, 
            {
                path: 'tasks/new',
                component: NewTaskComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]