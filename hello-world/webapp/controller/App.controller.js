sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";
  return Controller.extend("ui5.quickstart.App", {
    sayHello: () => {
      alert("Hello");
    },
  });
});