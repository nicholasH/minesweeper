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

    if(tile.get('numberOfbombs')=== 0 ){



      var x = tile.get('x');
      var y = tile.get('y');


      Ember.Logger.log('log value ul:', x,y);
      this.clear(this.getTile(x-1,y-1));

       Ember.Logger.log('log value u:', x,y);



      this.clear(this.getTile(x,y-1));

        Ember.Logger.log('log value ur:', x,y);
      this.clear(this.getTile(x+1,y-1));
       Ember.Logger.log('log value r:', x,y);
      this.clear(this.getTile(x+1,y));
        Ember.Logger.log('log value l:', x,y);

      this.clear(this.getTile(x-1,y));

        Ember.Logger.log('log value ld', x,y);

      this.clear(this.getTile(x-1,y+1));
        Ember.Logger.log('log value d:', x,y);
      this.clear(this.getTile(x,y+1));
        Ember.Logger.log('log value dr:', x,y);
      this.clear(this.getTile(x+1,y+1));

}
  else{

    this.decrementProperty('board.notBombs');
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

            var j = Math.floor(Math.random()*99);

            var t = this.get('tiles.'+j);

            if(t.get('x')===tile.get('x') && t.get('y')===tile.get('y'))
              {
                  n++;
              }
            else{

              t.set('hasBomb',true);


            }


          }
           this.setNum();

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
