import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./containers/Login";
import RegistrationHome from "./containers/Registration/Home";
import { isAuthenticated } from "./services/auth";
import MainLayout from "./components/Layouts/MainLayout";
import NotFoundPage from "./components/Layouts/NotFoundPage";
import CircularLoading from "./components/Loading/CircularLoading";
import ReMatricula from "./containers/Registration/ReMatricula";
import AddStage from "./containers/Stage/AddStage";
import { Stage, StageForm } from "./containers/Stage";
import StageContextProvider from "./containers/Stage/context/context";
import RegistrationContextProvider from "./containers/Registration/Context/context";

//const Home = lazy(() => import("./containers/Home"));
const Schedule = lazy(() => import("./containers/Schedule/Schedule"));
const ScheduleForm = lazy(() => import("./containers/Schedule/ScheduleForm"));

const School = lazy(() => import("./containers/School/School"));
const SchoolClassrooms = lazy(() =>
  import("./containers/School/SchoolClassrooms")
);


const RegistrationClassroom = lazy(() =>
  import("./containers/Stage/Registration")
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <MainLayout>
          <Suspense fallback={<CircularLoading />}>
            <Component {...props} />
          </Suspense>
        </MainLayout>
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="/login" exact component={Login} />
      <RegistrationContextProvider><Route path="/matricula" exact component={RegistrationHome} /></RegistrationContextProvider>
      <Route path="/matricula/:id" exact component={ReMatricula} />
      <PrivateRoute exact path="/" component={Schedule} />
      <PrivateRoute exact path="/cronograma" component={Schedule} />
      <PrivateRoute
        exact
        path="/cronograma/adicionar"
        component={ScheduleForm}
      />
      <PrivateRoute
        exact
        path="/cronograma/editar/:id"
        component={ScheduleForm}
      />
      <PrivateRoute exact path="/escolas" component={School} />
      <PrivateRoute exact path="/escolas/:id" component={SchoolClassrooms} />
      <StageContextProvider>
        <PrivateRoute exact path="/turmas" component={Stage} />
        <PrivateRoute exact path="/turmas/:id" component={StageForm} />
        <PrivateRoute
          exact
          path="/turmas/:id/matricula/:idRegistration"
          component={RegistrationClassroom}
        />
      </StageContextProvider>

      <PrivateRoute exact path="/estagios/adicionar" component={AddStage} />

      <Route path="/*" component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

export default Routes;
