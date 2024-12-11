import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
  return (
    <div className="employeeList">
      <EmployeeListItem
        source="https://images.unsplash.com/photo-1577864663715-47341a4f300b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        empName="Robert Mapplethorpe"
        empTitle="Janitor"
      />
      <EmployeeListItem
        source="https://www.themarysue.com/wp-content/uploads/2023/07/bobbybobby.jpg?w=1200&resize=900%2C525"
        empName="Bobby Kottick"
        empTitle="CEO"
      />
      <EmployeeListItem
        source="https://plus.unsplash.com/premium_photo-1672691612619-29301d9aafac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        empName="Kelly Harkman"
        empTitle="Marketing Specialist"
      />
      <EmployeeListItem
        source="https://imgix.ranker.com/list_img_v2/2752/102752/original/danny-devito-movies-and-films-and-filmography-u2?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355"
        empName="Danny DeVito"
        empTitle="Money Enthusiast"
      />
      <EmployeeListItem
        source="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/12/minecraft-skin-jonesy-fortnite.jpg"
        empName="Jonesy"
        empTitle="Victory Royale Acquirer"
      />
      <EmployeeListItem
        source="https://www.looper.com/img/gallery/the-reason-wilson-from-home-improvement-never-showed-his-face/intro-1695160691.jpg"
        empName="The Fence Guy in that show Home Improvement"
        empTitle="Owns a Fence"
      />
    </div>
  );
}

export default EmployeeList;
