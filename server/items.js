import {Items} from '../imports/collections/items';

Meteor.methods({
  'items.addNew': function(name) {
    return Items.insert({ name });
  }
});
