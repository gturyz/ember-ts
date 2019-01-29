import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Note = EmberObject.extend({
  content: 'Entrez votre texte',
  MAX: 100,
  info: '',
  size: computed('content', 'MAX', function () {
    this.set('info', null);
    return this.get('content').length;
  })
});

export default Route.extend({
  model() {
    return Note.create();
  }
});
