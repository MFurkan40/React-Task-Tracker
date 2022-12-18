import TaskPng from "../../assets/TaskPng";

const Header = () => {
  return (
    <div className="header">
      <div className="d-flex justify-content-evenly align items-center flex-wrap">
        <TaskPng className="App-logo me-5 " />
        <h1 className="display-5 mt-3 ">TASK TRACKER</h1>
      </div>
    </div>
  );
};
export default Header;
