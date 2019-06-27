import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import Emoji from "../Emoji";

describe("Emoji", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Emoji />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders with emoji", () => {
      const emoji = renderer.create(<Emoji symbol="💩" label="doo"/>).toJSON();
      expect(emoji).toMatchSnapshot();
  })
});
