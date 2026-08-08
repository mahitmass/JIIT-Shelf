import BranchSemForm from "../components/BranchSemForm";
import TrendingSubjects from "../components/TrendingSubjects";
import ExamCountdown from "../components/ExamCountdown";
import HolidayBanner from "../components/HolidayBanner";
import Footer from "../components/Footer";
import { Download } from "lucide-react";
import calendarData from "../data/calendar.json";

function getNextExam() {
  const now = new Date();
  
  // Find the first exam that is in the future
  for (const exam of calendarData.exams) {
    if (new Date(exam.date) > now) {
      return exam;
    }
  }
  
  // Fallback if all exams have passed
  return {
    title: "Summer Break",
    date: calendarData.exams[calendarData.exams.length - 1].date
  };
}

const HomePage = () => {
  const nextExam = getNextExam();

  return (
    <>
      <section id="hero">
        <HolidayBanner />
        
        <div id="hero-1">
          <h1 className="heading">
            All your JIIT study material,
            <br />
            One <span className="to-accent">Shelf.</span>
          </h1>
          <p id="small-para">
            Tired of hunting through Classrooms and Drive folders? Find all your
            resources — organized, accessible, and in one place.
          </p>
        </div>

        <div id="hero-2">
          <BranchSemForm mode="navigate" />
          <TrendingSubjects />
        </div>

        <div id="hero-3">
          <ExamCountdown targetDate={nextExam.date} title={nextExam.title} />
          <a
            href="https://drive.google.com/file/d/1KUMLMqzIXm_IXX9PiZX5uPDNzWZ3Ct8A/view?usp=drive_link"
            target="_blank"
            title="Download"
            id="ac"
            rel="noopener noreferrer"
          >
            <Download className="ac-icon" />
            Academic Calendar
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
