import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Customer } from '@app/shared/models/customer.model';
import { BlancoService } from '@app/shared/services/blanco/blanco.service';
import { MatSnackBar } from '@angular/material';

const MESSAGE_DURATION = 2e3;

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.scss']
})
export class SurveyPageComponent {

  currentPath = '.';

  customer = new Customer();

  manager: any = {
    name: 'Jan de Vries',
    title: 'Assetmanager',
    desc: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Quem num gosta di mé, boa gentis num é. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Cevadis im ampola pa arma uma pindureta.'
  };

  title = 'Scan complete!';

  subtitle = 'Please review your information below.';

  steps = [
    { title: 'ID details', path: '.', valid: true },
    { title: 'Second nationality', path: 'second-nationality', valid: false },
    { title: 'Address details', path: 'address', valid: true },
    { title: 'Aditional details', path: 'aditional-details', valid: false },
    { title: 'Qualification and interest', path: 'qualification-interest', valid: false },
  ];

  constructor(
    private blancoService: BlancoService,
    private snackbar: MatSnackBar,
    private router: Router,
    protected route: ActivatedRoute
  ) {

    this.subscribeToActiveRoute();

    console.log('component restarted');

  }

  finish() {
    this.blancoService.upsertCustomer(this.customer)
      .subscribe(res => {
        console.log('RESPONSE', res);

        this.snackbar.open('Your data was saved!', 'X', {
          panelClass: 'blanco-primary-bg',
          duration: MESSAGE_DURATION,
        });

        setTimeout(() => {
          this.router.navigate(['/']);
        }, MESSAGE_DURATION + 500);
      });
  }

  goPreviousStep() {
    this.goTostep(-1);
  }

  goNextStep() {
    this.goTostep(1);
  }

  get person() {
    return this.customer.parties[0].naturalPerson;
  }

  private goTostep(offset) {
    const currentStep = this.steps.find(step => step.path === this.currentPath);
    const currentStepIndex = this.steps.indexOf(currentStep);
    const nextPage = currentStepIndex >= 0 ? currentStepIndex + offset : 0;
    if (nextPage > -1 && nextPage < this.steps.length) {
      const nextStepPath = this.steps[nextPage] ? this.steps[nextPage].path : '';
      this.router.navigate(['/survey', nextStepPath]);
    } else {
      this.router.navigate(['/survey']);
    }
  }

  private getCurrentStepFroRoute() {
    try {
      const child: any = this.route.snapshot.url[0].path;
      this.currentPath = child;
    } catch (error) {
      this.currentPath = '.';
    }
  }

  private subscribeToActiveRoute() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.getCurrentStepFroRoute();
    });
  }


}
