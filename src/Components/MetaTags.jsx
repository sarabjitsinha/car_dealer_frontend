import { Helmet } from "react-helmet-async";

export default function MetaTags({ title, description, car }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {car && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Car",
            "name": car.name,
            "description": car.description,
            "image": car.image
          })}
        </script>
      )}
    </Helmet>
  );
}
