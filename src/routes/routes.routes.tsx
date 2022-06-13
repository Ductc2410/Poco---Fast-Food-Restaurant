import Header from "../components/Header/Header";
import { PATH_CLIENT_HOME, PATH_CLIENT_SHOP } from "./routes.path";

export const clientRouter: any[] = [
  {
    path: PATH_CLIENT_HOME,
    component: Header
  }
];
