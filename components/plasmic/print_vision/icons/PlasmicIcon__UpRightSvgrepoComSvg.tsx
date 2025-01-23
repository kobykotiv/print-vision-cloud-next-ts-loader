// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UpRightSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UpRightSvgrepoComSvgIcon(props: UpRightSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      data-name={"Flat Line"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon flat-line"
      )}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M18.36 5.64L5 19"}
      ></path>

      <path
        data-name={"primary"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M9 5h10v9.9"}
      ></path>
    </svg>
  );
}

export default UpRightSvgrepoComSvgIcon;
/* prettier-ignore-end */
