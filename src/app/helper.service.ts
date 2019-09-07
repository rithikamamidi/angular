import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HelperService {
  private selection = new Subject<any>();

  constructor(private httpClient: HttpClient) {}

  updateSelection(message: string) {
    this.selection.next(message);
  }

  getSelection(): Observable<any> {
    return this.selection.asObservable();
  }

  getSources() {
    return this.httpClient
      .get("https://newsapi.org/v1/sources?language=en")
      .pipe(map((totalData: any) => totalData.sources));
  }

  getArticles = (value: string) => {
    return this.httpClient
      .get(
        `https://newsapi.org/v1/articles?source=${value}&apiKey=3324402577ec4712aa2bc171b67e2428`
      )
      .pipe(map((data: any) => data.articles));
  };
}
