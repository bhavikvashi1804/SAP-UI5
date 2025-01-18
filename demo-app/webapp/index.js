sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {
  "use strict";

  XMLView.create({
    viewName: "ui5.demo.view.Main",
  }).then((oView) => {
    oView.placeAt(content);
  });
});