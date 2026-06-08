import { Section } from "@/components/ui/Section";
import Image from "next/image";

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="flex justify-center">
          <Image
            src="/images/profil/chris.png"
            alt="Photo de profil de Christophe"
            width={288}
            height={288}
            className="h-72 w-72 rounded-xl border border-edge object-cover"
            priority
          />
        </div>

        {/* Texte */}
        <div>
          <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            À propos
          </h2>
          <h3 className="mb-6 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Qui suis-je ?
          </h3>
          <div className="space-y-4 leading-relaxed text-foreground-alt">
            {/*
              space-y-4 = 16px d'espace entre chaque enfant (les <p>)
              Évite de mettre mb-4 sur chaque paragraphe manuellement
            */}
            <p>
              Développeur expérimenté avec 10 ans d'expérience, dont 7 années
              spécialisées en JavaScript, je suis passionné par l'apprentissage
              continu et la découverte de nouvelles technologies. J'ai développé
              une solide expertise dans le développement mobile grâce à des
              technologies telles que React Native, Flutter, SwiftUI et Swift,
              qui me permettent de concevoir des applications performantes tout
              en alliant créativité et excellence technique.
            </p>

            <p>
              Actuellement, je travaille sur la conception d'une application
              innovante, où je relève des défis techniques stimulants avec
              enthousiasme et détermination.
            </p>
            <p>
              Soucieux d'élargir mon champ de compétences, je m'intéresse
              également au domaine de la data. Afin de participer à des projets
              à forte valeur ajoutée et d'accompagner les entreprises dans
              l&apos;exploitation de leurs données.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
