import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const activateGuard: CanActivateFn = (route) => {
  const router: Router = inject(Router);
  const selectedFactId: number = +route.params?.['id'];
  if (selectedFactId == null || isNaN(selectedFactId)) {
    router.navigate(['']);
    return false;
  }
  return true;
};
