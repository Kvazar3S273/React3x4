import React from "react";
import { HashLink } from 'react-router-hash-link';

const Photobooks = () => {

  function showCalculator() {
    const container = document.getElementById("widget_calc_user");

    const button = document.getElementById("show_calc");
    if (!button.visible) {
      button.innerText = "Сховати калькулятор";
      button.visible = true;
      container.style.display = "block";
    } else {
      button.innerText = "Розрахунок вартості фотокниг";
      button.visible = false;
      container.style.display = "none";
    }

    if (button.created) return;
    button.created = true;

    const id = container.dataset.userKey;
    const domain = "pro.cyfrolab.com";
    const lang = container.dataset.userLang;
    const langPrefix = lang === "uk" ? "" : "/" + lang;
    const currency = container.dataset.userCurrency;
    const refererUrl = encodeURIComponent(document.location.href);

    const widget_url = `https://${domain}${langPrefix}/calculator?user_id=${id}&currency=${currency}&referer=${refererUrl}`;

    const Widget = {
      created: false,
      widgetElement: null,
      show: function () {
        if (this.created) return;
        this.widgetElement = document.createElement("div");
        this.widgetElement.setAttribute("id", "widget_container");
        this.widgetElement.innerHTML = `<iframe id="widget_iframe" src="${widget_url}" frameborder="0" width="100%"></iframe>`;
        const widget = document.getElementById("widget_calc_user");
        widget.style.width = "100%";
        widget.style.minHeight = "1000px";
        widget.appendChild(this.widgetElement);
        this.widgetElement.style.display = "block";
        this.created = true;
        const widget_iframe = document.getElementById("widget_iframe");
        widget_iframe.style.minHeight = "1000px";
      },
    };
    Widget.show();
    
  }

  return (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h2 className="text-center mt-3">Фотокниги</h2>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div>
            <HashLink smooth to={"#calculator"}>
              <button
                type="submit"
                className="btn btn-primary mt-4 mb-4"
                onClick={showCalculator}
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
