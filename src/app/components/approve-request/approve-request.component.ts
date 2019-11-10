import { Component, OnInit } from '@angular/core';
import{ExpenseRecord} from '../../Models/ExpenseRecord';
import {HttpClient, HttpResponse} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { ErsService } from 'src/app/shared/ers.service';
import { tick } from '@angular/core/testing';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-view-all-tickets',
  templateUrl: './../view-all-tickets/view-all-tickets.component.html',
  styleUrls: ['./../view-all-tickets/view-all-tickets.component.css']
})
export class ApproveRequestComponent implements OnInit {

  records: any; 
  message = '';
  ticket: ExpenseRecord;

  constructor(private http: HttpClient, private router: Router, private ersService: ErsService, private userService: UsersService) {
       
   }

   ngOnInit() {
    this.ticket = {
      ticketid: null,
      amount: null,
      datesubmitted: null,
      dateresolved: null,
      description: null,
      receipt: null,
      authorid: null,
      resolverid: null,
      statusid: null,
      typeid: null,
    };
  }

  setupTicket(){
    this.ticket.authorid = this.userService.user.userid;
    this.ticket.datesubmitted = new Date();
  }


  approveRequest(record:ExpenseRecord) {
    console.log("calling approve request");
    this.ticket = record;
    this.ticket.statusid=2;
    this.ticket.dateresolved=new Date();
    this.ersService.update(this.ticket);
    this.router.navigateByUrl('/view-all-tickets');
    this.message = 'Request Approved';
   }
   


}