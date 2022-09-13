# Punch In

## Descrição
Projeto de controle de horário

Telas Principais:
  - Calendário - visualização geral dos dias trabalhados e batido no sistema
  - Principal - marcar horário de entrada, saída e feriado
  - Estatíscas - detalhes do horário trabalhado e horário que precisa bater
  - Configurações - configurar horário de entrada e saída

Design pode ser visto no [Figma](https://www.figma.com/file/DkGpQY9BoLY6GcjvK0YIbU/Punch-In?node-id=1%3A3)

## Tecnologia utilizadas
- [Solito](https://example.solito.dev) - template para navegação cross-platform 
- [Icon](https://www.svgrepo.com/collection/miscellaneous/1) - Ícones Principais
- `moti` for animations
- `dripsy` for theming/design (you can bring your own, too)
- Expo SDK 44
- Next.js 12
- React Navigation 6

## 🗂 Folder layout

- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next`
- Expo local dev: `yarn native`
  - Runs `expo start`


