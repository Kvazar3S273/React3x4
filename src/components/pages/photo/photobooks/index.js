import React from "react";
import { HashLink } from 'react-router-hash-link';
import { ShowCalculator } from './calculator';
import ServicePhotoBookCards from "./servicePhotoBookCards";

const Photobooks = () => {

  return (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h1 className="text-center mt-3">Фотокниги</h1>
      </div>

      <ServicePhotoBookCards />

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div>
            <HashLink smooth to={"#calculator"}>
              <button
                type="submit"
                className="btn btn-primary mt-4 mb-4"
                onClick={ShowCalculator}
                id="show_calc"
              >
                Розрахунок вартості фотокниг
              </button>
            </HashLink>
            <section id="calculator"></section>
            <div
              id="widget_calc_user"
              data-user-key="9893e8659bc23351fd92d9c626c02df4"
              data-user-lang="uk"
              data-user-currency="UAH"
            ></div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};
export default Photobooks;
