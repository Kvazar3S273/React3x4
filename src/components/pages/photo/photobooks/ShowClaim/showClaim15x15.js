import Fancybox15x15 from "../MakeFancyBox/Fancybox15x15";

export function ShowClaim15x15() {
  return (
    <>
      <h4 className="m-3 text-center text-danger">Розміри 15x15</h4>
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
                <td>356 x 186 мм (4205 x 2197 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл обкладинки B (для 26-40 розворотів)
                </th>
                <td>366 x 186 мм (4323 x 2197 пікселів)</td>
              </tr>
              <tr>
                <th scope="row" className="text-success">
                  Файл розвороту
                </th>
                <td>306 x 156 мм (3614 x 1843 пікселів)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <Fancybox15x15 />
        </div>
      </div>
    </>
  );
}