# Lend-Logic

# LandLogic-app
[Link](https://land-logic-app-frontend.vercel.app/) to the app deployed on Vercel.
[Video](https://youtu.be/WsQBYR9njp8) presentation of our app.
[Backend here](https://github.com/MartiZu/LendLogic-backend)

## The Brief
Having been selected to work with real life stakeholders gave us a unique opportunity. We were able to align our project to their needs and expectations, avoiding ambiguity and addressing any misunderstandings. This also allowed us to create a project that is relevant to the market, as well as the organization’s goals. The company wanted us to explore options and opportunities to serve that substantial portion of users that engages with the app for mortgage-related reasons, but that is currently underserved in the market because products do not offer them user-specific features. With the complexity and significance of mortgage decisions, there is a substantial opportunity to enhance the customer experience by offering features and services specifically tailored to these needs. 

## Overview
Welcome to **LendLogic**, your all-in-one solution for personalized financial insights and decision-making related to mortgages. This application goes beyond the conventional one-size-fits-all approach, recognizing that users dealing with mortgage-related matters have unique needs that require specialized features and services. Working with 2 very technical people fostered since day one in each team member a sense of ownership and accountability, ultimately leading to project success.

## Research
In order to create an app that truly meets the needs of users we conducted a thorough research of our competitors, created a questionnaire and obtained valuable information. The most valuable and comprehensive data was collected during our numerous user interviews with individuals in varied positions on the property ladder.
Through these interviews, we learned about desires and requirements, but the common denominator was that each of them was searching for a tangible numeric understanding of where they are and where they can potentially go based on their unique financial situation. And so, that was it - users want more than just generic advice; they crave personalized solutions. 

## Refined Problem Statement
“Users need an efficient, fast way to find personalized mortgage or remortgage options that align with their financial situation, values and goals.”

## Solution
To meet this demand, we identified a simple solution – building a preference gathering tool to capture user needs and deliver tailored information.

## User Personas
Our two personas represent the essence of our project. Meet Kat, a married young woman navigating the early stages of homeownership with Arshi. They're eager to make informed financial decisions, understand where their money will take them, and secure the best possible deal for their future home. On the other side of the property ladder, we have Jenny. Close to paying off her mortgage, she is exploring options like releasing equity to help her daughter step onto the property ladder.

## User Journey 
- Authentication
- Preference Gathering Tool
- Personalised interactive Dashboard

## User Authentication and Data Storage
To enhance user experience, we implemented cookies to simulate login for our users. This approach allows us to store the user's email address locally, avoiding constant authentication. By associating user answers with their email, we can select appropriate tools for the user to see on the dashboard. This seamless integration with the backend ensures efficient data retrieval and tool customization.

## Preference Gathering Tool and Personalized Dashboard
This is a mechanism that actively engages users to collect data about their financial preferences, goals, and requirements. This data is then leveraged to create a personalized and dynamic user experience within the LendLogic app, enhancing its relevance and usefulness for individual users.

The gathered information is then utilized to select and display appropriate financial tools and features on the dashboard that align with the user's unique requirements. This tailored experience allows users to review personal data specific to them while accessing tools specific to their financial needs and goals. 

## New Buyer - Kat
### Property Deposit Estimation for New Buyers and Suggested Monthly Savings
Users receive an immediate estimate of the required deposit for properties in their area. This clear, financial goal can be further explored by pressing the ‘Find out more’ button. This feature empowers users with crucial information for their property investment decisions and financial needs.

Users can see a suggested monthly saving and an automatically calculated timeframe based on this saving. A user-friendly slider allows users to adjust their monthly savings, providing immediate feedback on the length of time it will take to reach their deposit goal. This feature promotes financial planning and goal setting.

### Dynamic User Input Adjustment
We understand that property values may change. Therefore, we implemented a filter to allow users to input a different property value if they feel that the evaluation stored against their data is incorrect or out of date. This flexibility reflects on the time required to obtain the money for the deposit, positively or negatively impacting the user's financial timeline.

The user is also able to search for a specific post code and if that matches data stored on the databse, the value of the deposit required to buy a property is updated accordingly. 

## Remortgage Features - Jenny
We have also implemented features for the remortgage side of the app, where the user is able to access and explore different deals based on their expectations and their current mortgage plans. There is a timeline to buy providing detailed information to the user.

## Technology Stack

- **Frontend:** Next.js
- **Backend:** JSON server
- **Styling:** Tailwind CSS
- **Authentication:** Cookies

## How to Install

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Start the application using `npm start`.
5. Explore, enjoy and give us feedback on lendlogicmedia@gmail.com 

## Project Structure
lendlogic-app
└─ .
   ├─ app
   │  ├─ components
   │  │  ├─ Footer.jsx
   │  │  ├─ Footer.test.jsx
   │  │  ├─ Header.jsx
   │  │  ├─ Header.test.jsx
   │  │  ├─ loading.jsx
   │  │  └─ loading.test.jsx
   │  ├─ cookies
   │  │  ├─ CookieAnswer.jsx
   │  │  ├─ CookieButton.jsx
   │  │  ├─ CookieButton.test.jsx
   │  │  └─ CookieRead.jsx
   │  ├─ customHooks
   │  │  ├─ DisplayProperties.jsx
   │  │  ├─ DisplayProperties.test.jsx
   │  │  ├─ DisplaySteps.jsx
   │  │  ├─ DisplaySteps.test.jsx
   │  │  ├─ DisplayUser.jsx
   │  │  └─ DisplayUser.test.jsx
   │  ├─ dashboard
   │  │  ├─ ComparisonTool.jsx
   │  │  ├─ ComparisonTool.test.jsx
   │  │  ├─ DashboardPage.test.jsx
   │  │  ├─ layout.jsx
   │  │  ├─ LearningSection.jsx
   │  │  ├─ LearningSection.test.jsx
   │  │  ├─ newbuyer_components
   │  │  │  ├─ BuyingHome.test.jsx
   │  │  │  ├─ BuyingHomeTimeline.jsx
   │  │  │  ├─ Checklist.jsx
   │  │  │  ├─ DisplayNewBuyerInformation.jsx
   │  │  │  ├─ ExpandChecklist.jsx
   │  │  │  ├─ ExpandChecklist.test.jsx
   │  │  │  ├─ NewBuyerReport.jsx
   │  │  │  ├─ NewBuyerReport.test.jsx
   │  │  │  ├─ NewBuyerTimeline.jsx
   │  │  │  ├─ NewBuyerTimeline.test.jsx
   │  │  │  └─ Step.jsx
   │  │  ├─ Newsletter.jsx
   │  │  ├─ Newsletter.test.jsx
   │  │  ├─ page.jsx
   │  │  ├─ remortgage_components
   │  │  │  ├─ DisplayMortgageInformation.jsx
   │  │  │  ├─ DisplayMortgageInformation.test.jsx
   │  │  │  ├─ LoanLengthTool.jsx
   │  │  │  ├─ LoanLengthTool.test.jsx
   │  │  │  ├─ MonthlyPayment.test.jsx
   │  │  │  ├─ MonthlyPaymentTool.jsx
   │  │  │  ├─ MortgageType.jsx
   │  │  │  ├─ MortgageType.test.jsx
   │  │  │  ├─ ReleaseEquityTool.jsx
   │  │  │  ├─ ReleaseEquityTool.test.jsx
   │  │  │  ├─ RemortgageReport.jsx
   │  │  │  └─ RemortgageReport.test.jsx
   │  │  ├─ UniqueMonthlyPayment.jsx
   │  │  └─ UniqueMonthlyPayment.test.jsx
   │  │  ├─ globals.css
   │  ├─ Home.test.jsx
   │  ├─ layout.jsx
   │  ├─ page.jsx
   │  └─ questionnaire
   │     ├─ GetStartedCard.jsx
   │     ├─ GetStartedCard.test.jsx
   │     ├─ page.jsx
   │     ├─ PreferenceTool.jsx
   │     ├─ PreferenceTool.test.jsx
   │     └─ QuestionnaireContent.jsx
   ├─ coverage
   ├─ cypress
   ├─ cypress.config.js
   ├─ jest.config.js
   ├─ jest.setup.js
   ├─ jsconfig.json
   ├─ library
   │  ├─ getProperties.jsx
   │  ├─ getProperties.test.jsx
   │  ├─ getSteps.jsx
   │  ├─ getSteps.test.jsx
   │  ├─ getUsers.jsx
   │  └─ getUsers.test.jsx
   ├─ next.config.js
   ├─ package-lock.json
   ├─ package.json
   ├─ postcss.config.js
   ├─ public
   ├─ README.md
   └─ tailwind.config.js
