import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PlanService } from './plans.service';
import { Plan } from './plan';

@Component({
    moduleId: module.id,
    selector: 'sp-create',
    templateUrl: 'create.component.html',
    styleUrls: ['plans.style.css'],
    providers: [PlanService]
})
export class CreateComponent implements OnInit {
    constructor(private planService: PlanService) { }

    plan = new Plan(0, 0, '', 3);
    intervalType: string;

    onSubmit(plan: any) {
        plan.intervalType = this.intervalType;
        console.log('plan: ', plan);
        // do service to save the plan
         this.planService.saveSinglePlan(plan)
            .then((res) => { 
                console.log('res from auth: ', res)
            }, (err) => {
                console.log('err res: ', err) 
            })
    }

    intervalSelected(interval: string){
        this.plan.intervalType = interval;
        this.intervalType = interval
    }

    showCurrency(singlePayment: number){
        return `$${(~~(singlePayment*100)/100)}`
    }

    getInstallmentsDate(installments: number) {
        let array = [];
        for(let i = 0 ; i < installments ; i++) {
            array.push('installment');
        }
        return array;
    }
    ngOnInit() { }

}
