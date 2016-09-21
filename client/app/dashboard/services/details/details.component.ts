import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'yeah-services-details',
    templateUrl: 'details.component.html'
})
export class ServicesDetailsComponent {
    @Input() packageId: packageId;
    
    constructor() { }
}