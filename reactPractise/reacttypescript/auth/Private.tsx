import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivatePros = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivatePros) => {
  if (isLoggedIn) {
    return <Component name="sravanthi" />;
  } else {
    return <Login />;
  }
};
