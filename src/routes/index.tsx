import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  BookOpen,
  ShieldCheck,
  Gift,
  ListChecks,
  Award,
  MessageCircleHeart,
  Check,
  Heart,
  CalendarCheck,
  Users,
  ArrowDown,
  Smartphone,
  ShoppingBag,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Lash em 3 Dias | Curso de Extensão de Cílios" },
      {
        name: "description",
        content:
          "Transforme sua paixão pela beleza em profissão. Curso completo de extensão de cílios com prática desde o primeiro dia, apostila, certificado e suporte vitalício.",
      },
      { property: "og:title", content: "Método Lash em 3 Dias | Curso de Extensão de Cílios" },
      {
        property: "og:description",
        content:
          "Aprenda técnicas modernas de extensão de cílios com prática desde o primeiro dia. Certificado e suporte vitalício incluídos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Método Lash em 3 Dias" },
      {
        name: "twitter:description",
        content:
          "Curso completo de extensão de cílios com prática desde o primeiro dia.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_LINK =
  "https://wa.me/554196887017?text=Oi!%20Quero%20saber%20mais%20sobre%20o%20M%C3%A9todo%20Lash%20em%203%20Dias.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F";

function WhatsAppButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-mobile">{children}</div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-lilac-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lilac-700">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background pb-24">
      {/* Hero */}
      <Section className="relative pb-8 pt-6">
        <div className="absolute inset-x-0 top-0 -z-10 h-[70%] bg-gradient-to-b from-lilac-100/60 to-transparent" />

        <div className="flex flex-col items-center text-center">
          <Badge>Curso presencial</Badge>

          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground">
            Método Lash
            <span className="block text-lilac-600">em 3 Dias</span>
          </h1>

          <p className="mt-3 text-balance text-lg leading-relaxed text-muted-foreground">
            Transforme sua paixão pela beleza em uma profissão. Aprenda
            técnicas modernas e procuradas no mercado de extensão de cílios.
          </p>

          <div className="mt-5 w-full overflow-hidden rounded-2xl shadow-soft">
            <img
              src="/metodolashem3diaws/Aluna-pratica.jpg"
              alt="Aluna praticando extensão de cílios em modelo real"
              className="h-auto w-full object-cover"
              loading="eager"
            />
          </div>

          <p className="mt-4 text-balance text-sm font-medium text-lilac-700">
            Desde o 1º dia você já pratica em modelo real.
            <br />
            Traga 3 modelos — se não conseguir, a gente te ajuda 😉
          </p>

          <WhatsAppButton className="mt-5 w-full">
            <span className="flex w-full items-center justify-center gap-2 rounded-xl gradient-lilac py-4 text-base font-bold text-primary-foreground shadow-lilac transition-transform active:scale-[0.98]">
              <MessageCircleHeart className="h-5 w-5" />
              Quero garantir minha vaga
            </span>
          </WhatsAppButton>

          <a
            href="#conteudo"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground"
          >
            Ver conteúdo do curso
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </Section>

      {/* O que você vai aprender */}
      <Section id="conteudo" className="bg-cream/60">
        <div className="text-center">
          <Badge>Conteúdo completo</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            O que você vai aprender
          </h2>
          <p className="mt-2 text-balance text-muted-foreground">
            Do básico ao avançado para atender qualquer cliente com segurança.
          </p>
        </div>

        <ul className="mt-5 space-y-2.5">
          {[
            "Volume Brasileiro",
            "Mega Brasileiro",
            "Volume Glamour (4D)",
            "Volume Luxo (5D)",
            "Volume Power (6D)",
            "Técnica de Capping",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl bg-card p-3.5 shadow-soft"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lilac-100 text-lilac-600">
                <Check className="h-4.5 w-4.5" />
              </span>
              <span className="font-semibold text-foreground">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl bg-gradient-to-br from-lilac-500 to-lilac-700 p-5 text-primary-foreground shadow-lilac">
          <div className="flex items-start gap-3">
            <Gift className="mt-0.5 h-6 w-6 shrink-0" />
            <div>
              <h3 className="text-lg font-bold">Bônus Exclusivo</h3>
              <p className="mt-1 text-sm leading-relaxed text-lilac-100">
                Técnica Fox Eyes — uma técnica de inspiração internacional que
                proporciona um efeito alongado e marcante ao olhar.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* O que está incluso */}
      <Section>
        <div className="text-center">
          <Badge>Tudo incluso</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            O que está incluso
          </h2>
        </div>

        <div className="mt-5 grid gap-3.5">
          {[
            {
              icon: BookOpen,
              title: "Apostila completa",
              text: "Material de apoio para acompanhar as aulas e consultar sempre que precisar.",
            },
            {
              icon: ShieldCheck,
              title: "Biossegurança",
              text: "Cuidados essenciais para realizar seus procedimentos com segurança, higiene e profissionalismo.",
            },
            {
              icon: Gift,
              title: "Materiais para os dias de curso",
              text: "Você terá o que precisa para realizar as práticas durante o treinamento.",
            },
            {
              icon: ListChecks,
              title: "Lista completa de materiais",
              text: "Receba a lista com tudo que precisa para começar seus atendimentos.",
            },
            {
              icon: Award,
              title: "Certificado de conclusão",
              text: "Certificado ao finalizar a formação para comprovar sua qualificação.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-card p-5 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lilac-100 text-lilac-600">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Bônus extras */}
      <Section className="bg-lilac-100/60">
        <div className="text-center">
          <Badge>Bônus exclusivos</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Ainda tem mais
          </h2>
          <p className="mt-2 text-balance text-muted-foreground">
            Dois presentes para acelerar seus resultados.
          </p>
        </div>

        <div className="mt-5 grid gap-4">
          <div className="rounded-2xl bg-card p-5 shadow-soft">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lilac-100 text-lilac-600">
                <Smartphone className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold text-foreground">Acesso ao Bellum</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  App de agendamento e controle financeiro focado na área da
                  beleza. Você ganha <strong>1 mês grátis</strong> para
                  organizar seus atendimentos desde o início.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-5 shadow-soft">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lilac-100 text-lilac-600">
                <ShoppingBag className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold text-foreground">
                  Lista de fornecedores
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Descubra onde comprar materiais pagando mais barato e comece
                  da melhor forma, sem gastar mais do que precisa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Suporte vitalício */}
      <Section className="bg-lilac-900 text-lilac-50">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-lilac-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lilac-100">
            <Heart className="h-3.5 w-3.5" />
            Suporte vitalício
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            O curso termina, mas o suporte não
          </h2>
          <p className="mt-3 text-balance text-lilac-200">
            Após a formação, você terá suporte vitalício diretamente comigo
            pelo WhatsApp para tirar dúvidas e continuar evoluindo na profissão.
          </p>
        </div>

        <ul className="mt-5 space-y-2.5 text-lilac-100">
          {[
            "Surgiu uma dúvida durante um atendimento?",
            "Está insegura sobre alguma técnica?",
            "Precisa de ajuda com materiais ou situações do dia a dia?",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <MessageCircleHeart className="h-5 w-5 shrink-0 text-lilac-300" />
              <span className="text-sm leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 flex items-center justify-center gap-2 text-center text-lg font-semibold text-white">
          <Heart className="h-5 w-5 fill-current text-lilac-300" />
          Eu te ensino, te acompanho e continuo com você depois do curso.
        </p>
      </Section>

      {/* Resultado real */}
      <Section className="bg-cream/60">
        <div className="text-center">
          <Badge>Resultado real</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Antes e depois
          </h2>
          <p className="mt-2 text-balance text-muted-foreground">
            O resultado que suas clientes vão amar — e vão indicar.
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl shadow-soft">
          <img
            src="/metodolashem3diaws/antes-e-depois.jpg
            alt="Antes e depois da extensão de cílios"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
      </Section>

      {/* Depoimento */}
      <Section>
        <div className="text-center">
          <Badge>Depoimento</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            O que dizem sobre o curso
          </h2>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl bg-card shadow-soft">
          <img
            src="/metodolashem3diaws/Depoimento-1.jpg
            alt="Depoimento de aluna sobre o curso"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
      </Section>

      {/* Para quem é */}
      <Section className="bg-lilac-100/60">
        <div className="text-center">
          <Badge>Para quem é</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Este curso é ideal para
          </h2>
        </div>

        <ul className="mt-5 space-y-2.5">
          {[
            "Quem nunca trabalhou com extensão de cílios e quer começar do zero",
            "Lash Designers que desejam aperfeiçoar suas técnicas",
            "Profissionais que querem ampliar seu portfólio",
            "Quem busca mais segurança, conhecimento e confiança para realizar atendimentos",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl bg-card p-3.5 shadow-soft"
            >
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-lilac-600" />
              <span className="text-sm leading-relaxed text-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Prática desde o primeiro dia */}
      <Section>
        <div className="rounded-3xl bg-gradient-to-br from-lilac-500 to-lilac-700 p-5 text-primary-foreground shadow-lilac">
          <div className="flex items-center gap-3">
            <CalendarCheck className="h-7 w-7 shrink-0" />
            <h2 className="text-2xl font-bold">Prática desde o 1º dia</h2>
          </div>
          <p className="mt-3 leading-relaxed text-lilac-100">
            Nada de só teoria! Você já começa a praticar em modelo real no
            primeiro dia de curso.
          </p>
          <p className="mt-3 leading-relaxed text-lilac-100">
            A aluna deve trazer 3 modelos. Caso não consiga, a gente dá aquela
            forcinha para você não perder nenhuma prática.
          </p>
        </div>
      </Section>

      {/* CTA final */}
      <Section className="bg-lilac-900 text-lilac-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Garanta sua vaga
          </h2>
          <p className="mt-3 text-balance text-lilac-200">
            Entre em contato para consultar datas, valores e condições de
            inscrição. Dê o primeiro passo para se tornar uma Lash Designer.
          </p>

          <WhatsAppButton className="mt-8 w-full">
            <span className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-base font-bold text-lilac-700 shadow-soft transition-transform active:scale-[0.98]">
              <MessageCircleHeart className="h-5 w-5" />
              Falar no WhatsApp
            </span>
          </WhatsAppButton>

          <p className="mt-4 text-xs text-lilac-300">
            Vagas limitadas • Respondo o quanto antes
          </p>
        </div>
      </Section>

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform active:scale-90"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircleHeart className="h-7 w-7" />
      </a>
    </main>
  );
}
