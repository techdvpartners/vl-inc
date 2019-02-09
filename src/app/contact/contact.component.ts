import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailObject: { name: string, email: string, message: string } = {
    'name': '',
    'email': '',
    'message': ''
  };
  isShow = false;
  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.valid) {
      this.emailService.sendEmail(this.emailObject).subscribe(res => {
        this.isShow = true;
        this.emailService.sendAdminEmail(this.emailObject).subscribe();
        form.resetForm();
      })
    }
  }
}
