import React from "react";

const FooterMenu = () => {
    const menuLink =["Home","About","Services","Work","Blog","Career"]
  return (
    <section>
      <h1 className="font-bold text-xl pb-4">Menu</h1>
      <ul className="text-slate-600 flex flex-col gap-1 md:gap-2 font-semibold">
        {
            menuLink.map((menu)=>(
                <li><a href="">{menu}</a></li>
            ))
        }
      </ul>
    </section>
  );
};

export default FooterMenu;
