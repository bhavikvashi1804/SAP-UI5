sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";
  return Controller.extend("ui5.demo.Main", {
    sayHello: () => {
      alert("Hello");
    },
  });
});
