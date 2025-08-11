import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "L'accès au forum est-il gratuit ?",
      answer:
        "Oui, l'accès au forum Mbour Up ! est entièrement gratuit. Il suffit de s'inscrire en ligne pour confirmer votre participation et recevoir votre badge d'accès.",
    },
    {
      question: "Comment devenir exposant ?",
      answer:
        "Pour devenir exposant, remplissez le formulaire de candidature exposant sur cette page. Notre équipe étudiera votre dossier et vous contactera dans les 48h pour confirmer votre participation et organiser les détails logistiques.",
    },
    {
      question: "Quelles thématiques sont couvertes ?",
      answer:
        "Le forum couvre cinq thématiques principales : l'entrepreneuriat local, l'agriculture durable, la culture et l'économie créative, les solutions climatiques, et les alternatives à l'émigration. Chaque thème fait l'objet de conférences, panels et ateliers dédiés.",
    },
    {
      question: "Y a-t-il un code vestimentaire ?",
      answer:
        "Nous recommandons une tenue smart casual : élégante mais décontractée. L'événement se déroulant en bord de mer, privilégiez des vêtements confortables et adaptés au climat tropical.",
    },
    {
      question: "Comment devenir intervenant ?",
      answer:
        "Si vous souhaitez partager votre expertise lors du forum, contactez-nous à Mbourup2025@gmail.com en précisant votre domaine d'expertise, votre expérience et le sujet que vous aimeriez aborder. Notre comité scientifique étudiera votre proposition.",
    },
    {
      question: "Des repas sont-ils prévus ?",
      answer:
        "Oui, un petit-déjeuner d'accueil, un déjeuner et des pauses café sont inclus dans votre participation. Un cocktail de clôture sera également organisé en fin de journée pour favoriser les échanges informels.",
    },
    {
      question: "Puis-je venir accompagné(e) ?",
      answer:
        "Chaque participant doit s'inscrire individuellement. Cependant, vous pouvez inscrire plusieurs personnes de votre organisation. Les places étant limitées, nous encourageons les inscriptions anticipées.",
    },
    {
      question: "Comment se déroulent les ateliers ?",
      answer:
        "Les ateliers sont des sessions pratiques de 90 minutes en petits groupes (15-20 personnes maximum). Ils incluent des exercices pratiques, des études de cas et des moments d'échange. L'inscription aux ateliers se fait sur place le matin même.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-deep-gray mb-4">Questions Fréquentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur le forum Mbour Up !
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="font-heading font-semibold text-left hover:text-ocean">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
