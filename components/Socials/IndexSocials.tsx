"use client";
import React, { FC } from "react";
import TabG1 from "./TabG2";

interface propsSeccion5 {
  componentState?: any;
  setComponentState?: any;
}

const Socials: FC<propsSeccion5> = ({ componentState, setComponentState }) => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="max-w-lg">
            <p className="text-sm font-medium text-[#6096B9] uppercase tracking-wide mb-3">Eventos Sociales</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Organiza eventos sociales sin esfuerzo
            </h2>
          </div>
          <a
            href="https://app.eventosorganizador.com/"
            className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#6096B9] hover:text-[#4b7591] transition-colors shrink-0"
          >
            Crear un evento social
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="w-full rounded-lg overflow-hidden">
          <TabG1 componentState={componentState} setComponentState={setComponentState} />
        </div>
      </div>
    </section>
  );
};

export default Socials;
