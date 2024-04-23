# Synthetica

Introducing Synthetica – your go-to solution for effortlessly expanding your vocabulary and igniting creativity! Seamlessly integrated with the powerful 'Datamuse' API, Synthetica is a responsive web application designed to simplify word querying for users of all backgrounds.

Explore Synthetica's array of 16 query types, each tailored to suit various needs and preferences. Whether you're brainstorming for projects, crafting compelling stories, or simply seeking inspiration, Synthetica offers an intuitive platform to fuel your imagination. With a maximum of 10 results per query, you can swiftly discover the perfect word for any context.

Immerse yourself in a sleek and user-friendly interface, thoughtfully crafted to streamline your experience. Synthetica empowers users to effortlessly navigate through its features, making word exploration both enjoyable and efficient.

Huge shout out to Datamuse for the awesome API! 

Check them out here: [Datamuse](https://www.datamuse.com/api/)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
    - [Index](#index)
    - [About](#about)
    - [Noun Following Your Adjective](#noun-following-your-adjective)
    - [Adjective Before Your Noun](#adjective-before-your-noun)
    - [Trigger](#trigger)
    - [Antonym](#antonym)
    - [Related Meaning](#related-meaning)
    - [Comprises](#comprises)
- [License](#license)

## Installation

To run the Synthetica locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Orangeliquid/Synthetica.git
   cd Synthetica
   ```

2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. Start the Flask application:
   ```bash
   python main.py
   ```
   
2. Open your web browser and navigate to http://127.0.0.1:5002/

3. Decide a word/words to query
   
4. Chose which query to run on word/words chosen
  
5. Chose the amount of results you prefer(min:1, max:10)

6. Take a look at your results

## Features

- Responsive Design: Enjoy a seamless experience across devices with responsive layouts for the index, about, header, and footer sections.
  
- Customizable Result Count: Receive anywhere from 1 to 10 results per query, providing flexibility and control over the returned data.
  
- Scoring System: Benefit from scores displayed alongside results, offering insights into the relevance and strength of each query's correlation to the returned words.
  
- Dynamic Backgrounds: Immerse yourself in a visually captivating experience with nine unique moving backgrounds, ensuring each visit to the site feels fresh and engaging.

## Screenshots

### Index

![Synthetica_index_search](https://github.com/Orangeliquid/Synthetica/assets/127478612/2e369571-2e85-4a74-895e-b7e9559906bf)
![Synthetica_index_explained](https://github.com/Orangeliquid/Synthetica/assets/127478612/d639c395-6aa9-4820-8211-3a94ffacf399)

### About

![Synthetica_about](https://github.com/Orangeliquid/Synthetica/assets/127478612/f0b4aa7a-8c66-47ae-81dc-af3277bfa888)

###  Noun Following Your Adjective

![Synthetica_noun_adj](https://github.com/Orangeliquid/Synthetica/assets/127478612/3e94d525-cc2f-47d8-931c-4411814ab413)

### Adjective Before Your Noun

![Synthetica_adj_noun](https://github.com/Orangeliquid/Synthetica/assets/127478612/7ffb26d0-989c-4963-9dba-d8bb6cd0e757)

### Trigger

![Synthetica_trigger](https://github.com/Orangeliquid/Synthetica/assets/127478612/905a0f62-cfd7-4034-a0cd-a543e34bd1a1)

### Antonym

![Synthetica_antonym](https://github.com/Orangeliquid/Synthetica/assets/127478612/202d5eae-8cc2-4cd0-a07d-d3770e99a664)

### Related Meaning

![Synthetica_related_meaning](https://github.com/Orangeliquid/Synthetica/assets/127478612/90a2d975-e01f-4bab-bcbb-3554690ce3e5)

### Comprises

![Synthetica_comprises](https://github.com/Orangeliquid/Synthetica/assets/127478612/0c478574-91e0-452b-9bbe-0a18e7246f18)

## License

This project is licensed under the [MIT License](LICENSE.txt).
