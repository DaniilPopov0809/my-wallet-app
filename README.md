**Мова: [Українська](README.md), [English](README.en.md).**

## Зовнішній вигляд

### Desktop
![Зовнішній вигляд](https://github.com/DaniilPopov0809/my-wallet-app/assets/104567066/3b923745-9a18-4a2c-9530-16ac0e8c27b3)

### Mobile
![Зовнішній вигляд](.src/assets/test1.gif)

## Опис проекту

Веб-додаток, для роботи з токенами в мережі Ethereum Goerli на мобільних та десктопних пристроях.

## Реалізовано

1. Односторінковий веб-додаток.
2. Підключення до свого гаманця в мережі Ethereum Goerli.
3. Перевірка балансу акаунту та адреси гаманця.
4. Трансфер токена з підключеного гаманця на іншу адресу в мережі Ethereum Goerli.

## Стек технологій:

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux Toolkit](https://img.shields.io/badge/redux-36084F?style=for-the-badge&logo=Redux&logoColor=A50EF7)  
![Vite](https://img.shields.io/badge/Vite-000000?style=for-the-badge&logo=vite)
![React-bootstrap](https://img.shields.io/badge/Reactbootstrap-35FFF8?style=for-the-badge)
![Emotion](https://img.shields.io/badge/emotion-ED0B2F?style=for-the-badge)
![Web3Modal](https://img.shields.io/badge/Web3Modal-20232A?style=for-the-badge)
![Ethers.js](https://img.shields.io/badge/ethers.js-F4350C?style=for-the-badge)
![Formik](https://img.shields.io/badge/Formik-090000?style=for-the-badge)
![Yup](https://img.shields.io/badge/Yup-0BEDD7?style=for-the-badge)


## Реалізація проекту:

- Проект зібраний за допомогою [Vite](https://vitejs.dev/).
- Компоненти створені з використанням бібліотеки [React-bootstrap](https://react-bootstrap.netlify.app/)
- У проекті використовується бібліотека управління станом [ReduxToolkit](https://redux-toolkit.js.org/).
- Необхідні дані зберігаються в `localStorage` використанням бібліотеки [Redux Persist](https://www.npmjs.com/package/redux-persist)

## Інструкція з використання

Для роботи з гаманцем потрібно встановити [MetaMask](https://metamask.io/) - це розширення для веб-браузера, що дозволяє користувачам зручно управляти своїми криптовалютними активами та взаємодіяти з децентралізованими додатками (DApps) на блокчейні Ethereum. Воно дозволяє створювати та керувати гаманцями, підписувати транзакції та здійснювати різноманітні дії на блокчейні.

1. Встановити розширення MetaMask у своєму веб-браузері (наприклад, Google Chrome, Mozilla Firefox) або завантажити офіційний додаток MetaMask з магазину додатків свого пристрою (App Store для iOS або Google Play Store для Android).
2. Після встановлення розширення або додатку, він повинен створити новий гаманець або відновити наявний за допомогою своїх мнемонічних слів (seed phrase).
3. Завершивши ці кроки, підключити свій гаманець до веб-додатку, натиснувши кнопку "Connect wallet".
4. Після вдалого підключення гаманця замість "Connect wallet" з'явиться інформація о адресі, балансу гаманця, а також кнопка "Disconnect" для відключення гаманця. У формі "Transaction form" заповнити поля "Wallet address" та "Amount ETH" здійснити трансфер токенів, натиснувши кнопку "Send ETH".
5. За необхідністю є можливість скопіювати адресу та баланс гаманця натиснувши на відповідні поля.

## Посилання на веб-додаток:
[Посилання на веб-додаток](https://my-wallet-app-black.vercel.app/)

## Тестове завдання:
[Тестове завдання](https://docs.google.com/document/d/19J4foINdh6IiC766zgXiU9EAIxNMc75fqWbqEcP_4Ms/edit?usp=sharing)
