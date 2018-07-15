import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.scss']
})
export class SurveyPageComponent {

  currentPath = '.';

  customer: any = {
    name: 'Lucas Simons'
  };

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
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.subscribeToActiveRute();

  }

  finish() {
    this.router.navigate(['/']);
  }

  goPreviousStep() {
    this.goTostep(-1);
  }

  goNextStep() {
    this.goTostep(1);
  }

  private goTostep(offset) {
    const currentStep = this.steps.find(step => step.path === this.currentPath);
    const currentStepIndex = this.steps.indexOf(currentStep);
    const nextPage = currentStepIndex >= 0 ? currentStepIndex + offset : 0;
    if (nextPage > -1 && nextPage < this.steps.length) {
      const nextStepPath = this.steps[nextPage] ? this.steps[nextPage].path : '';
      this.router.navigate([nextStepPath], { relativeTo: this.route });
    } else {
      this.router.navigate(['.']);
    }
  }

  private getCurrentStepFroRoute() {
    try {
      const child: any = this.route.firstChild.snapshot.url[0].path;
      this.currentPath = child;
    } catch (error) {
      this.currentPath = '.';
    }
  }

  private subscribeToActiveRute() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.getCurrentStepFroRoute();
    });
  }


}
