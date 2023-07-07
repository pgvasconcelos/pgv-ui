'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const options = ["Design", "Development", "Business"];

export const DropDown = ({ selected }) => {



    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // console.log(searchParams.get('selected'))

    const onSelect = (event) => {
      const current = new URLSearchParams(searchParams);
      const value = event.target.value.trim();
      if (!value) {
        current.delete("selected");
      } else {
        current.set("selected", event.target.value);
      }
      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.push(`${pathname}${query}`);

    };

   
  
   
    return (
      <select className=" flex text-dark-green font-semibold focus:border-gray   active:border-gray focus-visible:ring-1 focus-within:border-gray focus-within:ouline-none p-2 text-lg " value={selected} onChange={onSelect}>
        <option value=""> ______________ </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
);
}

