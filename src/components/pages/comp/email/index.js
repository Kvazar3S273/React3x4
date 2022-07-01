import React from "react";

const Email = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Відправка електронної пошти</h1>
        <div className="row m-3 p-2">
          <div className="col-md-4">
            <img
              className="photo-service"
              src="/images/services/comp/compemail.jpg"
              alt="Email"
            />
          </div>
          <div className="col-md-8 px-3">
            <p>
              Надаємо послугу скидання на будь-яку електронну пошту 
              відсканованих документів. Також можемо роздрукувати 
              Ваші файли, попередньо скачавши їх з Вашої пошти. 
              До Ваших послуг також скачування електронних квитків 
              з різних сервісів за Вашим посиланням. Якщо Ви скидаєте 
              лист з файлами для роздруку на нашу пошту, додаткові 
              послуги за використання пошти не сплачуються.  
            </p>
            <h3 className="text-center text-danger">Вартість послуги</h3>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Послуга</th>
                  <th scope="col">Ціна</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Відправка ел. пошти</th>
                  <td>10 грн/за 1 лист*</td>
                </tr>
                <tr>
                  <th scope="row">Відправка на Viber</th>
                  <td>5 грн</td>
                </tr>
                <tr>
                  <th scope="row">Використання вашої скриньки</th>
                  <td>15 грн</td>
                </tr>
                <tr>
                  <th scope="row">Завантаження на файлообмінник</th>
                  <td>від 50 грн</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Email;
