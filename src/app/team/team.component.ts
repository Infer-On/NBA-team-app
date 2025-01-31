import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { TeamFormService } from './team-form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nba-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  teamForm: FormGroup;
  teamFormSub: Subscription;
  formInvalid = false;
  players: FormArray;

  constructor(private teamFormService: TeamFormService) { }

  ngOnInit() {
    this.teamFormSub = this.teamFormService.teamForm$
      .subscribe(team => {
        this.teamForm = team;
        this.players = this.teamForm.get('players') as FormArray;
      });
  }

  ngOnDestroy() {
    this.teamFormSub.unsubscribe();
  }

  addPlayer() {
    this.teamFormService.addPlayer();
  }

  deletePlayer(index: number) {
    this.teamFormService.deletePlayer(index);
  }

  saveTeam() {
    console.log('team saved!');
    console.log(this.teamForm.value);
  }
}

