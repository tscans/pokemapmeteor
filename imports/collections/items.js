import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Items = new Mongo.Collection('items');

Meteor.publish('items', () => {
  return Items.find({});
});