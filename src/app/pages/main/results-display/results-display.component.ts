import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.css']
})
export class ResultsDisplayComponent implements OnInit {

  @Input('results') results: number;
  @Input('name') name: string;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  loadChart(){
    return this.router.navigate(['chart'])
  }
}
