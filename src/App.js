import CourseForm from "./components/CourseForm";
import "./App.css";
import CourseList from "./components/CourseList";
function App() {
  return (
    <div className="main-container ">
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>My Course List</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
