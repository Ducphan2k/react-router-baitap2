import { useParams } from "react-router-dom";
import { employees } from "./Employee";

const EmployeeDetail = () => {
  const { id } = useParams();

  // Tìm thông tin của employee trong danh sách
  const employee = employees.find((emp) => emp.id === parseInt(id));

  return (
    <div>
      {employee ? (
        <div>
          <h2>Employee Detail</h2>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Age: {employee.age}</p>
        </div>
      ) : (
        <p>Employee not found.</p>
      )}
    </div>
  );
};

export default EmployeeDetail;
