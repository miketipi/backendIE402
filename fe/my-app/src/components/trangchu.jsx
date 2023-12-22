import React, { useState } from "react";
const TrangChu = (props, userr) => {
    console.log(userr.username);
return(<div>{props.userr.username}</div>);
}
export default TrangChu;
