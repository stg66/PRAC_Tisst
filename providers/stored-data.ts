import { Injectable } from '@angular/core';

@Injectable()
export class StoredData {

    groupsSongLessons: any = [];

  constructor() {
    
  }

  loadData(){
    this.groupsSongLessons = [
      {
        name: "Warmups",
        songLesson: [
          { name: "long Tones" },
          { name: "Simple Bendings" },
          { name: "Slurring Scales" },
          { name: "Simple Tounging" }
        ]
      },
      {
        name: "Technical Studies",
        songLesson: [
          { name: "Clarke 2nd Study" },
          { name: "Scales" },
          { name: "Arpeggios" }
        ]
      },
      {
        name: "Melodic Studies",
        songLesson: [
          { name: "Concone Lyrical Study" },
          { name: "Haydn Andante" },
          { name: "Clodomir Duett #9" },
          { name: "Arban Etude de Style #1" }
        ]
      },
      {
        name: "Etudes",
        songLesson: [
          { name: "Kopprasch no #45" },
          { name: "Arban no #35" },
          { name: "Krumpfer no #104" },
          { name: "Laurent no #11" }
        ]
      },
      {
        name: "Songs",
        songLesson: [
          { name: "The Old Spagnoletta" },
          { name: "Carneval of Venice" },
          { name: "Il Debutante" },
          { name: "Fantasia Brilliante" },
          { name: "Bellini Norma" }
        ]
      }
    ];
  }

  addItem(name){

  }

  editItem(indexParent, index){

  }

  deleteItem(indexParent, index){
    
  }
}
