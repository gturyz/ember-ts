import Controller from '@ember/controller';
import { get } from '@ember/object';



export default Controller.extend({

  actions: {

    addToIncluded(model) {

      let dispoItems_ = model.get("dispoItems_");
      let includedItems =  model.get("includedItems");
      let dispoItems = model.get("dispoItems");

      dispoItems_.forEach(function (item) {
        includedItems.pushObject(item);
        dispoItems.removeObject(item);

      })

      dispoItems_.clear();

    },
    addAllToIncluded(model){

      let dispoItems = model.get("dispoItems");
      let includedItems =  model.get("includedItems");

      dispoItems.forEach(function (item) {
        includedItems.pushObject(item);
      })

      dispoItems.clear();
    },
    removeFromIncluded(model){

      let includedItems_ = model.get("includedItems_");
      let includedItems =  model.get("includedItems");
      let dispoItems = model.get("dispoItems");

      includedItems_.forEach(function (item) {
        dispoItems.pushObject(item);
        includedItems.removeObject(item);
      })

      includedItems_.clear();
    },

    removeAllFromIncluded(model){

      let dispoItems = model.get("dispoItems");
      let includedItems =  model.get("includedItems");

      includedItems.forEach(function (item) {
        dispoItems.pushObject(item);
      })

      includedItems.clear();
    },

    dblClickAddToIncluded(id) {

      let includedItems = this.get('model').get("includedItems");
      let dispoItems = this.get('model').get("dispoItems");

      dispoItems.forEach(function (item) {
        if (get(item, 'id') === id) {
          includedItems.pushObject(item);
          dispoItems.removeObject(item);
        }
      })
    },

    dblClickRemoveFromIncluded(id) {

      let includedItems = this.get('model').get("includedItems");
      let dispoItems = this.get('model').get("dispoItems");

      includedItems.forEach(function (item) {
        // console.log(item.id);
        if (get(item, 'id') === id) {
          dispoItems.pushObject(item);
          includedItems.removeObject(item);
        }
      })
    }

  }
});
