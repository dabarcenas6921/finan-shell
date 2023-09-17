import ArticleCard from "../_components/articleCard";
import DiscussionPost from "../_components/discussionPost";
import EventCalendar from "../_components/eventCalendar";
import JobCard from "../_components/jobCard";
import MentorCard from "../_components/mentorCard";

export default function Hub() {
  return (
    <div>
      <article className="prose">
        <h1 className="ml-6">Community Hub</h1>
      </article>
      <div className="mt-5 grid w-full grid-cols-3 gap-10 p-6">
        <div className="col-span-1 max-w-full">
          <article className="prose mb-5">
            <h2>Trending Articles</h2>
          </article>
          <div className="space-y-4">
            <ArticleCard
              title="Bridging the Gap: Financial Literacy for Underrepresented Communities"
              description="Discover how targeted educational tools can empower marginalized groups to navigate the complexities of the financial world and make informed decisions for their future."
              imageUrl="https://www.wealthandfinance-news.com/wp-content/uploads/2021/07/Finance-technology.jpg"
              altText="Stock Market graph"
            />
            <ArticleCard
              title="Financial Mentorship: A Community's Key to Success"
              description="Uncover the importance of financial mentorship programs within communities and learn how technology is facilitating connections between mentors and mentees."
              imageUrl="https://imageio.forbes.com/specials-images/imageserve/6421ad97c38433124e8a9f01/Woman-mentoring-a-young-employee-in-the-office/960x0.jpg?format=jpg&width=960"
              altText="Technology Acquisitions 2021 Image"
            />
          </div>
        </div>
        <div className="max-w-ful col-span-1 space-y-4">
          <article className="prose mb-5">
            <h2>Available Financial Mentors</h2>
          </article>
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
          <article className="prose mb-5">
            <h2>Discussion Board</h2>
          </article>
          <DiscussionPost
            title="What stocks should I invest in?"
            description="Hello fellow investors, I'm new to the stock market and looking for some
        guidance on where to begin my investment journey. Any recommendations..."
          />
          <DiscussionPost
            title="How to diversify my investment portfolio?"
            description="Hello fellow investors, I've been thinking about diversifying my investment portfolio, but I'm not sure where to start. Should I consider bonds, real estate..."
          />
        </div>
        <div className="col-span-1 max-w-full space-y-4">
          <article className="prose mb-5">
            <h2>Upcoming Events</h2>
          </article>
          <EventCalendar />
          <article className="prose mb-5">
            <h2>Jobs & Opportunities</h2>
          </article>
          <JobCard
            jobTitle="Bloomberg Job Opportunity"
            jobDescription="Bloomberg has opened up their applications for finance internships."
            imageUrl="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ivUxvlPidC3M/v0/-1x-1.jpg"
          />
          <JobCard
            jobTitle="Goldman Sachs Analyst Job"
            jobDescription="Assist in the cultivation and harvesting of digital assets within our innovative blockchain greenhouse."
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/1200px-Goldman_Sachs.svg.png"
          />
          <JobCard
            jobTitle="J.P. Morgan Consultant"
            jobDescription="Advise clients on investments in the rapidly growing market."
            imageUrl="https://i.pinimg.com/originals/ef/a9/1e/efa91e94e6b87acdc1674ae337156555.png"
          />
        </div>
      </div>
    </div>
  );
}
