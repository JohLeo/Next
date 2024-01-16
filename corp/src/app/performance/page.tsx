import perfImg from '/public/performance.jpg';
import Hero from '@/components/hero';

export default function PerformancePage() {
  return (
    <Hero
      imgData={perfImg}
      imgAlt="welding"
      title="We serve high performance applications..."
    />
  );
}
