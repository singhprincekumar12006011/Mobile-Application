export const getRouteByRole = (role) => {
  switch (role) {
    case "1":
      return "/dm/dashboard";

    case "2":
      return "/agm/dashboard";

    case "3":
      return "/liftingIncharge/dashboard";

    case "4":
      return "/driver/dashboard";

    case "5":
      return "/transporter/dashboard";

    case "6":
      return "/stateManager/dashboard";

    default:
      return "/";
  }
};
