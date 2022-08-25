import FancyboxTrumo from "../MakeFancyBox/FancyboxTrumo";

export function ShowClaimTrumo() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Трюмо</h4>
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
                <td>598 x 200 мм (7063 x 2362 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл обкладинки
                </th>
                <td>628 x 230 мм (7417 x 2717 пікселів)</td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <FancyboxTrumo />
        </div>
      </div>
    </>
  );
}
