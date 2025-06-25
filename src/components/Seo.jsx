import { Helmet } from 'react-helmet';

export default function Seo({ title, description }) {
  return (
    <Helmet>
      <title>Reliant Renewables | Zero Capex Solar Company India</title>
      <meta name="description" content="Save on energy bills with Reliant's zero-capex solar panel installations. Trusted across India for performance, reliability, and savings." />
      <meta name="keywords" content="Solar, Rooftop Solar, Zero Capex, Solar Company India, Solar EPC Pune, Reliant Renewables" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.reliantrenewables.in/" />
    </Helmet>
  );
}
