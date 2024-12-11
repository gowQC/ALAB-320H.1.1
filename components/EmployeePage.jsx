import Header from "./Header";

function EmployeePage() {
  return (
    <div className="employeePage">
      <Header headerTitle="Employee" />
      <div className="employeeMainDisplay">
        <div id="first">
          <img
            style={{
              width: "20%",
              borderRadius: "25px",
              float: "left",
              marginLeft: "20px",
            }}
            src="https://www.themarysue.com/wp-content/uploads/2023/07/bobbybobby.jpg?w=1200&resize=900%2C525"
          />
          <div className="infoContainer">
            <div>Bobby Kotick</div>
            <div>CEO</div>
          </div>
        </div>
        <div>
          <div>Call Office</div>
          <div>718-000-0000</div>
        </div>
        <div>
          <div>Call Mobile</div>
          <div>347-000-0000</div>
        </div>
        <div>
          <div>SMS</div>
          <div>617-000-0000</div>
        </div>
        <div>
          <div>Email</div>
          <div>thedevil@fakeemail.com</div>
        </div>
      </div>
    </div>
  );
}

export default EmployeePage;
