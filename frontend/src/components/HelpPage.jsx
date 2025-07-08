
import React from "react";
import { ArrowRightIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const LINKS = [
  {
    label: "Repositório do Projeto",
    href: "https://github.com/unb-mds/2025_1-Jakebot",
  },
  {
    label: "Site do Projeto",href: "https://unb-mds.github.io/2025_1-Jakebot/",
  },
  { label: "Termos de Uso", href: "/termos" },
];

const TEAM = [
  { name: "Eduardo Ribeiro", role: "Fullstack Developer" },
  { name: "Danilo Barros", role: "Backend Developer" },
  { name: "Lucas Chaves", role: "Frontend Developer" },
  { name: "Artur Alves", role: "ML Engineer" },
  { name: "Davi Muniz", role: "UX Designer" },
  { name: "Artur Guanaes", role: "UX/UI Designer" },
];

export function HelpPage() {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">
        Ajuda &amp; Sobre
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Sobre</h3>
          <p className="text-gray-600 leading-relaxed">
            Nosso projeto visa desenvolver uma ferramenta robusta e intuitiva
            para coletar e analisar os sentimentos expressos nos comentários da
            plataforma Brasil Participativo. O objetivo principal é transformar
            grandes volumes de dados textuais em insights acionáveis, ajudando
            gestores públicos e cidadãos a compreenderem de forma mais clara e
            objetiva a opinião pública sobre as propostas e discussões. Através
            da análise de sentimentos (positivo, neutro ou negativo), a
            ferramenta permitirá uma visualização acessível e dinâmica dos
            dados, facilitando a identificação de tendências, pontos de apoio e
            áreas de crítica, contribuindo assim para um processo decisório mais
            informado e participativo.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800 mb-2">Links</h3>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow hover:bg-gray-100"
            >
              <span className="text-gray-700">{link.label}</span>
              <ArrowRightIcon className="h-5 w-5 text-gray-500" />
            </a>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto mt-12">
        <h3 className="text-xl font-medium text-gray-800 mb-6">Equipe</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="flex items-center bg-white p-4 rounded-lg shadow"
            >
              <UserCircleIcon className="h-12 w-12 text-gray-400 mr-4" />
              <div>
                <p className="text-gray-800 font-semibold">{member.name}</p>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
