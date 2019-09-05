import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CandidateService } from '../service/candidate-service.service';
import { Candidate } from '../model/candidate';
import { Router, ActivatedRoute } from '@angular/router';
import { MatChipInputEvent} from '@angular/material/chips';
import { MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs/Observable';
import { map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates: Candidate[];
  selectedCandidate: Candidate;
  availableTags: string[] = [];
  selectedTags: string[];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  visible = true;
  selectable = true;
  addOnBlur = true;
  removable = true;
  auto = true;

  @ViewChild('tagInput', {static: false}) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;


  constructor(
    private candidateService: CandidateService, 
    private router: Router
    ) 
  {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.availableTags.slice()));
   }

  page = 1;
  pageSize = 5;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  ngOnInit() {
    this.selectedTags = [];
    this.findCandidates();
    this.candidateService.getTags().subscribe(data =>{
      this.availableTags = data;
    });
 
  }

  /**
   * Find candidates within selected tags, or all candidates if no tags selected
   */
  findCandidates(){
    if(this.selectedTags.length == 0){
      this.candidateService.findAll().subscribe(data =>{
        this.candidates = data;
      })
    }else{
      this.candidateService.findAllByTags(this.selectedTags).subscribe(data =>{
        this.candidates = data;
      })
    }
  }


  /**
   * If clicked, method to add tags found in candidate list to SelectedTags
   * @param tag 
   */
  selectTag(tag: string){
    if(!this.selectedTags.includes(tag)){
      this.selectedTags.push(tag.toLowerCase());
      this.findCandidates();
    }
  }

  /**
   * Selects tag from autocomplete dropdown
   * @param event 
   */
  selected(event: MatAutocompleteSelectedEvent): void {
    // this.selectedTags.push(event.option.viewValue);
    this.selectTag(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  /**
   * Remove tag from ui
   * @param tag 
   */
  removeTag(tag: string){
    const index = this.selectedTags.indexOf(tag, 0);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
      this.findCandidates()
    }
  }

  /**
   * Add tag from typing
   * @param event 
   */
  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.selectedTags.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.tagCtrl.setValue(null);
      this.findCandidates()
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.availableTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }

  getResumeUrl(candidate:Candidate): string{
    return "https://s3.us-east-2.amazonaws.com/resume-finra/"+candidate.candidate_id+"/"+candidate.resume;
  }  

  sendInterview(id:number){
    console.log(id);
    this.candidateService.createInterviewForCandidateById(id).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['interviews'])
      }
    );
  }
}
