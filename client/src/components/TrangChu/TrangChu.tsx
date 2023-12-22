import { memo } from "react";
import type { FC } from "react";
import {useNavigate} from "react-router-dom";
import { Avatars_Size5ShapeRound } from "./Avatars_Size5ShapeRound/Avatars_Size5ShapeRound";
import { ButtonMain_TypePrimarySizeStan } from "./ButtonMain_TypePrimarySizeStan/ButtonMain_TypePrimarySizeStan";
import { CarouselButtons_TypeLeftStateD } from "./CarouselButtons_TypeLeftStateD/CarouselButtons_TypeLeftStateD";
import { CarouselButtons_TypeRightState } from "./CarouselButtons_TypeRightState/CarouselButtons_TypeRightState";
import { Header } from "../Header/Header";
import { FAQItem_OpenFalse } from "./FAQItem_OpenFalse/FAQItem_OpenFalse";
import { Footer } from "../Footer/Footer";
import { Form1FieldButton } from "./Form1FieldButton/Form1FieldButton";
import { Frame10756Icon } from "./Frame10756Icon.js";
import { MenuItem_VerticalFalseMenuType } from "./MenuItem_VerticalFalseMenuType/MenuItem_VerticalFalseMenuType";
import { RegularButton_TypePrimarySizeL2 } from "./RegularButton_TypePrimarySizeL2/RegularButton_TypePrimarySizeL2";
import { RegularButton_TypePrimarySizeL } from "./RegularButton_TypePrimarySizeL/RegularButton_TypePrimarySizeL";
import { StarRating_Rating4Star } from "./StarRating_Rating4Star/StarRating_Rating4Star";
import { StarRating_Rating5Star } from "./StarRating_Rating5Star/StarRating_Rating5Star";
import classes from "./TrangChu.module.css";

//
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//

interface Props {
  className?: string;
  hide?: {
    logoContainer?: boolean;
    form1FieldButton?: boolean;
    iconJamIconsOutlineLogosHome?: boolean;
    badge?: boolean;
    iconJamIconsOutlineLogosChevro?: boolean;
    iconJamIconsOutlineLogosHome2?: boolean;
    badge2?: boolean;
    iconJamIconsOutlineLogosChevro2?: boolean;
    iconJamIconsOutlineLogosHome3?: boolean;
    badge3?: boolean;
    iconJamIconsOutlineLogosChevro3?: boolean;
    iconJamIconsOutlineLogosHome4?: boolean;
    badge4?: boolean;
    iconJamIconsOutlineLogosChevro4?: boolean;
    iconJamIconsOutlineLogosHome5?: boolean;
    badge5?: boolean;
    iconJamIconsOutlineLogosChevro5?: boolean;
    iconJamIconsOutlineLogosHome6?: boolean;
    badge6?: boolean;
    iconJamIconsOutlineLogosChevro6?: boolean;
    iconJamIconsOutlineLogosHome7?: boolean;
    badge7?: boolean;
    iconJamIconsOutlineLogosChevro7?: boolean;
    iconJamIconsOutlineLogosHome8?: boolean;
    badge8?: boolean;
    iconJamIconsOutlineLogosChevro8?: boolean;
    iconJamIconsOutlineLogosHome9?: boolean;
    badge9?: boolean;
    iconJamIconsOutlineLogosChevro9?: boolean;
    iconJamIconsOutlineLogosHome10?: boolean;
    badge10?: boolean;
    iconJamIconsOutlineLogosChevro10?: boolean;
    iconJamIconsOutlineLogosHome11?: boolean;
    badge11?: boolean;
    iconJamIconsOutlineLogosChevro11?: boolean;
    iconJamIconsOutlineLogosHome12?: boolean;
    badge12?: boolean;
    iconJamIconsOutlineLogosChevro12?: boolean;
    iconJamIconsOutlineLogosHome13?: boolean;
    badge13?: boolean;
    iconJamIconsOutlineLogosChevro13?: boolean;
    iconJamIconsOutlineLogosHome14?: boolean;
    badge14?: boolean;
    iconJamIconsOutlineLogosChevro14?: boolean;
    menuItem?: boolean;
    iconJamIconsOutlineLogosHome15?: boolean;
    badge15?: boolean;
    iconJamIconsOutlineLogosChevro15?: boolean;
    iconJamIconsOutlineLogosHome16?: boolean;
    badge16?: boolean;
    iconJamIconsOutlineLogosChevro16?: boolean;
    iconJamIconsOutlineLogosHome17?: boolean;
    badge17?: boolean;
    iconJamIconsOutlineLogosChevro17?: boolean;
    iconJamIconsOutlineLogosHome18?: boolean;
    badge18?: boolean;
    iconJamIconsOutlineLogosChevro18?: boolean;
    iconJamIconsOutlineLogosHome19?: boolean;
    badge19?: boolean;
    iconJamIconsOutlineLogosChevro19?: boolean;
    menuItem2?: boolean;
    menuItem3?: boolean;
    menuItem4?: boolean;
    iconJamIconsOutlineLogosChevro20?: boolean;
    iconJamIconsOutlineLogosPlus?: boolean;
    iconContainer?: boolean;
    forFigma?: boolean;
    iconJamIconsOutlineLogosHome20?: boolean;
    badge20?: boolean;
    iconJamIconsOutlineLogosChevro21?: boolean;
    iconJamIconsOutlineLogosHome21?: boolean;
    badge21?: boolean;
    iconJamIconsOutlineLogosChevro22?: boolean;
    iconJamIconsOutlineLogosHome22?: boolean;
    badge22?: boolean;
    iconJamIconsOutlineLogosChevro23?: boolean;
    iconJamIconsOutlineLogosHome23?: boolean;
    menuItem5?: boolean;
    badge23?: boolean;
    iconJamIconsOutlineLogosChevro24?: boolean;
    menuItem6?: boolean;
    iconJamIconsOutlineLogosHome24?: boolean;
    badge24?: boolean;
    iconJamIconsOutlineLogosPlus2?: boolean;
    iconJamIconsOutlineLogosHome25?: boolean;
    badge25?: boolean;
  };
}
/* @figmaId 2:3432 */
export const TrangChu: FC<Props> = memo(function TrangChu(props = {}) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [user, setUser] = React.useState('');
  const navigate = useNavigate();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    const nav = ()=>{
      navigate("/Login");
    }
  return (
    <div className={`${classes.root}`}>
      <div className={classes.gioiThieuVeLangBac}>Giới thiệu về Lăng Bác</div>
      <div className={classes.reviews}>
        <div className={classes.frame10756}>
          <div className={classes.frame10735}>
            <div className={classes.frame107422}>
              <div className={classes.frame107512}>
                <StarRating_Rating4Star />
                <div className={classes.langBacLaNoiTuyetVoiEToiCungGi}>
                  Lăng bác là nơi tuyệt vời để tôi cùng gia đình học hỏi và hiểu
                  biết hơn về lịch sử Việt Nam
                </div>
              </div>
              <div className={classes.frame107522}>
                <div className={classes.image12}></div>
                <div className={classes.frame107532}>
                  <div className={classes.voTranThienPhuc}>
                    Võ Trần Thiên Phúc
                  </div>
                  <div className={classes.cEOTaiKhamphalangbacCom}>
                    CEO tại khamphalangbac.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame10735}>
            <div className={classes.frame107422}>
              <div className={classes.frame107512}>
                <StarRating_Rating5Star />
                <div className={classes.langBacLaNoiAngEThamQuanKhuong}>
                  Lăng bác là nơi đáng để tham quan, khuông viên xạch sẽ giá cả
                  phải chăng
                </div>
              </div>
              <div className={classes.frame107523}>
                <div className={classes.image12}></div>
                <div className={classes.frame107533}>
                  <div className={classes.nguyenHoaiLinh}>Nguyễn Hoài Linh</div>
                  <div className={classes.danhHai}>Danh hài</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.iconText}>
        <div className={classes.text2}>
          <div className={classes.loremIpsumDolor2}>Lorem ipsum dolor </div>
        </div>
      </div>
      <div>
        <div className={classes.images}>
          <Accordion
            className={classes.AccordionStyle}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              className={classes.AccordionSummaryStyle}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Tôi có thể đến lăng bác bằng cách nào?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nếu đến thăm lăng Bác bằng xe máy, bạn có thể gửi xe ở bên ngoài
                tại đường Ông Ích Khiêm-đối diện bộ Tư lệnh lăng hoặc số 19
                <br></br>
                đường Ngọc Hà – cổng vào bảo tàng Hồ Chí Minh.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.AccordionStyle}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Có khách sạn nào gần Lăng Bác không?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <li>20 Hotel and Apartment, Ba Đình, Hà Nội</li>
                <li>Michi house 3 Lê Hồng Phong, Đối diện Lăng Bác</li>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.AccordionStyle}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Tôi có thể đến Lăng Bác vào cuối tuần không?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bạn hoàn toàn có thể đến Lăng Bác vào cuối tuần<br></br>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.AccordionStyle}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Tôi có thể chụp hình trong Lăng Bác không?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bạn có thể chụp hình xung quanh Lăng Bác nhưng lưu ý rằng khi đi
                vào bên trong Lăng Bác bạn chỉ được tham quan không được quay
                chụp.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* <FAQItem_OpenFalse
            className={classes.fAQItem}
            text={{
              question: (
                <div className={classes.question}>
                  Tôi có thể đến Lăng Bác bằng cách nào?
                  <ul>
                    <li>
                      Nếu đến thăm lăng Bác bằng xe máy, bạn có thể gửi xe ở bên
                      ngoài tại đường Ông Ích Khiêm-đối diện bộ Tư lệnh lăng hoặc
                      số 19 đường Ngọc Hà – cổng vào bảo tàng Hồ Chí Minh
                    </li>
                    <li>
                      {" "}
                      Còn đi bằng xe bus các bạn có thể đi các tuyến 09, 18, 22,
                      33, 45, 50 đến điểm dừng ở 18A Lê Hồng Phong là điểm gần
                      lăng Bác nhất.
                    </li>
                  </ul>
                </div>
              ),
            }}
          />
          <FAQItem_OpenFalse
            className={classes.fAQItem2}
            text={{
              question: (
                <div className={classes.question2}>
                  Có khách sạn nào gần Lăng Bác không?
                  <ul>
                    <li>20 Hotel and Apartment, Ba Đình, Hà Nội</li>
                    <li>Michi house 3 Lê Hồng Phong, Đối diện Lăng Bác</li>
                  </ul>
                </div>
              ),
            }}
          />
          <FAQItem_OpenFalse
            className={classes.fAQItem3}
            text={{
              question: (
                <div className={classes.question3}>
                  Thời gian thăm Lăng Bác là bao nhiêu phút?
                  <ul>
                    <li>Bạn có thể tham quan Lăng Bác từ 7h sáng đến 5h chiều</li>
                  </ul>
                </div>
              ),
            }}
          />
          <FAQItem_OpenFalse
            className={classes.fAQItem4}
            text={{
              question: (
                <div className={classes.question4}>
                  Tôi có thể đến Lăng Bác vào cuối tuần không?
                  <ul>
                    <li>Bạn hoàn toàn có thể đến lăng bác vào cuối tuần</li>
                  </ul>
                </div>
              ),
            }}
          />
          <FAQItem_OpenFalse
            className={classes.fAQItem5}
            text={{
              question: (
                <div className={classes.question5}>
                  Tôi có thể chụp hình trong Lăng Bác không?
                  <ul>
                    <li>
                      Bạn có thể chụp hình xung quang Lăng Bác nhưng lưu ý không
                      được chụp hình bên trong lăng bác
                    </li>
                  </ul>
                </div>
              ),
            }}
          /> */}
      </div>
      <div className={classes.frame101329}>
        <RegularButton_TypePrimarySizeL2
          className={classes.regularButton}
          text={{
            buttonLabel: <div className={classes.buttonLabel}>Thời gian</div>,
          }}
        />
        <RegularButton_TypePrimarySizeL2
          className={classes.regularButton2}
          text={{
            buttonLabel: <a href="https://www.tripadvisor.com.vn/HotelsNear-g293924-d311064-Ho_Chi_Minh_Mausoleum-Hanoi.html" className={classes.buttonLabel}>Khách sạn</a>,
          }}
        />
        <RegularButton_TypePrimarySizeL2
          className={classes.regularButton3}
          text={{
            buttonLabel: <div className={classes.buttonLabel2}>Lịch trình</div>,
          }}
        />
      </div>
      <div className={classes.frequentlyAskedQuestions}>
        Frequently asked questions
      </div>
      <div className={classes.AnhGiaVeLangBac}>Đánh giá về Lăng Bác</div>
      <div className={classes.cacCauHoiThuongGap}>Các câu hỏi thường gặp</div>
      <Footer
        className={classes.footer}
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
      <div className={classes.top}>
        <Form1FieldButton
          text={{
            text: (
              <div className={classes.text}>
                Nhậo email vào để nhận được những cập nhật{" "}
              </div>
            ),
            buttonText: <div className={classes.buttonText}>Subscribe</div>,
          }}
        />
      </div>
      <Header
        className={classes.desktopHorizontalLogoLeftNotLo}
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
          buttonText: <div onClick={nav} className={classes.buttonText2}>Đăng nhập</div>,
        }}
      />
      <div className={classes.image7}></div>
      <div className={classes.whatSSharedHosting}>
        <div className={classes.image9}></div>
        <div className={classes.frame7}>
          <div className={classes.divSharedHosting__right}>
            <div className={classes.linkThmBtn}>
              <div className={classes.div}></div>
              <div className={classes.div2}></div>
              <div className={classes.span}>
                <div className={classes.OcThem}>Đọc thêm</div>
              </div>
            </div>
            <div className={classes.h3SharedHosting__title}>
              <div className={classes.nhungIeuNenBietTruocKhiThamQua}>
                <div className={classes.textBlock}>
                  Những điều nên biết trước khi tham quan
                </div>
                <div className={classes.textBlock2}>
                  Lăng Chủ tịch Hồ Chí Minh{" "}
                </div>
              </div>
              <div className={classes.langChuTichHoChiMinhConCoNhieu}>
                Lăng Chủ tịch Hồ Chí Minh còn có nhiều tên khác là Lăng Bác Hồ,
                Lăng Bác, Lăng Hồ Chủ Tịch. Đây là nơi đặt thi hài Chủ tịch Hồ
                Chí Minh và là nơi để nhân dân cả nước cùng du khách quốc tế đến
                viếng thăm vị lãnh tụ vĩ đại của dân tộc Việt Nam và danh nhân
                văn hóa kiệt xuất của nhân loại.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.screenshot202311292117331}></div>
      <div className={classes.viTriLangBac}>Vị trí Lăng Bác</div>
      <div className={classes.leThuongCoOLangBac1}></div>
      <div className={classes.leHaCoTaiLangBac}>Lễ hạ cờ tại lăng bác</div>
      <div className={classes.viTriLangBac2}>Vị trí lăng Bác</div>
      <MenuItem_VerticalFalseMenuType
        className={classes.menuItem20}
        hide={{
          iconJamIconsOutlineLogosHome: true,
          badge: true,
        }}
        text={{
          menuItem: <div className={classes.menuItem19}>Tiếng Việt</div>,
        }}
      />
      <div className={classes.kHAMPHALANGBAC}>KHÁM PHÁ LĂNG BÁC</div>
      <div className={classes.LichMoCuaLangBacVaoMuaOngTuTha}>
        <div className={classes.textBlock3}>
          -Lịch mở cửa Lăng Bác vào mùa đông (từ tháng 11 đến tầm tháng 3):
        </div>
        <ul className={classes.list}>
          <li>
            <div className={classes.textBlock4}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>
                  Vào thứ 3, thứ 4, thứ 5: Lăng Bác sẽ mở cửa lúc 8 giờ sáng cho
                  đến 11 giờ trưa các ngày, không mở cửa vào buổi chiều, tối.
                </span>
              </p>
            </div>
          </li>
        </ul>
        <div className={classes.textBlock5}>
          Vào thứ 7, chủ nhật: Lăng Bác mở cửa vào lúc 8 giờ sáng đến 11h30
          phút, đóng cửa muộn hơn so với ngày thường khoảng 30 phút và cũng
          không mở cửa vào buổi chiều, tối.
        </div>
        <div className={classes.textBlock6}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label2}>
              Vào thứ 2 và thứ 6 hằng tuần lăng Bác sẽ đóng cửa để thực hiện bảo
              trì cở sở vật chất. Tuy nhiên nếu ngày đó trùng vào các dịp lễ
              19/5, 2/9 và Mùng 1 Tết Nguyên Đán thì Lăng Bác vẫn mở cửa để đón
              khách đến viếng thăm.
            </span>
          </p>
        </div>
      </div>
      <div className={classes.lichMoCuaLangBacGioMoCuaLangBa}>
        <div className={classes.textBlock7}>Lịch mở cửa Lăng Bác</div>
        <div className={classes.textBlock8}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label3}>
              – Giờ mở cửa Lăng Bác vào mùa hè (từ đầu tháng 4 đến tháng 10):
            </span>
          </p>
        </div>
        <ul className={classes.list2}>
          <li>
            <div className={classes.textBlock9}>
              <p className={classes.labelWrapper4}>
                <span className={classes.label4}>
                  Vào mỗi thứ 3, thứ 4, thứ 5: Lăng Bác sẽ mở cửa lúc 7h30 phút
                  sáng cho đến 10h30 phút sáng, không mở cửa vào buổi chiều,
                  buổi tối.
                </span>
              </p>
            </div>
          </li>
          <li>
            <div className={classes.textBlock10}>
              Vào thứ 7, chủ nhật: Lăng Bác sẽ mở cửa lúc 7h30 và đóng cửa muộn
              hơn mọi ngày khoảng 30 phút và cũng không mở cửa vào buổi chiều,
              buổi tối.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
});
