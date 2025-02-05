import React from 'react'
import './Countries.css'
import data from "../../api.json"
import { Link, useParams } from 'react-router-dom'

const Countries = () => {
    const { country: foo }  = useParams();
    const initialUpper = foo.charAt(0).toUpperCase() + foo.slice(1);
    const countryData = data.countries.find(c => c.country.toLowerCase() === foo.toLowerCase());
    
    const volunteeringOptions = countryData?.volunteeringOptions.map((option, index) => (
        <article className="article" key={index}>
        <div className="imgContainer">
            <img src={option.img} className="articleImg" alt={option.category} />
        </div>
          <div className='articleInfo'>
            <h5 className="articleTitle">{option.category} - {initialUpper}</h5>
            <p className='articleParagraph'>{option.description}</p>
            <h3 className='language'>{option.language} <b className='dot'>.</b>  {option.minimumAge} years <b className='dot'>.</b> {option.mealsIncluded} meals</h3>
          </div>
        </article>
    ));
    
    const extraData = {
        "Argentina" : {
                "title" : "Why Choose Argentina? 🇦🇷",
                "subtitble" : "Argentina invites you to explore its unique landscapes 🌄 and participate in meaningful projects:",
                "options" : {
                    "Viticulture" : "Get involved in wine production in Mendoza 🍇",
                    "Conservation": "Contribute to conservation projects in Patagonia 🦋"
                },
                "description": "If you're looking for an experience that combines nature 🌳, culture 🎶, and sustainability 🌍, this country has much to offer. Whether you're helping on a family farm 🏡 or participating in renewable energy projects ⚡, Argentina is perfect for those who want to be part of communities working to preserve their environment. Enjoy the warmth of Argentina 🤗 and contribute to the country’s wellbeing while learning and growing in this diverse setting 🌎."
            },
            "Colombia" : {
                "title" : "Why Choose Colombia? 🇨🇴",
                "subtitble" : "Colombia is a vibrant destination full of opportunities:",
                "options" : {
                    "Farms" : "Help on an organic farm in the Andes 🌄",
                    "Eco Villages" : "Join permaculture and renewable energy projects 🌱",
                    "Hostels" : "Work at a hostel in Cartagena 🏨"

                },
                "description": "If you’re passionate about outdoor activities 🌱 and sustainable living 🌍, you can join permaculture projects in eco-villages 🌿 or help on an organic farm in the Andes 🌄. Colombia offers you the chance to make a real difference while enjoying stunning natural surroundings 🌅. Whether you're contributing to a rural ecological project 🌻 or collaborating in a local hostel, Colombia is ideal for those seeking cultural immersion 🇪🇸 and warmth 🤗."
            },
            "Mexico" : {
                "title" : "Why Choose Mexico? 🇲🇽",
                "subtitble" : "Mexico is an ideal destination for those looking to combine volunteer work with a rich cultural experience 🎉.",
                "options" : {
                    "Campsites": "Maintain a campsite near the coast 🏕️",
                    "Sustainable Communities" : "Collaborate with communities in Chiapas 🌱",
                    "Holistic Centers" : "Contribute to wellness spaces in places like Tulum 🏝️"
                },
                "description": "Mexico offers a variety of projects that will allow you to live more consciously 🌍. You’ll have the chance to enjoy the tranquility of the Mexican Caribbean 🌊 while being part of positive change in local communities 💚."
            },
            "Thailand" : {
                "title" : "Why Choose Thailand? 🇹🇭",
                "subtitble" : "Thailand offers a unique blend of culture and nature for your volunteer experience:",
                "options" : {
                    "Farms": "Volunteer on a rice farm and learn traditional farming techniques 🌾",
                    "Hostels": "Assist a boutique hostel in Bangkok 🏨",
                    "Camping Sites" : "Help set up eco-friendly camping accommodations in a national park 🏕️"
                },
                "description": "If you’re interested in outdoor activities 🏞️ and want to experience Thai culture 🏯, Thailand offers plenty of opportunities. From volunteering on a rice farm 🌾 to assisting with social media and guest services at a hostel in Bangkok 📱, you'll have a chance to immerse yourself in a rich cultural setting. Additionally, you can contribute to eco-tourism efforts by helping with eco-friendly camping sites 🌱 in one of Thailand’s beautiful national parks 🌳."
            },
            "India" : {
                "title" : "Why Choose India? 🇮🇳",
                "subtitble" : "India offers a spiritual and culturally rich environment for those looking to volunteer:",
                "options" : {
                    "Holistic Centers" : "Join a meditation retreat in the Himalayas 🧘‍♂️",
                    "Eco Villages" : "Contribute to organic farming and sustainable living projects 🌱",
                    "Sustainable Communities" : "Work on water conservation and solar energy projects in Rajasthan 💧⚡"
                },
                "description": "If you're passionate about spirituality 🕉️ and sustainability 🌍, India is the perfect destination. Whether you're participating in meditation retreats in the Himalayas 🏔️ or contributing to eco-village projects focused on organic farming 🌾, you’ll be part of transformative initiatives. You can also work on sustainable community projects like water conservation 💦 and solar energy 🌞, all while experiencing India’s deep cultural and spiritual heritage ✨."
            },
            "Spain" : {
                "title" : "Why Choose Spain? 🇪🇸",
                "subtitble" : "Spain offers a perfect blend of culture, nature, and tradition for volunteers:",
                "options" : {
                    "Farms": "Help with olive harvesting and gardening in Andalucía 🌿",
                    "Hostels" : "Volunteer at a hostel in Barcelona 🏨",
                    "Camping Sites" : "Maintain eco-friendly campsites along the Camino de Santiago 🛤️"
                },
                "description": "If you’re looking to immerse yourself in a mix of nature 🌳, culture 🎭, and sustainability 🌍, Spain has a lot to offer. From helping on a farm in Andalucía 🌿 to volunteering at a hostel in Barcelona 🏙️, Spain allows you to experience both rural and urban life. Additionally, you can contribute to preserving nature by maintaining eco-friendly camping sites along the famous Camino de Santiago route 🛤️, all while enjoying the country’s rich history and hospitality 🤗."
            },
            "Australia" : {
                "title" : "Why Choose Australia? 🇦🇺",
                "subtitble" : "Australia offers unique opportunities for volunteers who love nature and adventure:",
                "options" : {
                    "Farms": "Assist on a vineyard in Barossa Valley 🍇",
                    "Camping Sites" : "Help develop eco-tourism facilities in the Australian Outback 🏕️",
                    "Holistic Centers" : "Support wellness retreats in Byron Bay 🧘‍♀️"
                },
                "description": "If you’re looking for an experience that combines breathtaking landscapes 🏞️ and sustainability 🌱, Australia is an ideal destination. Whether you’re helping with grape harvesting 🍇 in Barossa Valley or assisting in eco-tourism projects 🏕️ in the Outback, there are plenty of opportunities to immerse yourself in nature. You can also contribute to wellness retreats in Byron Bay 🧘‍♀️, assisting with yoga and mindfulness workshops to promote relaxation and well-being."
            },
        }


  return (
    <div className="countriesFilter">
        <aside className='filter'>
            <h3 className='filterTitle'>Filtering by: </h3>
            <h5 className='filterTitle'>Country: </h5>
            <button className="filterButton"><i class="bi bi-x-lg"></i></button>
        </aside>

        <main className='mainFilter'>
            <h1 className='mainFilterTitle'>Opportunities on Volunteer around the World</h1>
            {volunteeringOptions}
        </main>

        <aside className="info">
            <section className="join">
                <h3 className='joinTitle'>Join the Amani Community!</h3>
                <p className='joinParagraph'>Create a free Amamni account and discover volunteer opportunities tailored you, plus gain acces to exclusive travel discounts. </p> 
                <p className='joinParagraph'>Become a member by <b className='bolder'>February 28th</b> and receive an exclusive guide to traveling on a buget.</p>
                <button className="joinButton">  
                    <Link to={`/sign`}> CREATE YOUR ACCOUNT</Link>
                </button>
                <p className='finalJoin'>How it works</p>
            </section>

            <section className="why">
                <h3 className='whyTitle'>{extraData[initialUpper].title} </h3>
                <p className='whyParagraph'>{extraData[initialUpper].subtitle}</p>
                <ol className='whyOptions'>
                    {Object.entries(extraData[initialUpper].options).map(([key, value]) => (
                        <li key={key} className="whyOptionsItem">
                        <b>{key}: </b> {value}
                        </li>
                    ))}
                </ol>
                <p className='whyFinal'>{extraData[initialUpper].description}</p>
            </section>
        </aside>

    </ div>
  )
}

export default Countries