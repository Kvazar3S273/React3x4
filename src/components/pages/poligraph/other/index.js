import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import "./tabstyle.css"

const Other = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Буклети',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: 'Плакати',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            tabTitle: 'Брошури',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        },
        {
            id: 4,
            tabTitle: "Об'ємні календарі",
            title: 'Title 4',
            content: 'Contenido de tab 4.'
        },
        {
            id: 5,
            tabTitle: "Меню",
            title: 'Title 5',
            content: 'Contenido de tab 5.'
        },
        {
            id: 6,
            tabTitle: "Блокноти",
            title: 'Title ',
            content: 'Contenido de tab .'
        },
        {
            id: 7,
            tabTitle: "Пластикові картки",
            title: 'Title ',
            content: 'Contenido de tab .'
        },
        {
            id: 8,
            tabTitle: "Блоки для запису",
            title: 'Title ',
            content: 'Contenido de tab .'
        },
        {
            id: 9,
            tabTitle: "Конверти",
            title: 'Title ',
            content: 'Contenido de tab .'
        },
        {
            id: 10,
            tabTitle: "Фірмові папки",
            title: 'Title ',
            content: 'Contenido de tab .'
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

  return (
    <>
    <div classNameName="row">
        {/* Бордовий блок для карток */}
        <div className="col py-4 mt-3" style={{ background: "#4D4D4D" }}>

    <h1 className="text-center text-light mt-4 mb-4">Інша поліграфія</h1>
  <div className='container '>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button 
                    key={i} 
                    id={tab.id} 
                    disabled={currentTab === `${tab.id}`} 
                    onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content '>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div>
                            <p className='title'>{tab.title}</p>
                            <p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
        </div>
        </div>

        
    </>
  );
};
export default Other;


