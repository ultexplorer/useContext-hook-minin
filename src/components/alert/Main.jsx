import { useAlert } from "./AlertContext";

const Main = () => {
  const { toggle } = useAlert();

  return (
    <>
      <h1>Context examle from Minin</h1>
      <button onClick={toggle} className={"btn btn-success"}>
        Show Alert
      </button>
    </>
  );
};

export default Main;
