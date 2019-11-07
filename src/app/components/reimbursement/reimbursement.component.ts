import { Component, OnInit } from '@angular/core';
import{ExpenseRecord} from '../../Models/ExpenseRecord';
import {HttpClient} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit {

  url: string = 'http://localhost:8080/getAllExpenseRecords';

  records: Array<ExpenseRecord> = [
    {reimbursementId: '123456', type: 'expense', status: 'In Process', amount: '100', submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123457', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123458', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123459', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123460', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123461', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123461', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123462', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123463', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123464', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123465', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123466', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123467', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'},
    {reimbursementId: '123468', type: 'expense', status: 'In Process', amount: '100',submitted: '10/20/2019', resolved: '10/31/2019'}
  ];

  message = '';


  constructor(private http: HttpClient, private router: Router) {
       
   }

  ngOnInit() {
    //this.http.get<ExpenseRecord>(this.url).subscribe(res => {
      //this.records.push(res);
    //}); 
  }

  createNewRecord() {
    //this.http.post<ExpenseRecord>(this.url, msg).subscribe(res => {
     // this.records.push(res);
    //}); 
    this.router.navigateByUrl('/create-new-request');
    this.message = 'Creating new expense request';
   }


}

