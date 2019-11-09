import { Component, OnInit, Input } from '@angular/core';
import { ExpenseRecord } from 'src/app/Models/ExpenseRecord';
import { Users } from 'src/app/Models/Users';
import { ErsService } from 'src/app/shared/ers.service';

@Component({
  selector: 'app-create-new-request',
  templateUrl: './create-new-request.component.html',
  styleUrls: ['./create-new-request.component.css']
})
export class CreateNewRequestComponent implements OnInit {
  @Input()
  user: Users;

  ticket: ExpenseRecord;
  ticketstr: string;

  constructor(private ersService: ErsService) { }

  ngOnInit() {
    this.ticket = {
      ticketid: null,
      amount: null,
      datesubmitted: null,
      dateresolved: null,
      description: null,
      receipt: null,
      authodId: null,
      resolvedid: null,
      statusid: null,
      typeid: null,
    };
  }

  getTicketStr() {
    this.ticketstr = JSON.stringify(this.ticket);
  }

  setupTicket(){
    this.ticket.authodId = 600; //this.user.userid;
    this.ticket.datesubmitted = new Date();
  }

  submit() {
    this.setupTicket();
    this.getTicketStr;
    console.log('Submitted Ticket:' + this.ticketstr);
    this.ersService.create(this.ticket);
  }

}
