import React from "react";
import style from "./style.module.css"

function Navbar({data}){

    return(
        <div className="w-full px-8 py-3 flex justify-between items-center mt">
            <h1 className={style.colors}>Orange</h1>
            <div className="flex p-2 px-10 gap-3 bg-orange-700 rounded-md  text-white text-sm">
                <h3>Favourites: </h3>
                <h4>{data.filter(item=>item.addToFavourite).length}</h4>
            </div>
        </div>
    )
}

export default Navbar;