import BackButton from "@/components/BackButton"

export default async function NotFound() {
    return (
      <div className="h-screen flex justify-center flex-col items-center gap-8 text-center p-2.5">
        <BackButton />
        <div>
          <h1 className="text-2xl font-bold">Error 404 - Page Not Found.</h1>
          <p className="text-4xl font-bold pt-4">Sorry, that page does not exist.</p>
        </div>
        <img
          src="https://media.tenor.com/9RsYHkzRE0EAAAAd/shock-shocker.gif"
          alt="404"
          className="rounded-lg"
        ></img>
      </div>
    );
    }