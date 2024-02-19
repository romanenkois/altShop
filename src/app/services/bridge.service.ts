import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  private API_BASE_URL:string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getProductsData(): Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/products/`);
  }

  getProductData(id: string): Observable<any> {
    // console.log(`${this.API_BASE_URL}/products/${id}`);
    // console.log(this.http.get(`${this.API_BASE_URL}/products/${id}`));
    return this.http.get(`${this.API_BASE_URL}/products/${id}`);
  }

  getImagesData(): Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/images/`);
  }

  getImageData(id: string): Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/images/${id}`);
  }

  getImage(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'text' });
  }
}
