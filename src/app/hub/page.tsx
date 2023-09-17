import ArticleCard from "../_components/articleCard";
import MentorCard from "../_components/mentorCard";

export default function Hub() {
  return (
    <div>
      <article className="prose">
        <h1 className="ml-6">Community Hub</h1>
      </article>
      <div className="mx-6 mt-5 grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <article className="prose mb-5">
            <h2>Trending Articles</h2>
          </article>
          <ArticleCard
            title="Bridging the Gap: Financial Literacy for Underrepresented Communities"
            description="Discover how targeted educational tools can empower marginalized groups to navigate the complexities of the financial world and make informed decisions for their future."
            imageUrl="https://www.wealthandfinance-news.com/wp-content/uploads/2021/07/Finance-technology.jpg"
            altText="Stock Market graph"
          />
          <div className="mt-10">
            <ArticleCard
              title="Financial Mentorship: A Community's Key to Success"
              description="Uncover the importance of financial mentorship programs within communities and learn how technology is facilitating connections between mentors and mentees."
              imageUrl="https://imageio.forbes.com/specials-images/imageserve/6421ad97c38433124e8a9f01/Woman-mentoring-a-young-employee-in-the-office/960x0.jpg?format=jpg&width=960"
              altText="Technology Acquisitions 2021 Image"
            />
          </div>
        </div>
        <div className="col-span-1">
          <article className="prose mb-5">
            <h2>Available Financial Mentors</h2>
          </article>
          <div className="space-y-4">
            <MentorCard
              name="John Doe"
              profileImage="https://media.licdn.com/dms/image/D5603AQGtG2w08CaZoA/profile-displayphoto-shrink_400_400/0/1687418317396?e=1700697600&v=beta&t=aqQIF--nQ3U2eAeiKR21OAf3cON2cn6fXfr_2bWgKVo"
              role="Financial Advisor"
            />

            <MentorCard
              name="Paul Franco"
              profileImage="https://media.licdn.com/dms/image/D4E03AQFOS2vhHGQ66A/profile-displayphoto-shrink_400_400/0/1677992906292?e=1700697600&v=beta&t=zfU2pke2w2Q6H3GQF8vToWRd-9hUP8AYL9ZpydKS_TQ"
              role="Financial Analyst"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
