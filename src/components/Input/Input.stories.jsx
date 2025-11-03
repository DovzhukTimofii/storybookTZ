import React from "react";
import Input from "./Input";

const meta = {
  title: "Input / Input",
  component: Input,
  argTypes: { onChange: { action: "changed" } }
};
export default meta;


export const Text = {
  args: { placeholder: "Regular text input", type: "text", clearable: false }
};

export const TextClearable = {
  args: { placeholder: "Clearable text", type: "text", clearable: true }
};

export const Password = {
  args: { placeholder: "Password", type: "password", clearable: false }
};

export const PasswordClearable = {
  args: { placeholder: "Password clearable", type: "password", clearable: true }
};

export const Number = {
  args: { placeholder: "Number", type: "number", clearable: false }
};
