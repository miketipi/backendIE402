import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useEffect } from "react";
import { UserContext } from "../Login/login";
import { useSelector } from "react-redux";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import classes from "../TrangChu/TrangChu.module.css";
import { RootState } from "../../store";
export type Repair = {
  Date: Date;
  Content: string;
  Cause: string;
  IDAccount: string;
  IDBodyPolygon: string;
};
export type bodyPolygon = {
  _id: string;
  name: string;
};
export type User = {
  userId: string;
  userName: string;
  isLoad: boolean;
  admin: boolean;
};
export default function Repair_report() {
  const user: User = useSelector((state: RootState) => state.user);

  const [content, setContent] = useState("");
  const [cause, setCause] = useState("");
  const [bodyPolygonOptions, setBodyPolygonOptions] = useState<bodyPolygon[]>(
    []
  );
  const [bodyPolygonId, setBodyPolygonId] = useState("");

  const submit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/damagereport/new",
        {
          Date: new Date(),
          Content: content,
          Cause: cause,
          IDAccount: user.userId,
          IDBodyPolygon: bodyPolygonId,
        }
      );

      if (response.status === 200) {
        console.log("Đăng ký thành công!");
        alert("Đăng ký thành công!");
      } else {
        console.error("Đăng ký không thành công!");
      }
    } catch (error: any) {
      console.error(error);
      throw error;
    }
  };
  useEffect(() => {
    // Gọi API để lấy danh sách tên đối tượng từ server
    axios
      .get("http://localhost:4000/bodypolygon/all")
      .then((response) => {
        // Chỉ lấy phần name từ dữ liệu nhận được
        const names = response.data.map((bodyPolygon) => ({
          _id: bodyPolygon._id,
          name: bodyPolygon.name,
        }));
        setBodyPolygonOptions(names);
      })
      .catch((error) => {
        console.error("Error fetching body polygon names", error);
      });
  }, []);

  return (
    <div className="hero">
      <h3>Nhập thông tin bạn muốn phản ánh tại đây</h3>
      <form className="content">
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
        <div>
          <label htmlFor="bodyPolygonId">Đối tượng</label>
          <div className="select_">
            <select
              id="bodyPolygonId"
              name="bodyPolygonId"
              onChange={(e) => setBodyPolygonId(e.target.value)}
            >
              <option value="" disabled hidden>
                Chọn đối tượng
              </option>
              {bodyPolygonOptions.map((bodyPolygon) => (
                <option key={bodyPolygon._id} value={bodyPolygon._id}>
                  {bodyPolygon.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button onClick={() => submit()}>Submit</button>
      </form>
      <Header
        className="desktopHorizontalLogoLeftNotLo"
        hide={{
          menuItem2: true,
        }}
        text={{
          webbyFrames: (
            <div className={classes.webbyFrames}>KHÁM PHÁ LĂNG BÁC</div>
          ),
          menuItem: <div className={classes.menuItem15}>Trang chủ</div>,
          menuItem2: <div className={classes.menuItem16}>Mô hình 3D</div>,
          menuItem3: <div className={classes.menuItem17}>Liên hệ</div>,
          menuItem4: <div className={classes.menuItem18}>Báo cáo sửa chữa</div>,
          buttonText: <div className={classes.buttonText2}>Đăng nhập</div>,
        }}
      />

      <Footer
        className="footer"
        classes={{ menuItem28: classes.menuItem14 }}
        hide={{
          logoContainer: true,
          form1FieldButton: true,
          menuItem4: true,
        }}
        text={{
          menuItem: <div className={classes.menuItem}>ĐỐI TÁC</div>,
          menuItem2: (
            <div className={classes.menuItem2}>Đăng ký nhà cung cấp</div>
          ),
          menuItem3: <div className={classes.menuItem3}>Đối tác đăng nhập</div>,
          menuItem4: <div className={classes.menuItem4}>Đối tác liên kết</div>,
          menuItem5: (
            <div className={classes.menuItem5}>
              Chương trình cho người nổi tiếng
            </div>
          ),
          menuItem6: (
            <div className={classes.menuItem6}>Điều khoản sử dụng</div>
          ),
          menuItem7: (
            <div className={classes.menuItem7}>Điều khoản sử dụng</div>
          ),
          menuItem8: (
            <div className={classes.menuItem8}>Chính sách bảo mật</div>
          ),
          menuItem9: (
            <div className={classes.menuItem9}>Chính sách và quy định</div>
          ),
          menuItem10: <div className={classes.menuItem10}>Phiếu quà tặng </div>,
          menuItem11: <div className={classes.menuItem11}>Về chúng tôi</div>,
          menuItem12: <div className={classes.menuItem12}>Về chúng tôi</div>,
          menuItem13: <div className={classes.menuItem13}>Blog</div>,
          companyName202XAllRightsReserv: (
            <div className={classes.companyName202XAllRightsReserv}>
              UIT @ 2023. All rights reserved.
            </div>
          ),
        }}
      />
    </div>
  );
}
