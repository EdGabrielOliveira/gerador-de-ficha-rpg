# Gerador de Ficha RPG

Este projeto é um gerador de ficha de RPG desenvolvido com Next.js, TypeScript e Tailwind CSS. O objetivo é fornecer uma interface amigável para a criação e edição de fichas de personagens de RPG.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
gerador-ficha-rpg
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── CharacterSheet.tsx
│   │   │   ├── AttributeInput.tsx
│   │   │   ├── SkillList.tsx
│   │   │   ├── InventoryList.tsx
│   │   │   └── CharacterInfo.tsx
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── types
│   │   └── index.ts
│   └── lib
│       └── utils.ts
├── public
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```

## Uso

Para iniciar o servidor de desenvolvimento, utilize o comando:

```
npm run dev
```

O aplicativo estará disponível em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do repositório e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.