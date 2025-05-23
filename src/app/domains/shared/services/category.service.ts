import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environment/environment';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);
  private url = environment.apiUrl;

  getAll() {
    return this.http.get<Category[]>(`${this.url}/api/v1/categories`);
  }
}
