"use client";
import React, { FC } from "react";
import TabsGeneral from "./TabsGeneral";

interface propsSeccion2 {
  componentState?: any;
  setComponentState?: any;
}

const Ticketing: FC<propsSeccion2> = ({ componentState, setComponentState }) => {
  return (
    <section className="w-full bg-[#f6f9fc] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="max-w-lg">
            <p className="text-sm font-medium text-[#6096B9] uppercase tracking-wide mb-3">Ticketing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Gestiona tus eventos de ticketing en un solo lugar
            </h2>
          </div>
          <a
            href="https://app.eventosorganizador.com/"
            className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#6096B9] hover:text-[#4b7591] transition-colors shrink-0"
          >
            Crear un evento de tickets
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="w-full rounded-lg overflow-hidden">
          <TabsGeneral componentState={componentState} setComponentState={setComponentState} />
        </div>
      </div>
    </section>
  );
};

export default Ticketing;
