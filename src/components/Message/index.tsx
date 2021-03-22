import React from "react";
import { StyledNotice, StyledWarning } from "./styles";

export enum MessageType {
  Notice = "notice",
  Warning = "warning",
}

interface Props {
  children: React.ReactNode;
  type?: MessageType;
}

const Message: React.FC<Props> = ({ children, type = "notice" }) => {
  if (type === MessageType.Notice)
    return <StyledNotice>{children}</StyledNotice>;
  return <StyledWarning>{children}</StyledWarning>;
};

export default Message;
