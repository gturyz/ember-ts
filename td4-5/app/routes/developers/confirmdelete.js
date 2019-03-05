import Route from '@ember/routing/route';
import EmberObject, {set} from "@ember/object";

export default Route.extend({
  model(params){
    return this.store.findRecord('developer', params.developer_id);
  },

  actions:{
    cancel(){
      this.transitionTo("developers");
    },
    confirmdelete(dev){
      dev.destroyRecord().then(this.transitionTo("developers"));
    }
  }
});
