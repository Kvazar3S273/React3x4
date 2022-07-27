export function ShowCalculator() {
    const container = document.getElementById("widget_calc_user");

    const button = document.getElementById("show_calc");
    if (!button.visible) {
      button.innerText = "Сховати калькулятор";
      button.visible = true;
      container.style.display = "block";
    } else {
      button.innerText = "Розрахувати вартість фотокниги";
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