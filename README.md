# Project: Evaluate a news article with Natural Language Processing
Front-End Web Developer Nanodegree Program

## Overview
A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

## Language and tools
- HTML
- SCSS
- JavaScript
- Webpack
- Express
- Cors
- Babel
- meaningcloud API
- Jest Testing
- Workbox service workers for Offline Functionality

## Getting Started
```
git clone https://github.com/Hazem-Saber/evaluate-news-nlp.git
cd evaluate-news-nlp
npm i --force
```
Create your own API key
1. Sign up [meaningcloud](https://www.meaningcloud.com/developer/create-account) and get your API key
2. Create `.env` file
3. Add the following line to the `.env` file and replace the `**************************` with your API key and save
```
API_KEY = **************************
```
Run the project
```
npm run build-prod
npm run start
```
http://localhost:8081/

## Testing
Jest unit testing
```
npm run test
```
