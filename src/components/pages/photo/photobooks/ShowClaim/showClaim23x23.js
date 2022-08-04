import Fancybox23x23 from "../MakeFancyBox/Fancybox23x23";
import Fancybox23x23Print from "../MakeFancyBox/Fancybox23x23Print";

export function ShowClaim23x23() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 23x23</h4>
      <div className="row">
        <div className="col-md-8">
          <h3>Вимоги до файлів</h3>

          <table class="table table-striped">
            <tbody>
              <tr>
                <th scope="row" className="text-success">
                  Формат файлу
                </th>
                <td>JPG (максимальна якість)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Колірна модель
                </th>
                <td>RGB, профіль sRGB IEC61966</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Розширення
                </th>
                <td>300 dpi(точок на дюйм)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл обкладинки для 3-25 розворотів
                </th>
                <td>519 х 274 мм (6130 х 3236 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл обкладинки для 26-40 розворотів
                </th>
                <td>532 х 274 мм (6284 х 3236 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл розвороту
                </th>
                <td>471 х 244 мм (5563 х 2882 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox23x23 />
        </div>
      </div>
    </>
  );
}

export function ShowClaim23x23Print() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 23x23</h4>
      <div className="row">
        <div className="col-md-8">
          <h3>Вимоги до файлів</h3>

          <table class="table table-striped">
            <tbody>
              <tr>
                <th scope="row" className="text-success">
                  Формат файлу
                </th>
                <td>JPG (максимальна якість)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Колірна модель
                </th>
                <td>RGB, профіль sRGB IEC61966</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Розширення
                </th>
                <td>300 dpi(точок на дюйм)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл обкладинки
                </th>
                <td>534 х 274 мм(6307 х 3236 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл сторінки
                </th>
                <td>246 х 244 мм(2906 х 2882 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox23x23Print />
        </div>
      </div>
    </>
  );
}
