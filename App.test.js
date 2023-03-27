// App.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "./App";

describe("<App />", () => {
  it("displays the correct text", () => {
    const { getByText } = render(<App />);
    const textElement = getByText("Hello, world!");
    expect(textElement).toBeTruthy();
  });
});
