type LevelsDataType = {
    texts: string[],
    time: number
};

type AllLevelsData = {
    easy: LevelsDataType,
    medium: LevelsDataType
    hard: LevelsDataType,
    insane: LevelsDataType,
};

const enum Levels {
    easy = 60,
    medium = 50,
    hard = 45,
    insane = 40
};

const data: AllLevelsData = {
    easy: {
        texts: [
            "It is raining outside",
            "Can you help me, please",
            "My phone is on the table",
            "The baby is sleeping now",
            "She has a small white cat",
            "The sun is bright and warm",
            // "He reads a book every night",
            // "We are going to the park today",
            // "They play football after school",
        ],
        time: Levels.easy,
    },
    medium: {
        texts: [
            "I forgot my umbrella at home and got wet on the way to work",
            "The teacher gave us homework to finish before Monday morning",
            // "I usually wake up at 6 AM and start my day with a cup of tea",
            // "We met our friends at the mall and watched a new action movie",
            // "The kids were laughing and running around the playground happily",
            // "They are planning a surprise party for their parents anniversary",
            // "My brother and I enjoy playing video games together on the weekends",
            // "He is trying to eat healthy and exercise at least three times a week",
            // "She bought a new laptop because her old one stopped working suddenly",
            // "She wants to travel to Japan next year to learn about the culture and food"
        ],
        time: Levels.medium,
    },
    hard: {
        texts: [
            "Every morning I like to take a walk in the park to enjoy the fresh air and clear my mind before starting work",
            // "During the weekend, I usually meet with my friends for coffee, and we spend hours talking about our lives, plans, and dreams",
            // "The weather forecast said it would be sunny all week, so we planned a hiking trip in the mountains to enjoy nature and take photos",
            // "Last summer, we traveled to several countries and experienced many new cultures, foods, and traditions that we had never seen before",
            // "The new restaurant in town offers a variety of dishes, including vegetarian and gluten-free options, which makes it popular among many people"
        ],
        time: Levels.hard,
    },
    insane: {
        texts: [
            "وفي الختام أقدر أقول ماشاء الله عليك وصلت لآخر مستوى وهو صعوبة الجنون، وهذا يعني أنك جدًا محترف في الكتابة وسريع أيضًا وهذا دليل على لحظة دقيقة وألا أقول خلاص ولاشيء"
        ],
        time: Levels.insane,
    },
};