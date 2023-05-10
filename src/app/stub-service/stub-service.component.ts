import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stub-service',
  templateUrl: './stub-service.component.html',
  styleUrls: ['./stub-service.component.scss']
})
export class StubServiceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(){
    this.router.navigate(['/home'])
  }

}
