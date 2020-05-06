import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input, Props, testid } from "..";

describe("<Input/>", () => {
  const initialValue = "initialValue";
  const expectedValue = "test";
  const expectedLabel = "label";
  const expectedError = "error";
  function helper(props?: Props) {
    const { getByTestId, getByText, queryByTestId } = render(
      <Input {...props} />
    );
    const sut = getByTestId(testid);
    const input = sut.querySelector("input");
    if (props?.error) {
      getByText(props.error);
      expect(queryByTestId(`${testid}_error`)).toBeTruthy();
    } else {
      expect(queryByTestId(`${testid}_error`)).toBeFalsy();
    }
    if (props?.label) {
      const label = sut.querySelector("label");
      getByText(props.label);
      expect(queryByTestId(`${testid}_label`)).toBeTruthy();
    } else {
      expect(queryByTestId(`${testid}_label`)).toBeFalsy();
    }
    if (props?.value) {
      expect(input.value).toBe(props.value);
    }
    return { sut, input };
  }
  function assertChange(
    input: HTMLInputElement,
    value: string,
    onChange?: jest.Mock
  ) {
    fireEvent.change(input, { target: { value } });
    if (onChange) {
      expect(onChange).toHaveBeenCalledWith(value);
    }
  }
  it("renders all props", () => {
    const onChange = jest.fn();
    const { input } = helper({
      onChange,
      value: initialValue,
      label: expectedLabel,
      error: expectedError,
    });

    assertChange(input, expectedValue, onChange);
  });
  it("renders with only value", () => {
    const { input } = helper({ value: expectedValue });
    assertChange(input, expectedValue);
  });
  it("renders", () => {
    helper();
  });
});
