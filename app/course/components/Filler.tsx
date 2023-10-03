export default function Filler() {
  return (
    <div className="flex flex-col gap-6 opacity-30 mt-6 px-2">
      <div className="w-[250px] rounded-lg border h-min">
        <div className="animate-pulse bg-foreground h-[200px] rounded-t-lg" />
        <div className="p-4">
          <div className="animate-pulse bg-foreground h-4 w-1/2 rounded-lg mb-2" />
          <div className="animate-pulse bg-foreground h-4 w-1/4 rounded-lg" />
        </div>
      </div>
      <div className="w-[250px] rounded-lg border h-min">
        <div className="animate-pulse bg-foreground h-[200px] rounded-t-lg" />
        <div className="p-4">
          <div className="animate-pulse bg-foreground h-4 w-1/2 rounded-lg mb-2" />
          <div className="animate-pulse bg-foreground h-4 w-1/4 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
