import React, { ReactElement } from "react";
import { ApolloQueryResult } from "apollo-boost";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";

type discoverTheType = ReactElement | null;

type TRenderFunction<TProps> = (props: TProps) => discoverTheType;

export function renderStuff<T, P = any>(
  key: string,
  result: ApolloQueryResult,
  renderer: TRenderFunction<{ data: T } | P>
) {
  const { loading, error, data: raw } = result;
  let data: T = !loading && !error ? raw[key] : [];
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return renderer({ data });
}
