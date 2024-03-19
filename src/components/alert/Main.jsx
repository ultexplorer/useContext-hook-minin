import { useAlert } from "./AlertContext";

const Main = () => {
  const { show } = useAlert();

  return (
    <>
      <h1>Context examle from Minin</h1>
      <button onClick={()=>show('Этот текст из Main.js')} className={"btn btn-success"}>
        Show Alert
      </button>
    </>
  );
};

export default Main;
