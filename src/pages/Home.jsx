import AddTask from "../components/AddTask";
import ListTask from "../components/ListTask";

export default function Home() {
  return (
    <div className="main">
      <h1>My todo app</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30607.89651010996!2d2.975709926441964!3d36.74936568582485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb33225490931%3A0xcfc19f0953b60033!2sGOMYCODE%20Algeria!5e0!3m2!1sfr!2sdz!4v1715018481379!5m2!1sfr!2sdz"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <AddTask />
      <ListTask />
    </div>
  );
}
