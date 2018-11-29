import { Component, OnInit, Input } from '@angular/core';
import { SwapiServiceService } from "../services/swapi-service.service"
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTypes = [{ view: "People", value: "people" }, { view: "Ships", value: "starships" }, { view: "Films", value: "films" }]
  apiSearch : FormGroup
  public _result: any[] = []
  

  constructor(private _fb: FormBuilder, private _swapiUrl: SwapiServiceService) { }

  ngOnInit() {
    this.apiSearch = this._fb.group({
      searchType : new FormControl(),
      searchWord : new FormControl()
    })
  }
  
  onGet(): void {
    if (this.apiSearch.controls["searchType"].value === "people") {
      this._swapiUrl.getPeople(this.apiSearch.controls["searchWord"].value).subscribe((res: any) => {this._result = res})
    } else if (this.apiSearch.controls["searchType"].value === "starships"){
      this._swapiUrl.getShips(this.apiSearch.controls["searchWord"].value).subscribe((res: any) => {this._result = res})
    } else {
      this._swapiUrl.getFilms(this.apiSearch.controls["searchWord"].value).subscribe((res: any) => {this._result = res})
    }
  }
  
}