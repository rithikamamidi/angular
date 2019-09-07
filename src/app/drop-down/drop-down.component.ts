import { Component, OnInit } from "@angular/core";
import { HelperService } from "../helper.service";

@Component({
  selector: "app-drop-down",
  templateUrl: "./drop-down.component.html",
  styleUrls: ["./drop-down.component.css"]
})
export class DropDownComponent implements OnInit {
  sources;
  selectedSourceId;

  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.sources = this.helperService.getSources();
  }

  processSelectedValue() {
    this.helperService.updateSelection(this.selectedSourceId);
  }
}
