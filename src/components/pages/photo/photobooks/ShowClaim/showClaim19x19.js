import Fancybox19x19 from "../MakeFancyBox/Fancybox19x19";

export function ShowClaim19x19() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 19x19</h4>
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
                <td>421 x 223 мм (4972 x 2634 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл обкладинки для 26-40 розворотів
                </th>
                <td>434 x 223 мм (5126 x 2634 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл розвороту
                </th>
                <td>373 x 193 мм (4406 x 2280 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox19x19 />
        </div>
      </div>
    </>
  );
}
