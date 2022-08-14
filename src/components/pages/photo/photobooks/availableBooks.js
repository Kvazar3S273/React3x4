export function Available30x30() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/30x30.png"
            className="available-format-img"
            alt="30x30"
          />
          <h6 className="text-center text-dark">30x30</h6>
        </div>
      </li>
    </>
  );
}

export function Available24x32() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/24x32.png"
            className="available-format-img"
            alt="24x32"
          />
          <h6 className="text-center text-dark">24x32</h6>
        </div>
      </li>
    </>
  );
}

export function Available20x30() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/20x30.png"
            className="available-format-img"
            alt="20x30"
          />
          <h6 className="text-center text-dark">20x30</h6>
        </div>
      </li>
    </>
  );
}

export function Available19x19() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/19x19.png"
            className="available-format-img"
            alt="19x19"
          />
          <h6 className="text-center text-dark">19x19</h6>
        </div>
      </li>
    </>
  );
}

export function Available23x23() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/23x23.png"
            className="available-format-img"
            alt="23x23"
          />
          <h6 className="text-center text-dark">23x23</h6>
        </div>
      </li>
    </>
  );
}

export function Available23x18() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/23x18.png"
            className="available-format-img"
            alt="23x18"
          />
          <h6 className="text-center text-dark">23x18</h6>
        </div>
      </li>
    </>
  );
}

export function Available18x24() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/18x24.png"
            className="available-format-img"
            alt="18x24"
          />
          <h6 className="text-center text-dark">18x24</h6>
        </div>
      </li>
    </>
  );
}

export function Available29x19() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/29x19.png"
            className="available-format-img"
            alt="29x19"
          />
          <h6 className="text-center text-dark">29x19</h6>
        </div>
      </li>
    </>
  );
}

export function Available30x20() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/30x20.png"
            className="available-format-img"
            alt="30x20"
          />
          <h6 className="text-center text-dark">30x20</h6>
        </div>
      </li>
    </>
  );
}

export function Available20x20() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/20x20.png"
            className="available-format-img"
            alt="20x20"
          />
          <h6 className="text-center text-dark">20x20</h6>
        </div>
      </li>
    </>
  );
}

export function Available15x20() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/15x20.png"
            className="available-format-img"
            alt="15x20"
          />
          <h6 className="text-center text-dark">15x20</h6>
        </div>
      </li>
    </>
  );
}

export function Available20x15() {
  return (
    <>
      <li style={{ listStyleType: "none" }}>
        <div>
          <img
            src="/images/services/photo/photobooks/formats/20x15.png"
            className="available-format-img"
            alt="20x15"
          />
          <h6 className="text-center text-dark">20x15</h6>
        </div>
      </li>
    </>
  );
}

export function AvailableBamBooks() {
  return (
    <>
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Доступні формати</h1>
        <p className="text-center">
          Пропонуємо Вам наступні формати фотокниг Bambook:
        </p>

        <ul className="list-group list-group-horizontal justify-content-center">
            {Available30x30()}
            {Available24x32()}
            {Available20x30()}
            {Available19x19()}
            {Available23x23()}
            {Available23x18()}
        </ul>

      </div>
    </>
  );
}

export function AvailableSlimBooks() {
  return (
    <>
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Доступні формати</h1>
        <p className="text-center">
          Пропонуємо Вам наступні формати фотокниг Slimbook:
        </p>

        <ul className="list-group list-group-horizontal justify-content-center">
          {Available30x30()}
          {Available20x30()}
          {Available18x24()}
          {Available23x23()}
          {Available29x19()}
          {Available19x19()}
        </ul>
      </div>
    </>
  );
}

export function AvailableUniBooks() {
  return (
    <>
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Доступні формати</h1>
        <p className="text-center">
          Пропонуємо Вам наступні формати фотокниг Unibook:
        </p>

        <ul className="list-group list-group-horizontal justify-content-center">
          {Available30x30()}
          {Available20x30()}
          {Available23x23()}
          {Available29x19()}
          {Available19x19()}
        </ul>
      </div>
    </>
  );
}

export function AvailablePrintBooks() {
  return (
    <>
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Доступні формати</h1>
        <p className="text-center">
          Пропонуємо Вам наступні формати фотокниг Printbook:
        </p>

        <ul className="list-group list-group-horizontal justify-content-center">
          {Available23x23()}
          {Available24x32()}
          {Available30x30()}
          {Available20x30()}
          {Available30x20()}
          {Available20x20()}
          {Available15x20()}
          {Available20x15()}
        </ul>
      </div>
    </>
  );
}

export function AvailablePhotoBooks() {
  return (
    <>
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Доступні формати</h1>
        <p className="text-center">
          Пропонуємо Вам наступні формати фотокниг Photobook:
        </p>

        <ul className="list-group list-group-horizontal justify-content-center">
          {Available30x30()}
          {Available20x30()}
          {Available18x24()}
          {Available23x23()}
          {Available29x19()}
          {Available19x19()}
        </ul>
      </div>
    </>
  );
}