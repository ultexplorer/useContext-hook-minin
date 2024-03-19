import Main from "./components/alert/Main";
import AlertProvider from "./components/alert/AlertContext";
import Alert from "./components/alert/Alert";

const ExampleAlert = () => {
  return (
    <div className={"container pt-3"}>
      <AlertProvider>
        <Alert />
        <Main />
      </AlertProvider>
    </div>
  );
};

export default ExampleAlert;
