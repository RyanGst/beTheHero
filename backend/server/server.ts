import App from "./app";

let port = process.env.PORT || '3333';

App.app.listen(port, function () {
  console.log(`server running in" + ${port}`);
});

process.once('SIGINT', () => process.exit(0));
