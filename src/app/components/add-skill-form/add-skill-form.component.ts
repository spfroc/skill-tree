import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NodeService } from 'src/app/services/node.service';

@Component({
    selector: 'app-add-skill-form',
    templateUrl: './add-skill-form.component.html',
    styleUrls: ['./add-skill-form.component.css'],
})

export class AddSkillForm implements OnInit {
    validateForm: FormGroup;
    @Input() isAddSkillFormVisible;
    isCreate = true;
    lablelSpan = 8;
    defaultSkillInfo = {
        totalTimeRequired: 1,
        imgType: 1,
        textColor: '#fff',
        bgColor: '#eee',
    };
    constructor(
        private fb: FormBuilder,
        private nodeService: NodeService
    ) {

    }
    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }

        this.nodeService.add(this.validateForm.value).subscribe(res => {
            console.log(res);
            this.isAddSkillFormVisible = false;
        });
    }
    

    ngOnInit():void {
        this.validateForm = this.fb.group({
            id: [null],
            name: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
            description: [null, [Validators.required, Validators.maxLength(200)]],
            totalTimeRequired: [this.defaultSkillInfo.totalTimeRequired, [Validators.required, Validators.max(999)]],
            // imgType: [this.defaultSkillInfo.imgType, [Validators.required]],
            // textColor: ['#fff', [Validators.required]],
            // bgColor: ['#eee', [Validators.required]],
          });
    }
}