import { Component, OnInit } from "@angular/core";
import { HelperService } from "../helper.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  articlesData;

  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.helperService
      .getSelection()
      .subscribe(
        selectionId =>
          (this.articlesData = this.helperService.getArticles(selectionId))
      );
  }
}
