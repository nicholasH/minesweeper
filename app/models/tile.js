import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({


  hasBomb: DS.attr('boolean',{defaultValue: false}),
  x: DS.attr('number'),
  y: DS.attr('number'),
  
  time: DS.attr('number',0),
  numberOfbombs: DS.attr('number'),
  clear: DS.attr('boolean',{defaultValue: false}),





  isOne: Ember.computed("x",function(){
    if(this.get("x") === 1){
      return true;

    }
    else{
      return false;
    }


  }),



});
