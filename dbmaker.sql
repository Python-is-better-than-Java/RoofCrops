DROP TABLE IF EXISTS faq_faq;

CREATE TABLE faq_faq(
    no INTEGER PRIMARY KEY, 
    question TEXT, 
    answer TEXT
);

INSERT INTO faq_faq(no, question, answer) VALUES
(1, 'Are roses red?', 'No, Roses come in a variety of colors, namely: red, white, yellow, pink (light and dark), orange, lavender, peach, blue, green, black.'),
(2, 'What is terrace farming?', 'Terrace farming is a method of cultivating crops on sloped or uneven terrain by creating flat areas on the slope, often resembling steps or terraces. It helps prevent soil erosion and allows for more effective water management.'),
(3, 'What are the benefits of terrace farming?', 'Terrace farming helps conserve soil, prevents erosion, optimizes water usage, and makes it possible to grow crops on hilly or sloped landscapes. It also promotes better drainage and can enhance overall crop yields.'),
(4, 'Can I practice terrace farming on a small balcony or rooftop?', 'Yes, terrace farming can be adapted to small spaces like balconies or rooftops. Container gardening is a popular method for growing plants in confined spaces.'),
(5, 'What types of crops are suitable for terrace farming?', 'The choice of crops depends on factors such as sunlight, climate, and available space. Herbs, vegetables, and certain fruits are commonly grown in terrace gardens.'),
(6, 'Do I need any special equipment for terrace farming?', 'Basic gardening tools such as pots, containers, soil, and watering cans are essential. Depending on the scale, you might also need additional equipment like a drip irrigation system or raised bed materials.'),
(7, 'How do I prevent pests in my terrace garden?', 'Implementing natural pest control methods, such as companion planting or introducing beneficial insects, can help minimize pest issues. Regular monitoring and prompt action are crucial.'),
(8, 'Is terrace farming suitable for all climates?', 'Terrace farming can be adapted to various climates, but the choice of crops may need to be adjusted based on temperature, sunlight, and other climate factors.'),
(9, 'How do I manage water drainage in a terrace garden?', 'Properly designed terraces usually have built-in drainage systems to prevent waterlogging. Using well-draining soil and ensuring that water flows correctly between terrace levels can also help.'),
(10, 'Can I use recycled materials for terrace farming?', 'Yes, many people use recycled materials such as old containers, pallets, or reclaimed wood for terrace farming. It`s an eco-friendly way to repurpose items for gardening.'),
(11, 'Are there any local regulations or restrictions on terrace farming?', 'Some areas may have regulations or restrictions related to gardening on balconies or rooftops. It`s advisable to check with local authorities to ensure compliance with any guidelines.');