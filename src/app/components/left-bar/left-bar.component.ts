import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/services/node.service';


@Component({
    selector: 'app-left-bar',
    templateUrl: './left-bar.component.html',
    styleUrls: ['./left-bar.component.css']

})

export class LeftBar implements OnInit {
    firstPanelActive = true;
    secondPanelAction = true;
    isAddSkillFormVisible = false;
    nodesInSkillTree;
    constructor(
        private nodeService: NodeService
    ) {
        this.getNodes();
    }

    ngOnInit() {
        
    }

    private getNodes() {
        this.nodeService.getNodes().subscribe(res => {
            this.nodesInSkillTree = res;
        });
    }

    public switchAddSkill() {
        this.isAddSkillFormVisible = true;
    }

    public closeDrawer() {
        this.isAddSkillFormVisible = false;
    }
}