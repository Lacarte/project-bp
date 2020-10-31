import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SendGiftService } from '../../../services/send-gift.service';

@Component({
  selector: 'app-dialog-pick-sender',
  templateUrl: './dialog-pick-sender.component.html',
  styleUrls: ['./dialog-pick-sender.component.scss']
})
export class DialogPickSenderComponent implements OnInit {


   senderFirstN: string;
   senderLastN: string;


  public pickSenderForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstNameCN: new FormControl('', Validators.required),
    lastNameCN: new FormControl('', Validators.required),
  });

  constructor(public sendGiftService: SendGiftService) { }


  ngOnInit(): void {
  }



searchSender(): void {
  if (this.pickSenderForm.valid) {
  this.sendGiftService.pickSender(this.senderFirstN, this.senderLastN);
  }
}


close(): void{
  this.sendGiftService.senders =  [];
  this.sendGiftService.senderPeople = [];
  this.sendGiftService.isSenderExist = false;
}


hideNotification(): void {
  this.sendGiftService.showNotif = false;
  console.log('change');
}


}
