import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskItemComponent } from './app/tasks/tasks-list/task-item/task-item.component';
// import { TaskService } from './app/tasks/tasks.service';

// bootstrapApplication(AppComponent, {
//     providers: [TaskService]
// }).catch((err) => console.error(err));


bootstrapApplication(AppComponent).catch((err) => console.error(err));

