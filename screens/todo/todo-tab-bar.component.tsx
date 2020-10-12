import React from "react";
import {
  Divider,
  Tab,
  TabBar,
  TabElement,
  MenuItem,
} from "@ui-kitten/components";
import { TodoScreenProps } from "../../navigation/todo.navigator";
import { AppRoute } from "../../navigation/AppRoutes";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from "../../components/SafeAreaLayout";
import { Toolbar } from "../../components/Toolbar";
import { InfoIcon, LogoutIcon, MenuIcon } from "../../assets/icons";
import { APP_NAME } from "../../constants";

export const TodoTabBar = (props: TodoScreenProps): SafeAreaLayoutElement => {
  const onMenuItemSelect = (index: number): void => {
    const { [index]: selectedItem } = menu;

    switch (selectedItem.title) {
      case "Log Out":
        props.navigation.navigate(AppRoute.AUTH);
        break;
      default:
        props.navigation.navigate(selectedItem.title);
        break;
    }
  };

  const onTabSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route): TabElement => {
    const { options } = props.descriptors[route.key];
    return (
      <Tab
        key={route.key}
        title={options.title}
        // @ts-ignore: all Tab Screens options strictly have UI Kitten Icon
        icon={options.tabBarIcon}
      />
    );
  };

  const renderToolbarMenu = (): React.ReactElement => (
    <React.Fragment>
      <MenuItem title="About" accessoryLeft={InfoIcon} />
      <MenuItem title="Log Out" accessoryLeft={LogoutIcon} />
    </React.Fragment>
  );

  return (
    <SafeAreaLayout insets={SaveAreaInset.TOP}>
      <Toolbar
        title={APP_NAME}
        onMenuItemSelect={onMenuItemSelect}
        menu={renderToolbarMenu}
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <TabBar selectedIndex={props.state.index} onSelect={onTabSelect}>
        {props.state.routes.map(createNavigationTabForRoute)}
      </TabBar>
      <Divider />
    </SafeAreaLayout>
  );
};
