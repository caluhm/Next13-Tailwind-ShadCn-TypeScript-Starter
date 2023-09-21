export default function VerifyRequest() {
    return (
        <>
            <main className="h-screen w-full flex items-center justify-center">
                <div className="w-96 ">
                    <div className="flex w-full h-full flex-col gap-4">
                        <div className="flex flew-row gap-3 justify-start items-center">
                            <h1 className="text-3xl font-semibold">Verify Request</h1>
                        </div>
                        <div className="py-8 px-8 h-min border rounded-md">
                            <p className="text-sm text-gray-500">
                                Check your email for the verification link.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
