export default {
  widgets: {
    "react-module": {
      name: "react-module",
      version: "0.1.0",
      scripts: [
        {
          name: "react",
          vendor: true,
          src: "/assets/react-module/react.bundle.js"
        },
        { name: "react-module", src: "/assets/react-module/module.bundle.js" }
      ]
    }
  },
  version: "0.0.0"
};
