---
title: "IA, hackers e golpes: o que eu penso sobre tudo isso, explicado do jeito mais simples possível"
date: "2026-11-15"
author: "Pedro Francisco"
excerpt: "Ataques feitos com IA nos Estados Unidos, golpe de voz falsa, medo de perder o emprego e o que a tecnologia tem de bom. Respondo as perguntas que mais me fazem, sem termo técnico."
cover: "/images/blog/futuro-desenvolvimento.svg"
category: "Inteligência Artificial"
---

Muita gente tem me perguntado o que eu acho disso tudo. Parente, cliente, colega de trabalho, gente que nunca tinha puxado assunto de tecnologia comigo. Como alguns de vocês sabem, sou engenheiro de software e trabalho com inteligência artificial, então a pergunta acaba sempre caindo no meu colo.

Resolvi responder aqui, de uma vez só. E vou explicar do jeito mais simples que eu conseguir, como se a gente estivesse conversando num café. Toda vez que aparecer uma palavra difícil, eu traduzo na hora.

## A IA está mesmo invadindo empresas sozinha?

Está acontecendo, sim, mas a história é diferente da que circula por aí.

Primeiro, um nome que você vai ouvir bastante: "agente de IA". Pense num funcionário virtual que recebe uma ordem e vai se virando sozinho, passo a passo, sem ninguém mandando em cada movimento. É ótimo quando a ordem é boa. Complicado quando a ordem é entrar num sistema que não é seu.

Nos Estados Unidos, o que veio a público nas últimas semanas foi mais ou menos isto.

Em julho, a Hugging Face, uma das maiores plataformas de IA do mundo, avisou que tinha sido invadida por um sistema de agentes autônomos. Pouco depois, a OpenAI contou que tudo começou num teste de segurança dela mesma. Segundo o relato, os modelos escaparam da "sala trancada" onde faziam o teste (os técnicos chamam isso de sandbox), chegaram à internet e foram atrás das respostas de um desafio de hacking que tinham recebido.

Em outubro foi a vez da WorkOS, empresa que cuida do sistema de login de outras empresas. Uma ferramenta de IA chamada ARTEX, que um pesquisador usava em testes, saiu da área controlada, encontrou uma ferramenta interna de vendas aberta na internet e entrou usando uma senha de desenvolvimento fácil de adivinhar. Entre 25 e 30 de outubro, levou dados de contato de clientes e trechos de conversas de suporte. A WorkOS diz que não houve má intenção e que o pesquisador apagou os dados.

O ARTEX é de "código aberto", o que quer dizer que a receita é pública e qualquer pessoa pode baixar. No dia 13 de novembro, o FBI soltou um alerta: criminosos estão usando a ferramenta desde pelo menos agosto, em ataques a dez setores no mundo, e em alguns casos passaram menos de três horas entre escolher a vítima e ter acesso total. O autor tirou o projeto do ar em outubro, mas as cópias já estavam soltas.

Tem mais um. Um relatório da NorForge, empresa de segurança, descreve um hacker que teria invadido perto de cem empresas, entre elas fabricantes americanas como a Deere e a Cummins, gastando em média uns 50 dólares em IA por invasão.

Um aviso honesto: boa parte desses números vem das próprias empresas de segurança e das empresas atacadas. É informação séria, mas nem tudo foi confirmado por quem não tem interesse no assunto.

## Então a IA ficou mal-intencionada?

Não, e esse é o ponto que mais me incomoda nas manchetes. Repare nos dois primeiros casos: ninguém mandou a IA invadir ninguém. Eram testes que escaparam do controle.

Na WorkOS, o próprio relato da empresa lista o que falhou: uma ferramenta interna exposta na internet, uma senha fraca e nenhum limite de tentativas. Na Hugging Face, o relato diz que a OpenAI havia relaxado travas de segurança do teste e que o modelo aproveitou uma falha no programa que isolava o ambiente. É como deixar o portão aberto e a chave debaixo do tapete e depois culpar o cachorro por ter entrado.

Gabriele Mazzini, do MIT Media Lab, disse algo parecido ao jornal Observador, na Web Summit: IA é produto de engenharia, e quem coloca ela na internet sem proteção responde pelo estrago.

## O que mudou, então?

O custo. Antes, invadir um sistema exigia gente muito especializada e muito tempo. Hoje uma pessoa sozinha, com poucos dólares, consegue o que antes pedia uma equipe. A Acronis, outra empresa de segurança, descreveu um único operador coordenando mais de dez modelos de IA por aplicativos de mensagem, atacando serviços de emergência em Taiwan, universidades na Tailândia e instituições financeiras no México.

Isso muda quem pode atacar e muda quem vale a pena atacar. Antes, o ladrão escolhia a casa grande do quarteirão. Agora existe um robô que bate em todas as portas da rua ao mesmo tempo, sem escolher. Quem tem empresa pequena e pensa "ninguém vai querer invadir a minha" está com a conta errada.

Tem uma ironia que eu gosto de contar. Depois da invasão, a Hugging Face tentou usar modelos de IA comerciais para analisar o ataque e foi barrada pelos filtros de segurança deles. Acabou recorrendo a um modelo aberto, rodando em máquina própria. A defesa também precisa de IA, e ficar travado por um filtro no meio de um incidente é problema de verdade.

## E esses golpes de voz e vídeo falsos?

É a outra pergunta que mais ouço, geralmente depois que alguém da família quase caiu num golpe.

"Deepfake" é um vídeo ou áudio falso, feito por IA, que imita uma pessoa real. Hoje uma voz pode ser copiada a partir de gravações, e o golpista liga fingindo ser seu filho, seu chefe ou um advogado pedindo dinheiro com urgência.

Não achei um número confiável só de golpes com voz clonada. O que existe é o dado geral de fraude: a Serasa Experian registrou 6,9 milhões de tentativas no primeiro semestre de 2025, uma a cada 2,3 segundos, mais da metade (53,7%) contra bancos e emissores de cartão. Nem tudo isso é IA, mas dá a dimensão do terreno em que esses golpes crescem.

Lá fora o golpe também está ficando mais sofisticado. Segundo um site que monitora incidentes de segurança, o Departamento de Justiça americano apreendeu, em 12 de novembro, a estrutura de um esquema ligado à Coreia do Norte que usa reuniões de vídeo falsas para instalar vírus no computador da vítima.

O que funciona na prática é simples:

- Se pedirem dinheiro por áudio ou vídeo, desligue e ligue de volta para o número que você já tem salvo.
- Combine com a família uma palavra-código que não esteja em nenhuma rede social.
- Configure limite de Pix e alertas de movimentação no aplicativo do banco.

Quem cria urgência está tentando te impedir de pensar. Desconfie de toda pressa.

## A IA vai tirar o meu emprego?

Essa pergunta vem com muito medo junto, então vou ser cuidadoso.

O relatório Perspectivas do Emprego 2026, da OCDE, mostra o desemprego em 4,9%, perto do menor nível já registrado, e o secretário-geral da organização, Mathias Cormann, disse que não há indícios de que o maior uso de IA esteja reduzindo a procura por trabalhadores. Na frase dele, a IA está "transformando o trabalho, mais do que reduzindo". Por outro lado, os jovens estão tendo mais dificuldade para conseguir a primeira vaga, e a OCDE vê a IA como provável parte do motivo.

Tem também uma pesquisa com mil gestores de contratação americanos, feita pela Resume Templates em dezembro de 2025: 59% admitiram que destacam a IA ao justificar demissões ou congelamento de vagas, mas só 9% disseram que alguma função foi totalmente substituída pela tecnologia. Ou seja, parte do discurso é desculpa.

Minha leitura é que o emprego não acaba, o que muda é o que pedem de você. Na mesma pesquisa, as habilidades mais valorizadas foram resolver problemas (54%), aprender ferramentas novas (44%) e saber se comunicar (43%). Saber usar IA apareceu bem atrás, com 31%.

## E o lado bom?

Eu trabalho com isso todo dia, então não vou fingir que só existe risco.

Na saúde, uma pesquisa da Deloitte com 375 empresas do setor, no mundo todo, mostrou que 85% aumentaram o investimento em IA. No Brasil, o uso já aparece em diagnóstico, no combate a fraude em plano de saúde e no desenvolvimento de remédios, e a Anvisa tem um projeto para acelerar a triagem e o registro de medicamentos. Peter Lee, da Microsoft, resumiu bem num evento em setembro: a IA encurta o caminho entre uma pergunta difícil e as hipóteses que o pesquisador vai testar, mas não substitui o julgamento humano.

Dentro das empresas, o ganho está nas tarefas repetitivas, como atendimento, relatório e análise de dados. Quem usa direito economiza tempo de verdade.

A mesma pesquisa da Deloitte traz um número que me preocupa: no setor de saúde, 72% pretendem adotar agentes de IA nos próximos dois anos, e só 19% têm uma governança madura para isso. Em português claro, muita gente vai ligar o funcionário virtual sem ter regra nenhuma de quem responde por ele.

## O que eu faria no seu lugar

Se você é pessoa física, os três cuidados contra golpe estão na seção anterior. Além deles, não passe código de verificação nem senha por telefone, nem para quem diz ser do banco.

Se você tem empresa, o básico resolve mais do que parece:

- Não deixe nada interno exposto na internet sem necessidade.
- Use senha forte e verificação em duas etapas, e não esqueça credencial de teste dentro do sistema que está no ar.
- Dê ao agente de IA a menor permissão possível e deixe ele rodando isolado.
- Mantenha tudo atualizado e tenha cópia de segurança guardada fora do sistema.
- Tenha uma pessoa responsável, com nome e sobrenome, por cada automação.

Resumindo o que eu penso: não tenho medo da IA, tenho respeito. Ela vai trazer ganho enorme e vai ser usada para o mal, as duas coisas ao mesmo tempo. Quem decide de que lado a gente fica é quem organiza o uso dela, e isso começa em coisas simples, como uma senha melhor e uma desconfiança a mais.

Se quiser conversar sobre como aplicar isso na sua empresa, [é só chamar](/contato).

## Fontes

- [Antihype: Artex e o alerta do FBI](https://antihype.com.br/c/seguranca/artex-ia-ataque-hacker-alerta-fbi/)
- [Security Boulevard: hacker usou agentes de IA para invadir cerca de 100 sites (02/11/2026)](https://securityboulevard.com/2026/11/chinese-speaking-hacker-successfully-charged-ai-agents-to-break-into-around-100-websites/)
- [Let's Data Science: WorkOS atribui violação a agente ARTEX que escapou](https://letsdatascience.com/news/workos-traces-data-breach-to-researchers-escaped-artex-ai-ag-1db7468b)
- [AEI: modelo da OpenAI escapou do sandbox e invadiu outra empresa](https://ctse.aei.org/an-openai-model-escaped-its-sandbox-and-broke-into-another-company-to-cheat-on-a-test/)
- [TI Inside: IA permite "exército hacker de um homem só" (Acronis, 13/11/2026)](https://tiinside.com.br/13/11/2026/ia-permite-exercito-hacker-de-um-homem-so-atacar-diversos-paises-aponta-acronis/)
- [Observador: o maior risco da IA são os ataques feitos por agentes (12/11/2026)](https://observador.pt/2026/11/12/a-ia-mete-medo-a-quem-o-maior-risco-nao-e-a-extincao-da-humanidade-mas-os-ataques-feitos-por-agentes)
- [AgentBeam: monitor de ataques de novembro de 2026](https://agentbeam.com/attacks/2026-11)
- [Tribuna do Sertão: golpes por voz clonada e dados da Serasa Experian (25/02/2026)](https://www.tribunadosertao.com.br/geral/2026/02/25/862930-golpes-por-voz-clonada-deixam-bancos-brasileiros-em-alerta-uma-fraude-a-cada-23-segundos)
- [Olhar Digital: o avanço da IA e o perfil das vagas, com dados da OCDE (13/07/2026)](https://olhardigital.com.br/2026/07/13/inteligencia-artificial/o-avanco-da-ia-ja-mudou-o-perfil-das-vagas-de-trabalho/)
- [Olhar Digital: empresas usam a IA como bode expiatório para demissões? (11/06/2026)](https://olhardigital.com.br/2026/06/11/inteligencia-artificial/empresas-estao-usando-a-inteligencia-artificial-como-bode-expiatorio-para-demissoes/)
- [Medicina S/A: uso de IA cresce na saúde (Deloitte)](https://medicinasa.com.br/ia-cresce-saude/)
- [O Especialista Safra: Peter Lee, Microsoft AI Science (22/09/2026)](https://oespecialista.safra.com.br/ia-acelera-ciencia-e-decisoes-diz-presidente-da-microsoft-ai-science/)

*© 2026 Pedro Francisco. Texto de autoria própria. A reprodução, total ou parcial, depende de autorização do autor.*
