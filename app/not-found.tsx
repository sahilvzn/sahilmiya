import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex min-h-[100svh] flex-col items-center justify-center bg-background px-6 text-center">
            <div className="flex flex-col items-center max-w-md gap-6">
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                    404 Tracker
                </h2>
                <p className="text-lg text-muted-foreground">
                    Looks like this page is missing or removed.
                </p>
                <Link
                    href="/"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-lg active:scale-100"
                >
                    Return Home
                </Link>
            </div>
        </div>
    )
}
