// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UpArrowSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UpArrowSvgrepoComSvgIcon(props: UpArrowSvgrepoComSvgIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L13 6.414V20a1 1 0 11-2 0V6.414l-5.293 5.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0112 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UpArrowSvgrepoComSvgIcon;
/* prettier-ignore-end */
