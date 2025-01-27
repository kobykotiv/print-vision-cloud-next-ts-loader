// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2Up8DUmBB1Tx5dhznkvCW5
// Component: K6_vXcqOZUX_

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import PageLayout from "../../PageLayout"; // plasmic-import: nHDfdLqBbJ3Q/component
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2Up8DUmBB1Tx5dhznkvCW5/projectcss
import sty from "./PlasmicBackend2.module.css"; // plasmic-import: K6_vXcqOZUX_/css

createPlasmicElementProxy;

export type PlasmicBackend2__VariantMembers = {};
export type PlasmicBackend2__VariantsArgs = {};
type VariantPropType = keyof PlasmicBackend2__VariantsArgs;
export const PlasmicBackend2__VariantProps = new Array<VariantPropType>();

export type PlasmicBackend2__ArgsType = {};
type ArgPropType = keyof PlasmicBackend2__ArgsType;
export const PlasmicBackend2__ArgProps = new Array<ArgPropType>();

export type PlasmicBackend2__OverridesType = {
  root?: Flex__<"div">;
  pageLayout?: Flex__<typeof PageLayout>;
  freeBox?: Flex__<"div">;
  table?: Flex__<typeof RichTable>;
  button?: Flex__<typeof AntdButton>;
  text?: Flex__<"div">;
};

export interface DefaultBackend2Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBackend2__RenderFunc(props: {
  variants: PlasmicBackend2__VariantsArgs;
  args: PlasmicBackend2__ArgsType;
  overrides: PlasmicBackend2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKeys", RichTable_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    keys: usePlasmicDataOp(() => {
      return {
        sourceId: "83X9ZdYzYUYJtgqe5fwXeX",
        opId: "880bdd3b-7792-4fb4-82b9-22209525864e",
        userArgs: {},
        cacheKey: `plasmic.$.880bdd3b-7792-4fb4-82b9-22209525864e.$.`,
        invalidatedKeys: null,
        roleId: "d035f350-edf5-4268-af03-4480b52522b0"
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
                  <div
                    data-plasmic-name={"freeBox"}
                    data-plasmic-override={overrides.freeBox}
                    className={classNames(projectcss.all, sty.freeBox)}
                  >
                    {(() => {
                      const child$Props = {
                        className: classNames("__wab_instance", sty.table),
                        data: (() => {
                          try {
                            return $queries.keys;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })(),
                        onRowSelectionChanged: async (...eventArgs: any) => {
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRowKey",
                            ["table", "selectedRowKey"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRow",
                            ["table", "selectedRow"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRows",
                            ["table", "selectedRows"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRowKeys",
                            ["table", "selectedRowKeys"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                        },
                        scopeClassName: sty["table__instance"],
                        selectedRowKey: generateStateValueProp($state, [
                          "table",
                          "selectedRowKey"
                        ]),
                        selectedRowKeys: generateStateValueProp($state, [
                          "table",
                          "selectedRowKeys"
                        ]),
                        themeResetClassName: classNames(
                          projectcss.root_reset,
                          projectcss.root_reset_tags,
                          projectcss.plasmic_default_styles,
                          projectcss.plasmic_mixins,
                          projectcss.plasmic_tokens,
                          plasmic_antd_5_hostless_css.plasmic_tokens,
                          plasmic_plasmic_rich_components_css.plasmic_tokens
                        )
                      };
                      initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "selectedRowKey",
                            plasmicStateName: "table.selectedRowKey"
                          },
                          {
                            name: "selectedRow",
                            plasmicStateName: "table.selectedRow"
                          },
                          {
                            name: "selectedRows",
                            plasmicStateName: "table.selectedRows"
                          },
                          {
                            name: "selectedRowKeys",
                            plasmicStateName: "table.selectedRowKeys"
                          }
                        ],
                        [],
                        RichTable_Helpers ?? {},
                        child$Props
                      );

                      return (
                        <RichTable
                          data-plasmic-name={"table"}
                          data-plasmic-override={overrides.table}
                          {...child$Props}
                        />
                      );
                    })()}
                  </div>
                  <AntdButton
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    onClick={async () => {
                      const $steps = {};

                      $steps["postgresUpdateMany"] = true
                        ? (() => {
                            const actionArgs = {
                              dataOp: {
                                sourceId: "83X9ZdYzYUYJtgqe5fwXeX",
                                opId: "d9e695ff-86c0-4224-ae5b-78ab3dbe9af9",
                                userArgs: {},
                                cacheKey: null,
                                invalidatedKeys: ["plasmic_refresh_all"],
                                roleId: "d035f350-edf5-4268-af03-4480b52522b0"
                              }
                            };
                            return (async ({ dataOp, continueOnError }) => {
                              try {
                                const response = await executePlasmicDataOp(
                                  dataOp,
                                  {
                                    userAuthToken:
                                      dataSourcesCtx?.userAuthToken,
                                    user: dataSourcesCtx?.user
                                  }
                                );
                                await plasmicInvalidate(dataOp.invalidatedKeys);
                                return response;
                              } catch (e) {
                                if (!continueOnError) {
                                  throw e;
                                }
                                return e;
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["postgresUpdateMany"] != null &&
                        typeof $steps["postgresUpdateMany"] === "object" &&
                        typeof $steps["postgresUpdateMany"].then === "function"
                      ) {
                        $steps["postgresUpdateMany"] = await $steps[
                          "postgresUpdateMany"
                        ];
                      }
                    }}
                  >
                    <div
                      data-plasmic-name={"text"}
                      data-plasmic-override={overrides.text}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text
                      )}
                    >
                      {"Button"}
                    </div>
                  </AntdButton>
                </React.Fragment>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "freeBox", "table", "button", "text"],
  pageLayout: ["pageLayout", "freeBox", "table", "button", "text"],
  freeBox: ["freeBox", "table"],
  table: ["table"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  freeBox: "div";
  table: typeof RichTable;
  button: typeof AntdButton;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBackend2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBackend2__VariantsArgs;
    args?: PlasmicBackend2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBackend2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBackend2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBackend2__ArgProps,
          internalVariantPropNames: PlasmicBackend2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBackend2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBackend2";
  } else {
    func.displayName = `PlasmicBackend2.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={"d035f350-edf5-4268-af03-4480b52522b0"}
      appId={"2Up8DUmBB1Tx5dhznkvCW5"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "2Up8DUmBB1Tx5dhznkvCW5"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicBackend2 = Object.assign(
  // Top-level PlasmicBackend2 renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    freeBox: makeNodeComponent("freeBox"),
    table: makeNodeComponent("table"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicBackend2
    internalVariantProps: PlasmicBackend2__VariantProps,
    internalArgProps: PlasmicBackend2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBackend2;
/* prettier-ignore-end */
