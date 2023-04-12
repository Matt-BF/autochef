import { useState } from "react";

export default function AppliancesCheckbox({
  applianceName,
  onChange,
}: {
  applianceName: string;
  onChange: (name: string, isChecked: boolean) => void;
}) {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(applianceName, isChecked);
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        name={applianceName}
        className="peer sr-only"
      />
      <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-emerald-400 peer-checked:after:translate-x-full  peer-focus:outline-none "></div>
      <span className="ml-3  font-medium ">{applianceName}</span>
    </label>
  );
}
