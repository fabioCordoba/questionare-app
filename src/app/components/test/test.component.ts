import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public question: string;
  public answers: any;
  public answerCorrect: boolean;
  public answerChossed: boolean;


  constructor() {
    this.question = "¿Cual es la capital de Colombia?";
    this.answers = [
      {
        'answer': 'Cordoba',
        'correct': false
      },
      {
        'answer': 'Bogota',
        'correct': true
      },
      {
        'answer': 'Cali',
        'correct': false
      },
      {
        'answer': 'Barranquilla',
        'correct': false
      }
    ];
    this.answerCorrect = false;
    this.answerChossed = false;

  }

  ngOnInit() {
  }

  checkAnswerIndex(index: any){
    this.answerCorrect = this.answers[index].correct;
    this.answerChossed  = true;
  }

  checkAnswerObj(obj: any){
    this.answerCorrect = obj.correct;
    this.answerChossed = true;
  }

  checkAnswerQuestion(){

    if(!this.question){
      return false;
    }

    if(!this.answers || !Array.isArray(this.answers)){
      return false;
    }else{
      if (!(this.answers.length >= 2 && this.answers.length <= 4)) {
        return false;
      }

      /*const correctAnswers = this.answers.filter(function(answer){
        return answer.correct;
      });*/

      const correctAnswers = this.answers.filter(answer => answer.correct);
      if (correctAnswers.length != 1) {
        return false;
      }

    }
    return true;

  }

}
