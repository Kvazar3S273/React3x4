import Fancybox30x20Print from "../MakeFancyBox/Fancybox30x20Print";

export function ShowClaim30x20Print() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 30x20</h4>
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
                <td>648 х 230 мм(7654 х 2717 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл сторінки
                </th>
                <td>303 х 200 мм(3579 х 2362 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox30x20Print />
        </div>
      </div>
    </>
  );
}
