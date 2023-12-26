import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../Login/login";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
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
  const a = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log("isloggin:", a);
  const submit = async () => {
    try {
      const newRepair: Repair = {
        Date: new Date(),
        Content: content,
        Cause: cause,
        IDAccount: "??",
        IDBodyPolygon: "??",
      };
      const response = await axios.post<{ url: string; data: Repair }>(
        "http://localhost:4000/userControl/login",
        newRepair
      );
    } catch (error: any) {
      console.error(error);
      throw error;
    }
  };
  return (
    <div className="hero">
      <h3>Nhập thông tin bạn muốn phản ánh tại đây</h3>
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
