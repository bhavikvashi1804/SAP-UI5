sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";
    return Controller.extend("ui5.quickstart.App", {
      sayHello: () => {
        MessageToast.show("Hello World");
      },
    });
  }
);
