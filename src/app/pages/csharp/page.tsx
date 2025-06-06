import React from "react";

const CsharpPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center">
                <img src="data:image/png;base64,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" alt="" />
            </div>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        C#
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700">
        A linguagem C# foi criada junto com a arquitetura . NET. Tendo seu desenvolvimento iniciado em meados de 1999, onde, a convite da Microsoft, Anders Hejlsberg montou uma equipe para desenvolver uma nova linguagem de programação. A princípio, essa nova linguagem tinha recebido o nome de Cool..
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Desempenho rápido devido à compilação nativa.</li>
          <li>
          É fácil de aprender, então até mesmo novos desenvolvedores podem se familiarizar com C# rapidamente
          </li>
          <li>
          É altamente escalável, o que facilita a manutenção e a depuração
          </li>
          <li>Oferece recursos para ajudar a proteger seu código contra erros e vulnerabilidades</li>
          <li></li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Desvantagens
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
          O código precisa ser compilado antes de ser executado, o que pode atrasar o desenvolvimento. 
          </li>
          <li>O C# não é tão eficiente quanto linguagens de nível inferior, como C ou C++. </li>
          <li>Não é possível executar funcionalidades de baixo nível, como interagir diretamente com hardware ou firmware. </li>
        </ul>
      </section>
    </div>
  );
};

export default CsharpPage;