// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 50 50"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        className={"stroke"}
        d={"M25 43.94H14.06l-3.2-5.55-2.57-4.45 2.57-4.46"}
        stroke={"currentColor"}
        strokeWidth={".5"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        className={"stroke"}
        d={
          "M10.86 29.48H5.7L3.13 25l3.64-6.31 1.5-2.59 2.6-4.49 2.57-4.46.62-1.09H25"
        }
        stroke={"currentColor"}
        strokeWidth={".5"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        className={"stroke"}
        d={
          "M25 39.48h-8.36l-3.2-5.54-2.58-4.46L13.47 25H8.28l3.67-6.37 1.49-2.57 2.57-4.45.63-1.09H25"
        }
        stroke={"currentColor"}
        strokeWidth={".5"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        className={"stroke"}
        d={
          "M25 15.01h-5.77L13.47 25l5.76 9.99H25M8.28 25L5.7 29.48m38.6 0L41.72 25M25 43.94h10.94l3.2-5.55 2.57-4.45-2.57-4.46"
        }
        stroke={"currentColor"}
        strokeWidth={".5"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        className={"stroke"}
        d={
          "M39.14 29.48l5.17-.04L46.87 25l-3.64-6.31-1.5-2.59-2.6-4.49-2.57-4.46-.62-1.09H25"
        }
        stroke={"currentColor"}
        strokeWidth={".5"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        className={"stroke"}
        d={
          "M25 39.48h8.36l3.2-5.54 2.58-4.46L36.53 25h5.19l-3.67-6.37-1.49-2.57-2.57-4.45-.63-1.09H25"
        }
        stroke={"currentColor"}
        strokeWidth={".5"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        className={"stroke"}
        d={
          "M25 15.01h5.77L36.53 25l-5.76 9.99H25m-5.77-19.98l-2.59-4.49m14.13 4.49l2.59-4.49"
        }
        stroke={"currentColor"}
        strokeWidth={".5"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
