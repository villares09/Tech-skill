import React, { useContext } from "react";
import styles from "./Typography.module.scss";
import classNames from "classnames";
import styled from "styled-components";
// import variables from 'variables.module.scss';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography as styledTypography,
  TypographyProps as styledTypographyProps,
} from "styled-system";
import { ThemeContext } from "styled-components";

interface TypographyProps {
  children: React.ReactNode;
  variant?:
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit"
  | "overline"
  | "subtitle1"
  | "subtitle2"
  | string;
  component?: string;
  align?: "center" | "inherit" | "justify" | "left" | "right";
  color?: string;
  className?: string;
  id?: string;
}

type Props = TypographyProps & SpaceProps & ColorProps & styledTypographyProps;

const CustomTag = styled.div<TypographyProps>`
  ${color};
  ${space};
  ${styledTypography}
  color: ${(props) =>
    props.color ? props.color : props.theme.colors[`${props.colorDefault}`]};
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.fontSizeDefault};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : props.fontWeightDefault};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : props.letterSpacingDefault};
  line-height: ${(props) =>
    props.lineHeight ? props.lineHeight : props.lineHeightDefault};
  text-align: ${({ align }) => align};
  ${({ margin }) => (margin ? `margin: ${margin};` : "margin:0;")}
  ${({ mt }) => (mt ? `margin-top: ${mt}px;` : "")}
    ${({ mr }) => (mr ? `margin-right: ${mr}px;` : "")}
    ${({ mb }) => (mb ? `margin-bottom: ${mb}px;` : "")}
    ${({ ml }) => (ml ? `margin-left: ${ml}px;` : "")};
`;
/* text-align: ${align}; */
// line-height: ${(props) =>
//   props.lineHeight ? props.lineHeight : typography[variant].lineHeight};
const Typography: React.FC<Props> = ({
  id,
  children,
  variant = "body1",
  align = "inherit",
  component,
  className,
  ...props
}) => {
  const { typography } = useContext<any>(ThemeContext);

  return (
    <CustomTag
      id={id}
      as={component ? component : typography[variant]?.tag}
      colorDefault={typography[variant]?.color}
      fontSizeDefault={typography[variant]?.fontSize}
      fontWeightDefault={typography[variant]?.fontWeight}
      letterSpacingDefault={typography[variant]?.letterSpacing}
      lineHeightDefault={typography[variant]?.lineHeight}
      align={align}
      className={classNames(className)}
      {...props}
    >
      {children}
    </CustomTag>
  );
};

export default Typography;
