import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between my-32">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        creatividad.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        abril de 2024
      </h4>
    </section>
  );
}
