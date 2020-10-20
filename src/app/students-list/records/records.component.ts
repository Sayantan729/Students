import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  @Input('inputData') newData;
  @Output('deleteData') deleteData=new EventEmitter();
  @Output('editData') editData=new EventEmitter();
  data

  constructor(private fetchData: DataServiceService) {}

  ngOnInit(): void {
    
    this.data=this.newData;
    
    
    
  }

  delete(data)
  {
    this.deleteData.emit(data);
  }

  edit(data)
  {
    this.editData.emit(data);
  }

  

}
