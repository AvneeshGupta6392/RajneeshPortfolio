// Add your photos, awards and certificates here.
// 1) Put the image file in src/assets/gallery/
// 2) Add an item below with image: img("your-file-name.jpeg")
// category must be one of siteConfig.categories. Set published:false to hide an item.
const files = import.meta.glob("../assets/gallery/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}", { eager: true, query: "?url", import: "default" });
const img = (name) => files[`../assets/gallery/${name}`] || "";

export const gallery = [



  //  Awards and Achievements
  {
  id: "1",
  title: "Best Advisor Award",
  category: "Awards & Achievements",
  // date: "2025-03-14",
  description: "Proud to receive the Best Advisor Award in recognition of my dedication, consistent performance, and commitment to guiding and supporting others toward success.",
  award: "Best Advisor Award",
  altText: "Celebrating the Best Advisor Award achievement",
  image: img("award1.jpg"),
  published: true,
},
  
   {
  id: "2",
  title: "Promotion Achievement",
  category: "Awards & Achievements",
  // date: "2025-03-14",
  description: "A proud milestone in my professional journey, recognizing my dedication, consistent efforts, and growth through promotion.",
  award: "Promotion Achievement",
  altText: "Celebrating my professional promotion and career growth",
  image: img("award2.jpg"),
  published: true,
},
  {
  id: "3",
  title: "Promotion Achievement",
  category: "Awards & Achievements",
  // date: "2025-03-14",
  description: "A proud milestone in my professional journey, recognizing my dedication, consistent efforts, and growth through promotion.",
  award: "Royal Gold Promotion Achievement",
  altText: "Celebrating my professional promotion and career growth",
  image: img("award3.jpg"),
  published: true,
},


  // Cerficicate
{
  id: "20",
  title: "Professional Certification",
  category: "Certificates",
  // date: "2025-01-10",
  description: "Successfully completed the certification, demonstrating dedication to continuous learning, personal development, and professional growth.",
  award: "Certification",
  altText: "Professional certification completion certificate",
  image: img("certificate1.jpeg"),
  published: true,
},
{
  id: "21",
  title: "Sir's Promotion Celebration",
  category: "Certificates",
  // date: "2025-01-10",
  description: "A proud and memorable moment celebrating Sir's promotion, recognizing his dedication, leadership, and achievements, and sharing the happiness and inspiration of this special occasion.",
  award: "Promotion Celebration",
  altText: "Memorable moments celebrating Sir's promotion and professional achievement",
  image: img("certificate2.png"),
  published: true,
},

  // Personal photos
  {
  id: "30",
  title: "Capturing the Moment",
  category: "Personal Photos",
  // date: "2025-02-02",
  description: "Enjoying the moment with a camera in hand, capturing beautiful memories, exploring photography, and preserving special experiences through the lens.",
  award: "",
  altText: "Holding a camera and capturing memorable moments during a personal outing",
  image: img("personal1.jpeg"),
  published: true,
}, 

  {
    id: "31",
    title: "Weekend Trek",
    category: "Personal Photos",
    // date: "2025-02-02",
    description: "A trek with friends during the winter break.",
    award: "",
    altText: "Me and friends standing on a hilltop",
    image: img("personal2.jpeg"),
    published: true,
  },
   {
  id: "32",
  title: "Meeting Moments",
  category: "Personal Photos",
  // date: "2025-02-02",
  description: "A memorable moment captured during a meeting, sharing ideas, building connections, and creating lasting memories.",
  award: "",
  altText: "A memorable moment captured during a meeting",
  image: img("personal3.jpeg"),
  published: true,
},

  {
  id: "33",
  title: "Before the Meeting",
  category: "Personal Photos",
  // date: "2025-02-02",
  description: "A memorable moment before the meeting, preparing for the day ahead, sharing conversations, and enjoying a relaxed atmosphere before getting started.",
  award: "",
  altText: "A personal moment captured before an important meeting",
  image: img("personal4.jpeg"),
  published: true,
},
  {
  id: "34",
  title: "Taj Cidade de Goa Horizon",
  category: "Personal Photos",
  // date: "2025-02-02",
  description: "A memorable getaway in Goa, enjoying a relaxing hotel stay, beautiful surroundings, and special moments during a wonderful trip.",
  award: "",
  altText: "A personal travel memory from a hotel stay in Goa",
  image: img("personal5.jpg"),
  published: true,
},

{
  id: "35",
  title: "Hotel, Dinner Time",
  category: "Personal Photos",
  // date: "2025-02-02",
  description: "Enjoying a wonderful dinner at a hotel, sharing delicious food, relaxing in a pleasant atmosphere, and creating beautiful memories during the trip.",
  award: "",
  altText: "A memorable dinner moment at a hotel during a personal trip",
  image: img("personal8.jpg"),
  published: true,
},
{
  id: "36",
  title: "Hotel",
  category: "Personal Photos",
  // date: "2025-02-02",
  description: "A memorable stay at a hotel, enjoying a comfortable atmosphere, beautiful surroundings, and special moments during the trip.",
  award: "",
  altText: "A memorable personal moment captured during a hotel stay",
  image: img("personal9.jpg"),
  published: true,
},


  // Events
 {
  id: "40",
  title: "Super 50 Event by Surjeet Tiwari Sir",
  category: "Events",
  // date: "2025-03-14",
  description: "A memorable event under the guidance and mentorship of Surjeet Tiwari Sir, gaining valuable knowledge, inspiration, and insights while connecting with others and creating meaningful memories.",
  award: "",
  altText: "Memorable moments from an event held under the guidance of Surjeet Tiwari Sir",
  image: img("event1.jpg"),
  published: true,
},

  {
  id: "41",
  title: "Events",
  category: "Events",
  // date: "2025-03-14",
  description: "Captured memorable moments from special events, celebrating new experiences, building connections, and creating lasting memories.",
  award: "",
  altText: "Memorable moments captured during an event",
  image: img("event2.jpg"),
  published: true,
},
 {
  id: "42",
  title: "Events Guest",
  category: "Events",
  // date: "2025-03-14",
  description: "A memorable event attended under the guidance and mentorship of sir, gaining valuable insights, learning from experience, building meaningful connections, and creating lasting memories.",
  award: "",
  altText: "Memorable moments from an event attended under the guidance of sir",
  image: img("event3.jpeg"),
  published: true,
},

{
  id: "43",
  title: "A Grand Event Gathering",
  category: "Events",
  // date: "2025-03-14",
  description: "A vibrant event filled with a large gathering of people, shared enthusiasm, meaningful interactions, and memorable moments of togetherness and celebration.",
  award: "",
  altText: "A large crowd gathered together at a memorable event",
  image: img("event4.jpg"),
  published: true,
},



  // Professional moments
  {
  id: "50",
  title: "Another State",
  category: "Professional Moments",
  // date: "2025-06-01",
  description: "A memorable professional journey to another state, exploring new opportunities, gaining valuable experiences, and building meaningful connections.",
  award: "",
  altText: "A memorable professional moment during a visit to another state",
  image: img("professional1.jpeg"),
  published: true,
},
  {
  id: "51",
  title: "During a Function",
  category: "Professional Moments",
  // date: "2025-06-01",
  description: "A memorable moment during a special function, celebrating achievements, strengthening professional connections, and creating lasting memories.",
  award: "",
  altText: "A memorable moment captured during a professional function",
  image: img("professional2.jpg"),
  published: true,
},
 {
  id: "52",
  title: "Meeting with Senior",
  category: "Professional Moments",
  // date: "2025-06-01",
  description: "A valuable moment spent in a meeting with a senior, gaining insights, sharing ideas, learning from experience, and strengthening professional relationships.",
  award: "",
  altText: "A professional meeting with a senior, sharing ideas and gaining valuable insights",
  image: img("professional3.jpg"),
  published: true,
},
{
  id: "53",
  title: "Goa Beach Memories",
  category: "Professional Moments",
  // date: "2025-06-01",
  description: "Enjoying the beautiful beaches of Goa, relaxing by the sea, exploring scenic coastal views, and creating unforgettable memories during a wonderful getaway.",
  award: "",
  altText: "A memorable moment captured during a visit to a beautiful beach in Goa",
  image: img("professional4.jpeg"),
  published: true,
},
{
  id: "54",
  title: "Goa Beach Memories",
  category: "Professional Moments",
  // date: "2025-06-01",
  description: "Enjoying the beautiful beaches of Goa, relaxing by the sea, exploring scenic coastal views, and creating unforgettable memories during a wonderful getaway.",
  award: "",
  altText: "A memorable moment captured during a visit to a beautiful beach in Goa",
  image: img("professional5.jpg"),
  published: true,
},


];