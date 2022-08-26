import Fancybox18x24 from "../MakeFancyBox/Fancybox18x24";
import Fancybox18x24Planshet from "../MakeFancyBox/Fancybox18x24Planshet";

export function ShowClaim18x24() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 18x24</h4>
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
                <td>396 х 274 мм (4677 x 3236 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл обкладинки для 26-40 розворотів
                </th>
                <td>409 х 274 мм (4831 x 3236 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл розвороту
                </th>
                <td>348 х 244 мм (4110 x 2882 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox18x24 />
        </div>
      </div>
    </>
  );
}

export function ShowClaim18x24Planshet() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 18x24</h4>
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
                <td>396 x 274 мм (4677 x 3236 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл розвороту
                </th>
                <td>348 x 244 мм (4110 x 2882 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox18x24Planshet />
        </div>
      </div>
    </>
  );
}
