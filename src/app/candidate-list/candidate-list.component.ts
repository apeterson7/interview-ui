import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../service/candidate-service.service';
import { Candidate } from '../model/candidate';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  constructor(private candidateService: CandidateService) { }

  candidates: Candidate[];

  ngOnInit() {
    this.candidateService.findAll().subscribe(data =>{
      this.candidates = data;
    })
  }
}
