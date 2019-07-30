import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../data/position.service';
import { Position } from '../data/position';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  paramSubscription: any;
  positionSubscription: any;
  savePositionSubscription: any;
  position: Position;
  successMessage: boolean = false;
  failMessage:boolean = false;

  constructor(private activateRouter:ActivatedRoute, private ps: PositionService) { }

  ngOnInit() {
    this.paramSubscription = this.activateRouter.params.subscribe((params)=>{
      this.positionSubscription = this.ps.getPosition(params['_id']).subscribe((p)=>{
        this.position = p[0];
      });
    });
  }

  onSubmit(){
    this.savePositionSubscription = this.ps.savePosition(this.position).subscribe(
      ()=>{
        this.successMessage = true;

        setTimeout(()=>{
          this.successMessage = false;
        }, 2500);
      }, ()=>{
        this.failMessage = true;

        setTimeout(()=>{
          this.failMessage = false;
        }, 2500);
      }
    )
  }

  ngOnDestroy(){
    if(this.paramSubscription){
      this.paramSubscription.unsubscribe();
    }

    if(this.savePositionSubscription){
      this.savePositionSubscription.unsubscribe();
    }

    if(this.positionSubscription){
      this.positionSubscription.unsubscribe();
    }
  }
}
