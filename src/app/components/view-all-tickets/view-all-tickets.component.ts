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
  templateUrl: './view-all-tickets.component.html',
  styleUrls: ['./view-all-tickets.component.css']
})
export class ViewAllTicketsComponent implements OnInit {

  records: any; 
  message = '';
  userid = -1;

  constructor(private http: HttpClient, private router: Router, private ersService: ErsService, private userService: UsersService) {
       
   }

  ngOnInit() {
    if(this.userService.user){
      this.userid = this.userService.user.userid;
    }
    this.getAllUserTickets();
  }

  async getAllUserTickets() {
    var tickets = await this.ersService.getAllUserTickets();
    var objStr = JSON.stringify(tickets);
    console.log('objstr' + objStr);
    this.records = tickets;
  }

  extractData(res: HttpResponse<Object>) {
    var key, count = 0;
    console.log('Obj: ' + JSON.stringify(res.body));
    for(key in res.body) {
      console.log('Obj: ' + JSON.stringify(res.body[count]));
        this.records.push(res.body[count++]);
    }
  }

  approveRequest(record:ExpenseRecord) {
    console.log("calling approve request");
   
    record.statusid=2;
    record.dateresolved=new Date();
    this.ersService.update(record);
    //this.router.navigateByUrl('/view-all-tickets');
    //this.message = 'Request Approved';
   }
   
   denyRequest(record:ExpenseRecord) {
    console.log("calling deny request");
   
    record.statusid=2;
    record.dateresolved=new Date();
    this.ersService.update(record);
    //this.router.navigateByUrl('/view-all-tickets');
   // this.message = 'Request Denied';
   }




}