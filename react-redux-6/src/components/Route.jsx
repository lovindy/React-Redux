import useNavigation from "../hook/use-navigation";
function Route({ path, children }) {
  const { currentPath } = useNavigation();
  if (currentPath === path) {
    return children;
  }
  return null;
}

export default Route;
