// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2Up8DUmBB1Tx5dhznkvCW5
// Component: Q4JwVxY8BQKh

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
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2Up8DUmBB1Tx5dhznkvCW5/projectcss
import sty from "./PlasmicRecipes.module.css"; // plasmic-import: Q4JwVxY8BQKh/css

createPlasmicElementProxy;

export type PlasmicRecipes__VariantMembers = {};
export type PlasmicRecipes__VariantsArgs = {};
type VariantPropType = keyof PlasmicRecipes__VariantsArgs;
export const PlasmicRecipes__VariantProps = new Array<VariantPropType>();

export type PlasmicRecipes__ArgsType = {};
type ArgPropType = keyof PlasmicRecipes__ArgsType;
export const PlasmicRecipes__ArgProps = new Array<ArgPropType>();

export type PlasmicRecipes__OverridesType = {
  root?: Flex__<"div">;
  pageLayout?: Flex__<typeof PageLayout>;
  freeBox?: Flex__<"div">;
  h1?: Flex__<"h1">;
  button?: Flex__<typeof AntdButton>;
  text?: Flex__<"div">;
  table?: Flex__<typeof RichTable>;
};

export interface DefaultRecipesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRecipes__RenderFunc(props: {
  variants: PlasmicRecipes__VariantsArgs;
  args: PlasmicRecipes__ArgsType;
  overrides: PlasmicRecipes__OverridesType;
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

  const $globalActions = useGlobalActions?.();

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
    queryGetRecipesByUser: usePlasmicDataOp(() => {
      return {
        sourceId: "83X9ZdYzYUYJtgqe5fwXeX",
        opId: "d79ead4a-46aa-48bd-9e75-c375c164e664",
        userArgs: {},
        cacheKey: `plasmic.$.d79ead4a-46aa-48bd-9e75-c375c164e664.$.`,
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
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"Templates"}
                    </h1>
                    <AntdButton
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                      href={`/new-recipe-2`}
                      onClick={async () => {
                        const $steps = {};

                        $steps["goToNewRecipe"] = true
                          ? (() => {
                              const actionArgs = { destination: `/new-recipe` };
                              return (({ destination }) => {
                                if (
                                  typeof destination === "string" &&
                                  destination.startsWith("#")
                                ) {
                                  document
                                    .getElementById(destination.substr(1))
                                    .scrollIntoView({ behavior: "smooth" });
                                } else {
                                  __nextRouter?.push(destination);
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["goToNewRecipe"] != null &&
                          typeof $steps["goToNewRecipe"] === "object" &&
                          typeof $steps["goToNewRecipe"].then === "function"
                        ) {
                          $steps["goToNewRecipe"] = await $steps[
                            "goToNewRecipe"
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
                        {"New"}
                      </div>
                    </AntdButton>
                  </div>
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.table),
                      data: (() => {
                        try {
                          return $queries.queryGetRecipesByUser;
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
                      fields: (() => {
                        const __composite = [
                          { key: "id", fieldId: "id" },
                          {
                            key: "created_at",
                            fieldId: "created_at",
                            isHidden: null
                          },
                          { key: "title", fieldId: "title" },
                          { key: "owner", fieldId: "owner", isHidden: null },
                          {
                            key: "Printfy Product ID",
                            fieldId: "Printfy Product ID",
                            isHidden: null
                          },
                          {
                            key: "printify_blueprints",
                            fieldId: "printify_blueprints",
                            disableSorting: null,
                            isHidden: null
                          },
                          {
                            key: "fk_printify_product_id",
                            fieldId: "fk_printify_product_id",
                            isHidden: null
                          },
                          {
                            key: "printful_blueprints",
                            fieldId: "printful_blueprints",
                            isHidden: null
                          }
                        ];
                        __composite["1"]["isHidden"] = true;
                        __composite["3"]["isHidden"] = true;
                        __composite["4"]["isHidden"] = true;
                        __composite["5"]["disableSorting"] = false;
                        __composite["5"]["isHidden"] = true;
                        __composite["6"]["isHidden"] = true;
                        __composite["7"]["isHidden"] = true;
                        return __composite;
                      })(),

                      hideColumnPicker: true,
                      hideExports: true,
                      hideSearch: false,
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
                      rowActions: (() => {
                        const __composite = [
                          { type: "item", label: null, onClick: null },
                          { type: "item", label: null, onClick: null }
                        ];
                        __composite["0"]["label"] = "Edit";
                        __composite["0"]["onClick"] = async (rowKey, row) => {
                          const $steps = {};

                          $steps["goToTesteditrecipe"] = true
                            ? (() => {
                                const actionArgs = {
                                  destination: `/recipes-5/${(() => {
                                    try {
                                      return row.id;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}`
                                };
                                return (({ destination }) => {
                                  if (
                                    typeof destination === "string" &&
                                    destination.startsWith("#")
                                  ) {
                                    document
                                      .getElementById(destination.substr(1))
                                      .scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    __nextRouter?.push(destination);
                                  }
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["goToTesteditrecipe"] != null &&
                            typeof $steps["goToTesteditrecipe"] === "object" &&
                            typeof $steps["goToTesteditrecipe"].then ===
                              "function"
                          ) {
                            $steps["goToTesteditrecipe"] = await $steps[
                              "goToTesteditrecipe"
                            ];
                          }
                        };
                        __composite["1"]["label"] = "Delete";
                        __composite["1"]["onClick"] = async (rowKey, row) => {
                          const $steps = {};

                          $steps["postgresDeleteMany"] = true
                            ? (() => {
                                const actionArgs = {
                                  dataOp: {
                                    sourceId: "83X9ZdYzYUYJtgqe5fwXeX",
                                    opId: "8c224b1e-5b82-42f2-b6b0-6acf04182521",
                                    userArgs: {
                                      conditions: [row.id]
                                    },
                                    cacheKey: null,
                                    invalidatedKeys: ["plasmic_refresh_all"],
                                    roleId:
                                      "d035f350-edf5-4268-af03-4480b52522b0"
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
                                    await plasmicInvalidate(
                                      dataOp.invalidatedKeys
                                    );
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
                            $steps["postgresDeleteMany"] != null &&
                            typeof $steps["postgresDeleteMany"] === "object" &&
                            typeof $steps["postgresDeleteMany"].then ===
                              "function"
                          ) {
                            $steps["postgresDeleteMany"] = await $steps[
                              "postgresDeleteMany"
                            ];
                          }

                          $steps["invokeGlobalAction"] = true
                            ? (() => {
                                const actionArgs = {
                                  args: ["warning", "Recipe Deleted"]
                                };
                                return $globalActions[
                                  "plasmic-antd5-config-provider.showNotification"
                                ]?.apply(null, [...actionArgs.args]);
                              })()
                            : undefined;
                          if (
                            $steps["invokeGlobalAction"] != null &&
                            typeof $steps["invokeGlobalAction"] === "object" &&
                            typeof $steps["invokeGlobalAction"].then ===
                              "function"
                          ) {
                            $steps["invokeGlobalAction"] = await $steps[
                              "invokeGlobalAction"
                            ];
                          }

                          $steps["refreshData"] = true
                            ? (() => {
                                const actionArgs = {
                                  queryInvalidation: ["plasmic_refresh_all"]
                                };
                                return (async ({ queryInvalidation }) => {
                                  if (!queryInvalidation) {
                                    return;
                                  }
                                  await plasmicInvalidate(queryInvalidation);
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["refreshData"] != null &&
                            typeof $steps["refreshData"] === "object" &&
                            typeof $steps["refreshData"].then === "function"
                          ) {
                            $steps["refreshData"] = await $steps["refreshData"];
                          }
                        };
                        return __composite;
                      })(),

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
  root: ["root", "pageLayout", "freeBox", "h1", "button", "text", "table"],
  pageLayout: ["pageLayout", "freeBox", "h1", "button", "text", "table"],
  freeBox: ["freeBox", "h1", "button", "text"],
  h1: ["h1"],
  button: ["button", "text"],
  text: ["text"],
  table: ["table"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  freeBox: "div";
  h1: "h1";
  button: typeof AntdButton;
  text: "div";
  table: typeof RichTable;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRecipes__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRecipes__VariantsArgs;
    args?: PlasmicRecipes__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRecipes__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRecipes__ArgsType,
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
          internalArgPropNames: PlasmicRecipes__ArgProps,
          internalVariantPropNames: PlasmicRecipes__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRecipes__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRecipes";
  } else {
    func.displayName = `PlasmicRecipes.${nodeName}`;
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

export const PlasmicRecipes = Object.assign(
  // Top-level PlasmicRecipes renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    freeBox: makeNodeComponent("freeBox"),
    h1: makeNodeComponent("h1"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    table: makeNodeComponent("table"),

    // Metadata about props expected for PlasmicRecipes
    internalVariantProps: PlasmicRecipes__VariantProps,
    internalArgProps: PlasmicRecipes__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicRecipes;
/* prettier-ignore-end */
