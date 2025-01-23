// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdSvgIcon(props: AdSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".1"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2zm5.75 8.25V15a.25.25 0 10.5 0v-4a2.25 2.25 0 00-4.5 0v4a.25.25 0 10.5 0v-1.75h3.5zM17.25 9a.25.25 0 10-.5 0v2.75H15.5c-.568 0-1.012.215-1.312.553a1.803 1.803 0 00-.438 1.197c0 .428.143.865.438 1.197.3.338.744.553 1.312.553H17a.25.25 0 00.25-.25V9z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 15v-4a2 2 0 012-2v0a2 2 0 012 2v4m6-6v6m0-3h-1.5c-2 0-2 3 0 3H17M7 13h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AdSvgIcon;
/* prettier-ignore-end */
