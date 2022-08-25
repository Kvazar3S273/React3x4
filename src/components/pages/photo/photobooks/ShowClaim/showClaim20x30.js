import Fancybox20x30 from "../MakeFancyBox/Fancybox20x30";
import Fancybox20x30Planshet from "../MakeFancyBox/Fancybox20x30Planshet";
import Fancybox20x30Print from "../MakeFancyBox/Fancybox20x30Print";

export function ShowClaim20x30() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 20x30</h4>
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
                <td>456 х 320 мм (5386 х 3780 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл обкладинки для 26-40 розворотів
                </th>
                <td>469 х 320 мм (5540 х 3780 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл розвороту
                </th>
                <td>408 х 290 мм (4819 х 3425 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox20x30 />
        </div>
      </div>
    </>
  );
}

export function ShowClaim20x30Print() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 30x30</h4>
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
                <td>470 х 320 мм(5551 х 3780 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл сторінки
                </th>
                <td>214 х 290 мм(2528 х 3425 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox20x30Print />
        </div>
      </div>
    </>
  );
}

export function ShowClaim20x30Planshet() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 20x30</h4>
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
                <td>452 x 320 мм (5339 x 3780 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл розвороту
                </th>
                <td>408 x 290 мм (4819 x 3425 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox20x30Planshet />
        </div>
      </div>
    </>
  );
}