import Fancybox24x32 from "../MakeFancyBox/Fancybox24x32";
import Fancybox24x32Print from "../MakeFancyBox/Fancybox24x32Print";

export function ShowClaim24x32() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 24x32</h4>
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
                  Файл обкладинки A (для 3-25 розворотів)
                </th>
                <td>502 х 346 мм (5929 x 4087 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл обкладинки B (для 26-40 розворотів)
                </th>
                <td>516 х 346 мм (6094 x 4087 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл розвороту
                </th>
                <td>454 х 316 мм (5362 x 3732 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox24x32 />
        </div>
      </div>
    </>
  );
}

export function ShowClaim24x32Print() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 24x32</h4>
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
                <td>516 х 346 мм(6094 х 4087 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл сторінки
                </th>
                <td>237 х 316 мм(2799 х 3732 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox24x32Print />
        </div>
      </div>
    </>
  );
}
