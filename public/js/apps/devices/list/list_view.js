App.module("DevicesApp.List", function(List, App, Backbone, Marionette, $, _){
  List.Layout = Marionette.Layout.extend({
    template: "#device-list-layout",

    regions: {
      panelRegion: "#panel-region",
      devicesRegion: "#devices-region"
    }
  });

  List.Panel = Marionette.ItemView.extend({
    template: "#device-list-panel",

    triggers: {
      "click button.js-new": "device:new"
    },

    events: {
      "submit #filter-form": "filterDevices"
    },

    ui: {
      criterion: "input.js-filter-criterion"
    },

    filterDevices: function(e){
      e.preventDefault();
      var criterion = this.$(".js-filter-criterion").val();
      this.trigger("devices:filter", criterion);
    },

    onSetFilterCriterion: function(criterion){
      this.ui.criterion.val(criterion);
    }
  });

  List.Device = Marionette.ItemView.extend({
    tagName: "tr",
    template: "#device-list-item",

    events: {
      "click": "highlightName",
      "click td a.js-show": "showClicked",
      "click td a.js-edit": "editClicked",
      "click button.js-delete": "deleteClicked"
    },

    flash: function(cssClass){
      var $view = this.$el;
      $view.hide().toggleClass(cssClass).fadeIn(800, function(){
        setTimeout(function(){
          $view.toggleClass(cssClass)
        }, 500);
      });
    },

    highlightName: function(e){
      this.$el.toggleClass("warning");
    },

    showClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger("device:show", this.model);
    },

    editClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger("device:edit", this.model);
    },

    deleteClicked: function(e){
      e.stopPropagation();
      this.trigger("device:delete", this.model);
    },

    remove: function(){
      var self = this;
      this.$el.fadeOut(function(){
        Marionette.ItemView.prototype.remove.call(self);
      });
    }
  });

  var NoDevicesView = Marionette.ItemView.extend({
    template: "#device-list-none",
    tagName: "tr",
    className: "alert"
  });

  List.Devices = Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "#device-list",
    emptyView: NoDevicesView,
    itemView: List.Device,
    itemViewContainer: "tbody",

    initialize: function(){
      this.listenTo(this.collection, "reset", function(){
        this.appendHtml = function(collectionView, itemView, index){
          collectionView.$el.append(itemView.el);
        }
      });
    },

    onCompositeCollectionRendered: function(){
      this.appendHtml = function(collectionView, itemView, index){
        collectionView.$el.prepend(itemView.el);
      }
    }
  });
});
