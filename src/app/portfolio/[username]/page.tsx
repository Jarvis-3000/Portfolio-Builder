export default function PortfolioByUsername({ params }: { params: { username: string } }) {
  return <div>My Username: {params.username}</div>;
}
