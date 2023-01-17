import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  return (
    <Fragment>
      <header className="bg-black">
        <h1 className="">PIZZA-VIC</h1>
      </header>
      <nav></nav>
    </Fragment>
  );
}
