import { Component, OnInit, Input} from '@angular/core';
import { Candidate } from '../model/candidate';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  @Input() candidate: Candidate;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
