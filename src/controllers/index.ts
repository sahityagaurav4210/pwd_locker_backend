import HomeController from "./home.controller";
import UserController from "./users.controller";

class Controllers {
  public static home() {
    return HomeController;
  }

  public static user() {
    return UserController;
  }
}

export default Controllers;
