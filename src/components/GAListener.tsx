// sourece: https://github.com/react-ga/react-ga/issues/122

import React from "react";
import ReactGA from "react-ga";
import { withRouter, RouteComponentProps } from "react-router";
import { Location, LocationListener, UnregisterCallback } from "history";

const sendPageView: LocationListener = (location: Location): void => {
  // TODO: don't set /character/id
  let pathname = location.pathname;
  if (location.pathname.lastIndexOf("/") > 0) {
    pathname = location.pathname.split("/")[1];
  }
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
};

interface Props extends RouteComponentProps {
  children: JSX.Element;
  trackingId?: string;
}

const GAListener = ({ children, trackingId, history }: Props): JSX.Element => {
  React.useEffect((): UnregisterCallback | void => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    if (trackingId) {
      ReactGA.initialize(trackingId);
      sendPageView(history.location, "REPLACE");
      return history.listen(sendPageView);
    }
  }, [history, trackingId]);

  return children;
};

export default withRouter(GAListener);
