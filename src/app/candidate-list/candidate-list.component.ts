import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../service/candidate-service.service';
import { Candidate } from '../model/candidate';
import { CandidateDetailComponent} from '../candidate-detail/candidate-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  constructor(private candidateService: CandidateService, private modalService: NgbModal) { }

  page = 1;
  pageSize = 3;

  candidates: Candidate[];
  selectedCandidate: Candidate;

  ngOnInit() {
    this.candidateService.findAll().subscribe(data =>{
      this.candidates = data;
    })
  }

  onSelect(candidate: Candidate): void {
    this.selectedCandidate = candidate;
  }

  open(candidate:Candidate) {
    const modalRef = this.modalService.open(CandidateDetailComponent, { size: 'lg' });
    modalRef.componentInstance.candidate = candidate;
  }

  
}
