import React from "react";

export default function PageAbout(){
    return(
        <div className="text">
            <h1 style={{color: "darkblue"}}>О сайте</h1>

            <h2>
                Этот сайт создан чисто из интереса и никому не принадлежит.<br/>
                Он не несёт в себе цели:
                <ul>
                    <li>зароботка</li>
                    <li>оскорблений собак женского рода</li>
                    <li>пропоганды здорового образа жизни</li>
                    <li>продажы гаража</li>
                </ul>
                Убедительная просьба не писать в чат гадости, только благородный чёрный юмор и/или пост-мета-альфа-бета-самоиронию.
                Исходный код можете скачивать на здоровье, все права наверно соблюдены.
            </h2>
        </div>
    );
}
