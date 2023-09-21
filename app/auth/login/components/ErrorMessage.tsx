export default function ErrorMessage() {
  return (
    <>
      <div className="py-2.5 h-min border text-center rounded-md bg-red-500 border-red-800 dark:bg-red-800 dark:border-red-500">
        <p className="text-sm">
          There was an error. Please refresh and try again.
        </p>
      </div>
    </>
  );
}
