export default function Message({message}: {message: string}) {
  return (
    <>
      <div className="py-2.5 h-min border text-center rounded-md bg-green-500 border-green-800 dark:bg-green-800 dark:border-green-500">
        <p className="text-sm">
          {message}.
        </p>
      </div>
    </>
  );
}
