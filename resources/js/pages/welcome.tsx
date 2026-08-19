import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Home" />

            <main className="min-h-screen bg-stone-100 text-slate-900">
                <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-10 px-6 py-16">
                    <div className="max-w-3xl space-y-5">
                        <p className="text-6xl font-semibold tracking-tight text-slate-900 sm:text-7xl">
                            Welcome
                        </p>

                        <p className="text-base leading-7 text-slate-600 sm:text-lg">
                            Hi, this mah firs page
                        </p>

                        <div>
                            <button
                                type="button"
                                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:bg-slate-700"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
