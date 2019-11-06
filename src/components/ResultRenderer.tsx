import * as React from "react";

import { IService, IDataViewProps } from "../interfaces";

interface IProps {
  service: IService;
  View: React.FunctionComponent<IDataViewProps>
}

function ResultRenderer(props: IProps) {
  const { View } = props;
  const { loading, result, error } = props.service(
    "https://api.carbonintensity.org.uk/generation"
  );

  if (loading) {
    return <div data-testid="result-loading">Loading...</div>
  }

  if (error.length > 0) {
    return <div data-testid="result-error">{error}</div>;
  }

  return (
    <View data={result} />
  );
}

export default ResultRenderer;
