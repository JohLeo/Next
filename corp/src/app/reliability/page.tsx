import reliImg from '/public/reliability.jpg';
import Hero from '@/components/hero';

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliImg}
      imgAlt="weld on"
      title="Super high reliability hosting."
    />
  );
}
