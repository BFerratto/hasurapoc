import React from "react";
import { Input } from "../";
import { withInfo } from "@storybook/addon-info";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "/common/Input",
  decorators: [withInfo, withKnobs],
};
export const input = () => (
  <>
    <Input
      value={text("value", "example")}
      label={text("label", "some label")}
      error={text("error", "some error")}
    />
  </>
);
