import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search='';
  constructor(activatedRoute:ActivatedRoute, private router:Router){
    activatedRoute.params.subscribe((params) =>{
      if(params.search) this.search = params.search;

    })
  }

  ngOnInit(): void {

  }

  buscar(term:string):void{
    if(term)
    this.router.navigateByUrl('/buscar/'+term);
  }
}
