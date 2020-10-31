import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPickSenderComponent } from '../../dialogs/dialog-pick-sender/dialog-pick-sender.component';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DialogSendConfirmationComponent } from '../../dialogs/dialog-send-confirmation/dialog-send-confirmation.component';
import { isNumber } from 'util';
import { forkJoin, interval } from 'rxjs';
import { compareAsc, format } from 'date-fns';
import { SendGiftService } from '../../../services/send-gift.service';
import { GiftValueService } from '../../../services/gift-value.service';
import { PaisService } from '../../../services/pais.service';
import { DocTypeService } from '../../../services/doc-type.service';
import { NotificationService } from '../../../services/notification.service';
import { IGiftData } from '../../../models/Igift-data';
import { SendGift } from '../../../models/send-gift';
import { EndpointAndDataService } from '../../../services/in-memory/endpoint-and-data.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit, AfterViewInit {
  public sendForm: FormGroup = this.fb.group({
    $key: null,
    senderFirstname: ['', [Validators.required, Validators.minLength(3)]],
    senderLastname: ['', [Validators.required, Validators.minLength(3)]],
    senderDocType: '',
    senderId: [{ value: 'N/A', disabled: true }],
    senderTel: '',
    senderEmail: '',
    receiverFirstname: ['', [Validators.required, Validators.minLength(3)]],
    receiverLastname: ['', [Validators.required, Validators.minLength(3)]],
    receiverCountry: ['', [Validators.required]],
    receiverTel: ['', [Validators.required, Validators.minLength(3)]],
    giftValue: ['', [Validators.required]],
    giftDesc: ''
  });

  doctypes: any;
  countries: any;
  giftvalues: any;

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private endpointAndDataService: EndpointAndDataService
  ) {}

  ngAfterViewInit(): void {
    const doctypes$ = this.endpointAndDataService.getDoctypes();
    const countries$ = this.endpointAndDataService.getCountries();
    const giftvalues$ = this.endpointAndDataService.getGifValues();

    forkJoin([doctypes$, countries$, giftvalues$]).subscribe(
      ([doctypes, countries, giftvalues]) => {
        this.doctypes = doctypes;
        this.countries = countries;
        this.giftvalues = giftvalues;
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('complete');
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    const senderDocTypeControl = this.sendForm.get('senderDocType');
    const senderIdControl = this.sendForm.get('senderId');

    // To check if a Doctype is Selected
    senderDocTypeControl.valueChanges.subscribe(val => {
      if (!val) {
        console.log('nada');
        // senderIdControl.clearValidators();
        senderIdControl.setValue('N/A');
        senderIdControl.disable();
      } else {
        console.log('yes');
        senderIdControl.enable();
        senderIdControl.setValue(null);
        senderIdControl.setValidators(Validators.required);
      }

      senderIdControl.updateValueAndValidity();
    });
  }

  tst(): void {
    this.endpointAndDataService.getAll();
  }

  save(): void {
    console.log();
  }
}
