import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react"
import Header from '../../components/Header';


describe('<Header />', () => {
  it("renders header", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
      );
    const header = getByText("GR2DA");
    expect(header).toBeInTheDocument();
  });
});