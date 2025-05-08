import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const activateGuard: CanActivateFn = (route) => {
  const selectedId: number | undefined = +route.params?.['id'];
  const router: Router = inject(Router);
  if (selectedId == null || isNaN(selectedId)) {
    router.navigate(['']);
  }
  return true;
};
