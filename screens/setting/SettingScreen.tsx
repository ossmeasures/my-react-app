import React from "react";
import { StyleSheet } from "react-native";
import { Divider, Layout, Text, Toggle } from "@ui-kitten/components";
import { SettingScreenProps } from "../../navigation/Setting.navigator";
import { Toolbar } from "../../components/Toolbar";
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from "../../components/SafeAreaLayout";
import { MenuIcon } from "../../assets/icons";
import { APP_NAME } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { Category } from "./Category";

export const SettingScreen = (
  props: SettingScreenProps
): SafeAreaLayoutElement => {
  const [activeChecked, setActiveChecked] = React.useState(true);

  const onActiveCheckedChange = (isChecked) => {
    setActiveChecked(isChecked);
  };

  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={APP_NAME}
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <Divider />
      <Layout style={styles.container}>
        <Text category="h1">SETTING ⚙</Text>
        <Layout style={styles.horizontalScroll}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category name="Profile" imageUri="https://picsum.photos/200/300" />
            <Category
              name="Notification"
              imageUri="https://picsum.photos/200/300/?blur=1"
            />
            <Category
              name="Siri"
              imageUri="https://picsum.photos/200/300/?blur=3"
            />
          </ScrollView>
        </Layout>
      </Layout>
      <ScrollView
        style={{
          paddingLeft: 20,
          paddingTop: 10,
        }}
      >
        <Layout style={{ alignItems: "flex-start" }}>
          <Layout style={{ marginTop: 10, marginBottom: 10 }}>
            <Toggle checked={activeChecked} onChange={onActiveCheckedChange}>
              {activeChecked ? "Active" : "Disabled"}
            </Toggle>
          </Layout>
          <Layout style={{ marginTop: 10, marginBottom: 10 }}>
            <Toggle disabled={true}>Disabled</Toggle>
          </Layout>
          <Layout style={{ marginTop: 10, marginBottom: 10 }}>
            <Toggle disabled={true}>Disabled</Toggle>
          </Layout>
          <Layout style={{ marginTop: 10, marginBottom: 10 }}>
            <Toggle disabled={true}>Disabled</Toggle>
          </Layout>
          <Layout style={{ marginTop: 10, marginBottom: 10 }}>
            <Toggle disabled={true}>Disabled</Toggle>
          </Layout>
          <Layout style={{ marginTop: 10, marginBottom: 10 }}>
            <Toggle disabled={true}>Disabled</Toggle>
          </Layout>
          <Layout style={{ marginTop: 10, marginBottom: 10 }}>
            <Toggle disabled={true}>Disabled</Toggle>
          </Layout>
          <Layout style={{ marginTop: 10, marginBottom: 10 }}>
            <Toggle disabled={true}>Disabled</Toggle>
          </Layout>
          <Layout style={{ marginTop: 10, marginBottom: 10 }}>
            <Toggle disabled={true}>Disabled</Toggle>
          </Layout>
          <Layout style={{ marginTop: 10, marginBottom: 10 }}>
            <Toggle checked={true} disabled={true}>
              Checked Disabled
            </Toggle>
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    alignItems: "center",
  },
  horizontalScroll: {
    height: 130,
    marginTop: 20,
  },
});
