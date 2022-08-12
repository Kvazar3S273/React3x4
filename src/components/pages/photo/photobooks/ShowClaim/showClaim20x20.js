import Fancybox20x20Print from "../MakeFancyBox/Fancybox20x20Print";

export function ShowClaim20x20Print() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 20x20</h4>
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
                <td>470 х 237 мм(5551 х 2799 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл сторінки
                </th>
                <td>214 х 207 мм(2528 х 2445 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox20x20Print />
        </div>
      </div>
    </>
  );
}
