import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterState, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {

  // userId = input.required<string>();
  userName = input.required<string>();
  message = input.required<string>();
  // private userService = inject(UsersService);
  // private activatedRouter = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // userName = computed(() => this.userService.users.find(u => u.id === this.userId())?.name);

//   ngOnInit(): void {
//     //   console.log('Input Data: ' + this.message());
//     //   console.log(this.activatedRouter);
//     //   const subscription = this.activatedRouter.paramMap.subscribe({
//     //     next: (paramMap) =>
//     //       this.userName = this.userService.users.find((u) => u.id === paramMap.get('userId'))?.name || '',
//     //   });

//     //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
//     this.activatedRouter.data.subscribe({
//       next: data => {
//         console.log(data);
//       }
//     })
//   }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const userService = inject(UsersService);
  const userName = userService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  return resolveUserName(activatedRoute, routerState) + '\'s Tasks'
}
