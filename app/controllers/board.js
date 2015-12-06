import Ember from 'ember';

export default Ember.Controller.extend({

board: Ember.computed.alias('model'),
tiles: Ember.computed.alias('board.tiles'),


  getTileBomb: function(x,y){


    var bomb = false;
    try{
      if(y < 1 ){
      bomb = this.get('tiles.'+x+'.hasBomb');
      }
      else{
        bomb = this.get('tiles.'+y+''+x+'.hasBomb');
      }

    }catch(err){
       bomb =false;
    }
    return bomb;
  },


  getTile: function(x,y){


    var til = null;
    try{
      if( y=== 0){
      til = this.get('tiles.'+x);
      }
      else{
        til = this.get('tiles.'+y+''+x);
      }

    }catch(err){
       til =null;
    }
    return til;
  },


  getNeighborhood: function(til){

    var neighborhood = [];

    var x = til.get('x');
    var y = til.get('y');

    var left =(10*(y)) +(x-1);

    var upLeft=(10*(y-1)) +(x-1);
    var up=(10*(y-1)) +(x);
    var upRight=(10*(y-1)) +(x+1);

    var right=(10*(y)) +(x+1);

    var downRight=(10*(y+1))+(x+1);
    var down=(10*(y+1))+(x);
    var downLeft=(10*(y+1)) +(x-1);


      Ember.Logger.log('log value of x & y:', x,y );

        Ember.Logger.log('left',left,' upleft',upLeft,'up',up,'upRight',upRight,'right',right,'downRight',downRight,'down',down,'downLeft',downLeft);




    if(x===0){

      if(y===0){

       neighborhood = [


                       this.get('tiles.'+right),// right

                       this.get('tiles.'+downRight),//down right
                       this.get('tiles.'+down),//down

                      ];




      }
      else if(y === 9){


               neighborhood = [

                       this.get('tiles.'+up),//up
                       this.get('tiles.'+upRight),//up right

                       this.get('tiles.'+right),// right


                      ];

      }
      else{


               neighborhood = [



                       this.get('tiles.'+up),//up
                       this.get('tiles.'+upRight),//up right

                       this.get('tiles.'+right),// right

                       this.get('tiles.'+downRight),//down right
                       this.get('tiles.'+down),//down

                      ];
      }

    }
    else if(x===9){
      if(y === 0){
               neighborhood = [
                       this.get('tiles.'+left),//left
                       this.get('tiles.'+down),//down
                       this.get('tiles.'+downLeft)//down left
                      ];
      }
      else if(y=== 9){


               neighborhood = [
                       this.get('tiles.'+left),//left

                       this.get('tiles.'+upLeft),//up left
                       this.get('tiles.'+up),//up

                      ];

      }
      else{


       neighborhood = [
                       this.get('tiles.'+left),//left

                       this.get('tiles.'+upLeft),//up left
                       this.get('tiles.'+up),//up
                       this.get('tiles.'+down),//down
                       this.get('tiles.'+downLeft)//down left
                      ];
      }

    }
    else if(y===0){


             neighborhood = [this.get('tiles.'+left),//left



                       this.get('tiles.'+right),// right

                       this.get('tiles.'+downRight),//down right
                       this.get('tiles.'+down),//down
                       this.get('tiles.'+downLeft)//down left
                      ];
    }
    else if(y===9){




             neighborhood = [this.get('tiles.'+left),//left

                       this.get('tiles.'+upLeft),//up left
                       this.get('tiles.'+up),//up
                       this.get('tiles.'+upRight),//up right

                       this.get('tiles.'+right),// right

                      ];
    }
    else{




       neighborhood = [
                       this.get('tiles.'+left),//left

                       this.get('tiles.'+upLeft),//up left
                       this.get('tiles.'+up),//up
                       this.get('tiles.'+upRight),//up right

                       this.get('tiles.'+right),// right

                       this.get('tiles.'+downRight),//down right
                       this.get('tiles.'+down),//down
                       this.get('tiles.'+downLeft)//down left
                      ];
    }






    return neighborhood;









  },

  setNum: function(){


    for(var x=0; x <= 9;x++){
      for(var y=0; y<=9;y++){
        var amount =0;

        var ul = this.getTileBomb(x-1,y-1);


        var u = this.getTileBomb(x,y-1);
        var ur = this.getTileBomb(x+1,y-1);

        var l = this.getTileBomb(x-1,y);
        var r = this.getTileBomb(x+1,y);

        var dl= this.getTileBomb(x-1,y+1);
        var d = this.getTileBomb(x,y+1);
        var dr= this.getTileBomb(x+1,y+1);


        if(ul){
          amount++;
        }
       if(u){
          amount++;
        }
        if(ur){
          amount++;
        }
        if(l){
          amount++;
        }
        if(r){
          amount++;
        }
        if(dl){
          amount++;
        }
        if(d){
          amount++;
        }
        if(dr){
          amount++;
        }



        if(y<1){
          this.set('tiles.'+x+'.numberOfbombs',amount);
        }
        else{
          this.set('tiles.'+y+''+x+'.numberOfbombs',amount);
        }


      }



    }
  },

  clear: function(tile){

if(tile != null && tile.get('hasBomb')=== false && tile.get('clear') === false  ){
    this.incrementProperty('board.bTime');
      tile.set('time',this.get('board.bTime'));
  tile.set('clear',true);
  this.decrementProperty('board.notBombs');

    if(tile.get('numberOfbombs')=== 0 ){

      var x = tile.get('x');
      var y = tile.get('y');
      this.clear(this.getTile(x,y-1));
      this.clear(this.getTile(x+1,y));
      this.clear(this.getTile(x-1,y));
      this.clear(this.getTile(x,y+1));

       


}
  else{

    
  }






    }
    if(this.get('board.notBombs')<=0){
      this.set('board.lost',true);
    }





  },



  actions:{

    restart:function(){

   window.location.reload(true);




    },

    pressed: function(tile){


    //alert(tile.get('x'));

        if(this.get('board.firstMove')){

          this.set('board.firstMove',false);


          for(var n= this.get('board.bombs');n>0; n--){

            var j = Math.floor(Math.random()*99);//make 99 board size -1

            var t = this.get('tiles.'+j);

            if(t.get('x')===tile.get('x') && t.get('y')===tile.get('y'))
              {
                  n++;
              }
            else{


              t.set('hasBomb',true);
              var neighbor = this.getNeighborhood(t);

               Ember.Logger.log('n L:', neighbor.lenght );




                              Ember.Logger.log('j:',j);


              var i = 0;
              while(typeof neighbor[i] !== 'undefined')// neighbor.length is undefined
              {
                 Ember.Logger.log('n L:', neighbor[i].get('x') );

                neighbor[i].incrementProperty('numberOfbombs');


                i++;

              }

                Ember.Logger.log('n:', i);


            }


          }


        }

      if(tile.get('hasBomb') === true){

        this.set('board.lost',true);

      }
      else{
         this.clear(tile);
      }






    },















  }











});
