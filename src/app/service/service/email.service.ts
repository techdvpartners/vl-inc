import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url = 'https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer *******************************'
    })
  };

  constructor(private http: HttpClient) { }

  sendEmail(formData) {
    const body = {
      "personalizations": [{
        "to": [{
          "email": formData.email
        }]
      }],
      "from": {
        "email": "info@dv-partners.com"
      },
      "subject": "Thanks for contacting!",
      "content": [{
        "type": "text/plain",
        "value": `Hi ${formData.name},
                  \n Thanks for contacting DV Partners.\n We will get back to you soon.
                  \nDV Partners`
      }]
    };
    return this.http.post(this.url, body, this.httpOptions);
  }

  sendAdminEmail(formData) {
    const body = {
      "personalizations": [{
        "to": [{
          "email": "tech.dvpartners@gmail.com"
        },{
          "email": "info@dv-partners.com"
        }]
      }],
      "from": {
        "email": "info@dv-partners.com"
      },
      "subject": `User Contacted on DV Partners - ${formData.name}`,
      "content": [{
        "type": "text/plain",
        "value": `Hi Admin,
                  \n User contacted for DV Partners.\n Users Email - ${formData.email}\n Users Message - ${formData.message}
                  \nDV Partners`
      }]
    };
    const url = 'https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send';
    return this.http.post(this.url, body, this.httpOptions)
  }
}
