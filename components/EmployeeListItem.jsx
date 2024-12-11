function EmployeeListItem(props) {
  return (
    <div className="employeeListItem">
      <img src={props.source} />
      <div className="employeeContainer">
        <div className="employeeName">{props.empName}</div>
        <div className="employeeTitle">{props.empTitle}</div>
      </div>
    </div>
  );
}

export default EmployeeListItem;
