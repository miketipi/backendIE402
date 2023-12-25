import { useState } from "react";
import "./style.css";
import axios from "axios";
export type Repair = {
  Date: Date;
  Content: string;
  Cause: string;
  IDAccount: string;
  IDBodyPolygon: string;
};
export default function Repair_report() {
  const [content, setContent] = useState("");
  const [cause, setCause] = useState("");

  const submit = async () => {
    try {
      // const response = await axios.post<{ url: string; data:Repair  }>(
      //   "http://localhost:4000/userControl/login",
      //   { Date(){}, content,cause,'??'   ,'??' }
      // );
    } catch (error: any) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="hero">
      <video autoPlay loop muted plays-inline className="back-video">
        <source src="../../../public/assets/video.mp4" />
      </video>
      <form action="" className="content">
        <div>
          <label htmlFor="content">Content</label>
          <input
            type="text"
            id="content"
            name="content"
            placeholder="Enter your content "
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="cause">Cause</label>
          <input
            type="text"
            id="cause"
            name="cause"
            placeholder="Enter your cause you have encountered"
            onChange={(e) => {
              setCause(e.target.value);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
