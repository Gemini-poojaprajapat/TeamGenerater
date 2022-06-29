import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APP';
  newmembername:string='';
  AddMembers:string[]=[];
  errormessage = '';
  numberOfTeams:number | '' = '';
  teams:string[][] = [];
  Add(member:string){
    this.newmembername = member;
  }
  AddMember(){
    if(!this.newmembername){
      this.errormessage = "**Something Went Wrong.................";
      return
    }
    this.AddMembers.push(this.newmembername);
    this.newmembername = '';
  }
  addTeam(value:string){
    this.numberOfTeams = Number(value);
  }
  generateteam(){
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errormessage = "**Invalid.................";
      return
    }
    if(this.AddMembers.length < this.numberOfTeams){
      this.errormessage = "**NOT ENOUGH.................";
      return
    }
    this.errormessage = '';
    const allmember = [...this.AddMembers]
    while(allmember.length){
      for(let i = 0 ; i < this.numberOfTeams ; i++){
        const randomIndex = Math.floor(Math.random()* allmember.length)
        const member = allmember.splice(randomIndex, 1)[0];
        if(!member)break;
        if(this.teams[i]){
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member]
        }
      }
    }
    this.AddMembers = [];
    this.numberOfTeams = '';
  }
}
