export default function Input({ label, invalid, ...props }) {
  let labelClass = "block mb-2 text-xs font-bold uppercase tracking-wide";
  let inputClass =
    "w-full py-3 px-4 leading-6 border-transparent border-solid rounded shadow";
  if (invalid) {
    labelClass += " text-red-400";
    inputClass += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClass += " text-stone-300";
    inputClass += " text-slate-400 bg-stone-300";
  }

  return (
    <>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </>
  );
}
