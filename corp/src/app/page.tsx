import homeImg from '/public/home.jpg';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="factory"
      title="Pro Cloud Hosting"
    />
  );
}
