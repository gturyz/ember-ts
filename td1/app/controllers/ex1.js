import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save (note) {
      note.set('info','Note sauvegardée !');
    },
    clear (note) {
      note.set('info','');
      note.set('content','');
    }
  }
});
