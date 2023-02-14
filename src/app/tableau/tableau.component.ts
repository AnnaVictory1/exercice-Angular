import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { Items } from '../items';


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {
  items: Items[] = [];
  categorie: any;
  constructor(public rs: RestService) {}
  ngOnInit(): void {
    this.rs.getItems().subscribe((response) =>{
      this.items=response;
    })
  }
  Search() {
    if (this.categorie =="") {
      this.ngOnInit();
    } else {
      this.items = this.items.filter( res =>{
        return res.categorie.toLocaleLowerCase().match(this.categorie.toLocaleLowerCase());
      })
    }
  }
}
