import FancyboxTrio from "../MakeFancyBox/FancyboxTrio";

export function ShowClaimTrio() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Тріо</h4>
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
                  Файл розвороту
                </th>
                <td>616 x 290 мм (7276 x 3425 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл обкладинки
                </th>
                <td>646 x 320 мм (7630 x 3780 пікселів)</td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <FancyboxTrio />
        </div>
      </div>
    </>
  );
}
