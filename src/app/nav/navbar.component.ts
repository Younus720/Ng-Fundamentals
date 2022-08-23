import { Component } from "@angular/core";
import { AuthService } from "../events/user/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles:[`
    .nav.navbar-nav { font-size : 16px; }
    #searchForm { margin-right : 100px;}
    @media(max-width:1200px){#searchForm {display:none}}
    li > a.active {color : #FFA500;}
    `]
})
export class NavBarComponent{
    constructor(public auth: AuthService){

    }

}