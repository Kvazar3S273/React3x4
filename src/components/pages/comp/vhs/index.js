import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetVhses } from "../../../../constants/actions/compActions/vhs";

const Vhs = () => {
  const dispatch = useDispatch();
  const { listvhses } = useSelector((state) => state.vhs);
  useEffect(() => {
    dispatch(GetVhses());
  }, []);

  return (
    <section id="vhs">

    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Оцифровка відеокасет</h1>
        <div className="row m-3 p-2">
          <div className="col-md-4">
            <img
              className="photo-service"
              src="/images/services/comp/vhs.jpg"
              alt="Email"
            />
          </div>
          <div className="col-md-8 px-3">
          <p>Оцифровка відеокасет дає можливість перенести старі відеозаписи пам'ятних
			моментів в цифровий формат та переглядати їх будь-яким зручним способом на телевізорі
			чи комп'ютері. З часом магнітна плівка може розмагнітитись чи пошкодитись, 
			а інформація в цифровому вигляді не піддається впливу часу, крім того дедалі менше 
			користувачів мають можливість переглянути стару відеокасету на відеомагнітофоні.<br/>
			Ми оцифровуємо відеокасети в <b> MPEG-формат </b> та записуємо відео <b>на флешку</b>. Відео не оброблюємо,
			а віддаємо лише точну копію Вашої касети.<br/> Переписуємо касети <b>VHS та miniDV</b>.<br/>
            <b>Мінімальна вартість</b> роботи - ціна перезапису <b>одної години</b> відео, навіть при умові, 
            що на касеті було менше години. <br/>
            При замовленні оцифровки більше 8 годин відео діє <b> знижка на всю оцифровку</b>.
		    </p>
            <h3 className="text-center text-danger">Вартість послуги</h3>
            <div className="row" style={{overflowX:"auto"}}>
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">Послуга</th>
                    <th scope="col">Ціна</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {listvhses &&
                    listvhses.map((item) => (
                      <tr key={item.id}>
                        <td> {item.service} </td>
                        <td> {item.price} </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
export default Vhs;
