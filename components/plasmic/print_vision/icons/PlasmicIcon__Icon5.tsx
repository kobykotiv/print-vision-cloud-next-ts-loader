// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 109 43"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M64.931 11.428a29.542 29.542 0 00-41.778 0l20.89 20.89 20.889-20.89z"
        }
        className={"ccompli1"}
        fill={"#FFD200"}
      ></path>

      <path
        d={
          "M44.069 32.347a29.541 29.541 0 0041.778 0l-20.89-20.889-20.888 20.89z"
        }
        className={"ccompli2"}
        fill={"#06E07F"}
      ></path>

      <path
        d={
          "M44.017 32.343a29.542 29.542 0 01-41.778 0l20.889-20.89 20.889 20.89z"
        }
        className={"ccustom"}
        fill={"#E3073C"}
      ></path>

      <path
        d={
          "M64.983 11.433a29.54 29.54 0 0141.778 0l-20.889 20.89-20.889-20.89z"
        }
        className={"ccustom"}
        fill={"#1F84EF"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
