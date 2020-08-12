import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from 'src/app/core/services/data-sharing.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  info:string;
  key: string;
  url: any;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private dataSharing: DataSharingService,
    private sanitizer: DomSanitizer ) {

    this.key = 'YOUR_GOOGLE_KEY'
     }

  ngOnInit(): void {
    if(!this.dataSharing.getMapAddress()){
      this.router.navigateByUrl('');
    }

    this.info = this.dataSharing.getMapAddress()
    this.url = `https://www.google.com/maps/embed/v1/place?key=${this.key}
    &q=${this.info}`
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url)

  }

}
