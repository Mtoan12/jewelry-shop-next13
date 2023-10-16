export default function page({ params }: { params: { slug: string } }) {
    return <div>{JSON.stringify(params)}</div>;
}
