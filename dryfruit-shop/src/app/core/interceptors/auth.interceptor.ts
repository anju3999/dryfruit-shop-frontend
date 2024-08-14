import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Retrieve the authentication token from wherever it's stored (e.g., localStorage)
  const authToken = localStorage.getItem('authToken') || '';

  // Clone the request to add the new header with the token
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  // Pass the cloned request instead of the original request to the next handler
  return next(authReq);
};
