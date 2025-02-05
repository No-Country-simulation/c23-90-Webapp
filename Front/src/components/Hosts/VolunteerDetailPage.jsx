import React from "react";
import { useParams } from "react-router-dom";
import apiData from "../../api.json";
import data from "../../data.json";
import "./VolunteerDetailPage.css";

const categoryDescriptions = {
  "farm": `A Farm is a space dedicated to food production, where various agricultural products are grown and, in some cases, animals are raised. Farms promote a direct connection with the land, the natural cycle of the seasons, and manual labor. They are ideal places for those looking to learn about sustainable farming and eco-friendly practices.
In a Farm, volunteers can take part in activities such as:
🌾 Growing organic food and managing gardens
🐄 Caring for animals and engaging in sustainable farming
🍯 Producing natural products such as honey or jams
🌱 Practicing regenerative agriculture and permaculture
Join a volunteer program on a Farm with Amani and learn about rural life, farming work, and sustainability while contributing to the production of healthy, local food. 🌱🌍
`,
  "eco village": `An Eco Village is a sustainable community where people share farmland or urban spaces with a focus on ecological living and harmony with nature. Those who choose this lifestyle seek a balance between environmental sustainability and a meaningful community.
In Eco Villages, volunteers can take part in activities such as:
🌱 Organic farming and food cultivation
🐝 Beekeeping and pollinator conservation
🛠 Woodworking and eco-construction
🌍 Permaculture techniques for self-sufficiency
Join a volunteer program in an Eco Village with Amani and experience a more sustainable way of life while contributing to the regeneration of our planet. 💚
Would you like me to add anything else to better align it with Amani’s vision? 😊
`,
  "sustainable community": `A Sustainable Community is a group of people working together to create a more balanced and resilient environment, integrating ecological, social, and economic practices that support a sustainable future. These communities can be found in both rural and urban areas, focusing on collective well-being and environmental stewardship.
In a Sustainable Community, volunteers can take part in activities such as:
🌍 Environmental conservation and renewable energy projects
🏡 Eco-friendly housing and community space development
🌱 Regenerative agriculture and local food production
💡 Environmental education and community development initiatives
Join a volunteer program in a Sustainable Community with Amani and be part of a movement driving change toward a greener and fairer world. 💚
`,
  "hostel": `A Hostel is a space designed for travelers looking for an affordable, social, and culturally enriching experience. More than just a place to stay, hostels foster connections between people from around the world, creating a global community through shared experiences and activities.
In a Hostel, volunteers can take part in activities such as:
🛎️ Reception and guest assistance
🎉 Organizing events and cultural activities
📱 Social media management and digital marketing
🛠 Maintenance and space decoration
Join a volunteer program in a Hostel with Amani and experience connecting with travelers while contributing to a welcoming and dynamic environment. 🌍✨
`,
  "camping site": `A Camping Site is an outdoor space designed for travelers and nature lovers to enjoy an immersive experience in natural environments. Whether in the mountains, on the beach, or in the forest, camping offers the chance to disconnect from daily life and reconnect with nature.
In a Camping Site, volunteers can take part in activities such as:
🏕️ Maintenance and improvement of eco-friendly facilities
🔥 Organizing outdoor activities and community bonfires
🌱 Environmental conservation and reforestation projects
🎒 Assisting campers and promoting sustainable tourism
Join a volunteer program in a Camping Site with Amani and experience the beauty of nature while contributing to its preservation. 🌿✨
`,
  "holistic center": `A Holistic Center is a space dedicated to physical, mental, and spiritual well-being, where people can reconnect with themselves through healthy practices and alternative therapies. These centers blend ancient wisdom with modern techniques to promote a balanced and harmonious life.
In a Holistic Center, volunteers can take part in activities such as:
🧘 Supporting yoga and meditation retreats
🌿 Assisting in alternative therapies such as reiki and aromatherapy
🥗 Preparing healthy and organic meals
🎨 Organizing creative and wellness workshops
Join a volunteer program in a Holistic Center with Amani and immerse yourself in a healing and transformative environment while contributing to the well-being of others. ✨💜
`,
  "guest house": `Offers a unique experience where cultural exchange, sustainability, and community come together! 🌱🤝 Volunteers support eco-friendly accommodations, social projects, and creative initiatives while enjoying incredible destinations. 🌎💚 Tasks include hospitality 🛏️, gardening 🌿, cooking 🍽️, event organization 🎨, and social media promotion 📸. ✅✨ Whether you’re passionate about sustainability, love meeting new people, or simply want to experience responsible tourism, this is the perfect opportunity! 🌍💚 With guest houses in stunning locations—from tropical beaches 🏝️ to peaceful mountain villages ⛰️—you’ll live an enriching adventure while making a positive impact. Interested? 📩 Join us today and start your journey! 🚀
`
};

const normalizeCategory = (category) => {
    return category.toLowerCase().replace(/s$/, "").trim();
  };
  
  
  const findImage = (category) => {
    const normalized = normalizeCategory(category);
    const match = data.find((item) => normalizeCategory(item.title) === normalized);
    return match ? match.imgUrl : "/default-volunteer.jpg"; 
  };
  
  const VolunteerDetailPage = () => {
    const { category } = useParams();
    const normalizedCategory = normalizeCategory(category);
  
    const opportunities = apiData.countries.flatMap((country) =>
      country.volunteeringOptions.filter(
        (option) => normalizeCategory(option.category) === normalizedCategory
      )
    );
  
    return (
      <div className="volunteer-detail">
        <h1>Opportunities to volunteer in {category}s around the world</h1>
        <div className="content">
          {opportunities.length > 0 ? (
            <div className="opportunities">
              {opportunities.map((item, index) => (
                <div key={index} className="opportunity-card">
                  <img src={item.img || findImage(item.category)} alt={item.category} />
                  <h3>{item.category} - {item.country}</h3>
                  <p>{item.description}</p>
                  <p><strong>Language:</strong> {item.language}</p>
                  <p><strong>Minimum Age:</strong> {item.minimumAge}</p>
                  <p><strong>Meals Included:</strong> {item.mealsIncluded}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-opportunities">No volunteer opportunities found for this category.</p>
          )}
          <div className="info-box">
            <h2>What is a {category}?</h2>
            <p>{categoryDescriptions[normalizedCategory] || "Description not available."}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default VolunteerDetailPage;