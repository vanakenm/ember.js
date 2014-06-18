import { content, element, subexpr, lookupHelper } from "bound-templates/runtime";
import LazyValue from "bound-templates/lazy-value";
import streamFor from "ember-htmlbars/hooks/streamFor";
import viewHelper from "ember-htmlbars/helpers/view";

export var defaultEnv = {
  hooks: {
    content: content,
    element: element,
    subexpr: subexpr,
    lookupHelper: lookupHelper,

    streamFor: streamFor
  },

  helpers: {
    view: viewHelper
  }
};