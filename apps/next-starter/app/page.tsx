export interface PageProps {
    page: any;
}
export const metadata = {
    title: 'Next.js Template',
    description: 'A starter NextJs template',
}

export default function RootPage( page: PageProps ): JSX.Element {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Home Page</h1>
        </div>
    )
}