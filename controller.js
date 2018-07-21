

matcherModel = {
  init: function(size) {},
};


matcherView = {
  init: function() {},
  updateGameView: function() {},
  addClickHandlers: function( fn, context ) {},
};

matcherController = {
  
  model: matcherModel,
  view: matcherView,

  init: function(size) {
    this.model.init(size);
    this.view.init();
    this.view.addClickHandlers( this.selectCard, this );
  },

  selectCard: function( id ){}

};
