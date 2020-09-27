import React from "react";
import Error from "./components/Error/Error";
import { useTheme } from '@material-ui/core/styles';

function ErrorPage(props) {
  const { errorCode} = props;
  const theme = useTheme();
  return(
    <>
      <div>
      <Error history={props.history} errorCode={errorCode} text="404" />
      </div>
    </>
  )
}

export default ErrorPage;