import Ember from 'ember';
import Board from 'minesweeper/models/board';
import Tile from 'minesweeper/models/tile';

export default Ember.Route.extend({




  model: function() {

     this.store.unloadAll('tile');
    var theBoard = this.store.createRecord('board');
    var theTiles = theBoard.tiles;
    var theBombs = theBoard.bombs;


    for(var i=0;i <= 9; i++){
         for(var n=0;n<= 9; n++){

                 var tile = this.store.createRecord('tile',{

                                        x:i,
                                        y:n}
                                        );
           theTiles.addObject(tile);

             }

    }

    return  theBoard;



  }
  
  




});
