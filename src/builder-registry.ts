"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Seccion2 from "./components/Seccion2/Seccion2";
import Seccion3 from "./components/Seccion3/Seccion3";
import Seccion4 from "./components/Seccion4/Seccion4";
import Seccion5 from "./components/Seccion5/Seccion5";
import Seccion0 from "./components/Navbar/Seccion0";
import Seccion7 from "./components/Seccion7/Seccion7";
import Seccion8 from "./components/Seccion8/Seccion8";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Seccion0, {
  name: "Seccion0",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Seccion2, {
  name: "Seccion2",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Seccion3, {
  name: "Seccion3",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Seccion4, {
  name: "Seccion4",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Seccion5, {
  name: "Seccion5",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});


Builder.registerComponent(Seccion7, {
  name: "Seccion7",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
Builder.registerComponent(Seccion8, {
  name: "Seccion8",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

