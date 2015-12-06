import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({



  lost: DS.attr('boolean',{defaultValue: false}),
  bombs:DS.attr('number',{defaultValue: 10}),

  bTime:DS.attr('number',{defaultValue: 0}),

  firstMove: DS.attr('boolean',{defaultValue: true}),

  xSize: DS.attr('number',{defaultValue: 10}),
  ySize: DS.attr('number',{defaultValue: 10}),


  notBombs: DS.attr('number',{defaultValue: function(theBoard){
      return (theBoard.get('xSize') * theBoard.get('ySize'))- theBoard.get('bombs');
  }}),


  winLose: Ember.computed("notBombs",function(){

    if(this.get("notBombs") <= 0){


       return "You win";
       }
       else{
       return "You lost";
       }




  }),


  tiles: [],


 line0: Ember.computed("tiles",function(){
    return [
            this.get("tiles.0"),
            this.get("tiles.1"),
            this.get("tiles.2"),
            this.get("tiles.3"),
            this.get("tiles.4"),
            this.get("tiles.5"),
            this.get("tiles.6"),
            this.get("tiles.7"),
            this.get("tiles.8"),
            this.get("tiles.9"),

    ];
  }),

  line1: Ember.computed("tiles",function(){
    return [this.get("tiles.10"),
            this.get("tiles.11"),
            this.get("tiles.12"),
            this.get("tiles.13"),
            this.get("tiles.14"),
            this.get("tiles.15"),
            this.get("tiles.16"),
            this.get("tiles.17"),
            this.get("tiles.18"),
            this.get("tiles.19")];
  }),

    line2: Ember.computed("tiles",function(){
    return [this.get("tiles.20"),
            this.get("tiles.21"),
            this.get("tiles.22"),
            this.get("tiles.23"),
            this.get("tiles.24"),
            this.get("tiles.25"),
            this.get("tiles.26"),
            this.get("tiles.27"),
            this.get("tiles.28"),
            this.get("tiles.29"),];
  }),

      line3: Ember.computed("tiles",function(){
    return [this.get("tiles.30"),
            this.get("tiles.31"),
            this.get("tiles.32"),
            this.get("tiles.33"),
            this.get("tiles.34"),
            this.get("tiles.35"),
            this.get("tiles.36"),
            this.get("tiles.37"),
            this.get("tiles.38"),
            this.get("tiles.39"),];
  }),

      line4: Ember.computed("tiles",function(){
    return [this.get("tiles.40"),
            this.get("tiles.41"),
            this.get("tiles.42"),
            this.get("tiles.43"),
            this.get("tiles.44"),
            this.get("tiles.45"),
            this.get("tiles.46"),
            this.get("tiles.47"),
            this.get("tiles.48"),
            this.get("tiles.49"),];
  }),

      line5: Ember.computed("tiles",function(){
    return [this.get("tiles.50"),
            this.get("tiles.51"),
            this.get("tiles.52"),
            this.get("tiles.53"),
            this.get("tiles.54"),
            this.get("tiles.55"),
            this.get("tiles.56"),
            this.get("tiles.57"),
            this.get("tiles.58"),
            this.get("tiles.59"),];
  }),
      line6: Ember.computed("tiles",function(){
    return [this.get("tiles.60"),
            this.get("tiles.61"),
            this.get("tiles.62"),
            this.get("tiles.63"),
            this.get("tiles.64"),
            this.get("tiles.65"),
            this.get("tiles.66"),
            this.get("tiles.67"),
            this.get("tiles.68"),
            this.get("tiles.69"),];
  }),
      line7: Ember.computed("tiles",function(){
    return [this.get("tiles.70"),
            this.get("tiles.71"),
            this.get("tiles.72"),
            this.get("tiles.73"),
            this.get("tiles.74"),
            this.get("tiles.75"),
            this.get("tiles.76"),
            this.get("tiles.77"),
            this.get("tiles.78"),
            this.get("tiles.79"),];
  }),
      line8: Ember.computed("tiles",function(){
    return [this.get("tiles.80"),
            this.get("tiles.81"),
            this.get("tiles.82"),
            this.get("tiles.83"),
            this.get("tiles.84"),
            this.get("tiles.85"),
            this.get("tiles.86"),
            this.get("tiles.87"),
            this.get("tiles.88"),
            this.get("tiles.89"),];
  }),
      line9: Ember.computed("tiles",function(){
    return [this.get("tiles.90"),
            this.get("tiles.91"),
            this.get("tiles.92"),
            this.get("tiles.93"),
            this.get("tiles.94"),
            this.get("tiles.95"),
            this.get("tiles.96"),
            this.get("tiles.97"),
            this.get("tiles.98"),
            this.get("tiles.99"),];
  }),















});
