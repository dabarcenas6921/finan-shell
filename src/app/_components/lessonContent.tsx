// Define the ModuleData interface
export interface ModuleData {
  heading: string;
  subcontent: {
    subheading: string;
    paragraph: string;
  }[];
  video: string;
}

interface LessonContentProps {
  moduleData: ModuleData; // Use the ModuleData interface for the prop
}

// Use the LessonContentProps interface to specify prop types
export default function LessonContent({ moduleData }: LessonContentProps) {
  return (
    <div className="mb-5">
      <article className="prose">
        <h1>{moduleData.heading}</h1>
        {moduleData.subcontent.map((subitem, index) => (
          <div key={index}>
            <h2>{subitem.subheading}</h2>
            <p className="w-full">{subitem.paragraph}</p>
          </div>
        ))}
        <div>
          {/* Embed the video here using moduleData.video */}
          <iframe
            width="560"
            height="315"
            src={moduleData.video}
            title="Module Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </article>
    </div>
  );
}
