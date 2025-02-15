export default function GeneralLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='bg-background-secondary min-h-dvh'>
            <div className='mx-auto max-w-7xl px-4 lg:px-0'>{children}</div>
        </main>
    );
}
