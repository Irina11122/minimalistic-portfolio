import { useState } from 'react';

const sections = [
  { id: 'about', number: '01', title: 'ABOUT ME' },
  { id: 'design', number: '02', title: 'GRAPHIC DESIGN' },
  { id: 'radio', number: '03', title: 'RODON FM' },
  { id: 'activities', number: '04', title: 'YOUTH ACTIVITIES' },
  { id: 'video', number: '05', title: 'VIDEO & MULTIMEDIA' },
  { id: 'experience', number: '06', title: 'THE EXPERIENCE' },
];

const designProjects = [
  {
    title: 'WORLD TOURISM DAY',
    category: 'CAMPAIGN / 2026',
    description:
      'Visual communication celebrating travel, cultural exchange and the stories of places.',
    image: '/WhatsApp Image 2026-09-27 at 05.53.04.jpeg',
    number: '01',
  },
  {
    title: 'PROTECT EDUCATION',
    category: 'POSTER DESIGN',
    description:
      'Exploring cultural heritage through visual storytelling and experimental compositions.',
    image: '/1.png',
    number: '02',
  },
  {
    title: 'WORLD FRIENDSHIP DAY',
    category: 'EVENT / SOCIAL MEDIA',
    description:
      'A visual identity for an event celebrating friendship, connection and participation.',
    image: '/FRIENDSHIP.jpeg',
    number: '03',
  },
  {
    title: 'WORLD PHOTOGRAPHY DAY',
    category: 'EVENT CAMPAIGN',
    description:
      'Visual materials created for a celebration of photography and observation.',
    image: '/photo.png',
    number: '04',
  },
  {
    title: 'FIRST AID DAY',
    category: 'SOCIAL MEDIA',
    description: 'An informative three-slide social media publication.',
    image: '/firstaid.png',
    number: '05',
  },
  {
    title: 'CREATIVITY & INNOVATION',
    category: 'HUMAN VS AI',
    description:
      'Creative communication exploring the relationship between human imagination and artificial intelligence.',
    image: '/CREATIVITY-POSTER-Activity.png',
    number: '06',
  },
  {
    title: 'SUICIDE PREVENTION',
    category: 'AWARENESS CAMPAIGN',
    description:
      'Visual communication created to support awareness and encourage conversation.',
    image: '/suicide.png',
    number: '07',
  },
  {
    title: 'FAMILY DAY',
    category: 'PRAXIS ARCHIVE',
    description:
      'Additional posters, banners, publications and campaign materials.',
    image: '/finalslide-family-day.png',
    number: '08',
  },
];

const activities = [
  {
    title: 'WATER DAY',
    date: '27 MARCH',
    description:
      'An environmental awareness activity held at Eleftheria Square.',
    image: '/WhatsApp Image 2026-10-14 at 04.45.13.jpeg',
  },
  {
    title: 'CREATIVITY & INNOVATION',
    date: '21 APRIL',
    description:
      'Create Your Future: Human vs AI — exploring creativity, technology and the Sustainable Development Goals.',
    image: '/WhatsApp Image 2026-10-14 at 04.45.14.jpeg',
  },
  {
    title: 'BEE DAY',
    date: 'SCHOOL ACTIVITY',
    description:
      'An educational activity introducing children to bees, biodiversity and the environment.',
    image: '/bee day.jpeg',
  },
  {
    title: 'PLAY DAY',
    date: 'SCHOOL ACTIVITY',
    description:
      'Creative participation, games and shared experiences with children.',
    image: '',
  },
  {
    title: 'WORLD FRIENDSHIP DAY',
    date: '30 JULY',
    description:
      'An interactive public event featuring friendship bracelets, messages, challenges and creative activities.',
    image: '/fri.jpeg',
  },
  {
    title: 'WORLD PHOTOGRAPHY DAY',
    date: '19 AUGUST',
    description:
      'Astrovradia — an event celebrating photography, observation and visual storytelling.',
    image: '/pho.jpeg',
  },
  {
    title: 'WORLD TOURISM DAY',
    date: '27 SEPTEMBER',
    description:
      'An international activity celebrating tourism, cultural diversity, languages and heritage.',
    image: '/turis.jpeg',
  },
];

const radioProjects = [
  {
    number: '01',
    title: 'RADIO BROADCASTS',
    description:
      'Preparing themes, researching stories and developing scripts for Rodon FM programmes.',
    type: 'BROADCAST',
  },
  {
    number: '02',
    title: 'RADIO SPOTS',
    description:
      'Short audio productions created to communicate campaign messages and promote activities.',
    type: 'AUDIO PRODUCTION',
  },
  {
    number: '03',
    title: 'MUSIC WITHOUT BORDERS',
    description:
      'Exploring music, languages and cultures through international musical selections.',
    type: 'CULTURAL EXCHANGE',
  },
  {
    number: '04',
    title: 'SCRIPTWRITING',
    description:
      'Writing introductions, segments, transitions and stories for radio programmes.',
    type: 'WRITING',
  },
];

const videoProjects = [
  {
    title: 'WATER DAY',
    description:
      'A short video exploring democracy and the importance of participation.',
    video: 'https://www.youtube.com/watch?v=vA9yCiOVDdQ&t=8s',
    image: '',
    type: 'VIDEO',
  },
  {
    title: 'CREATIVITY AND INNOVATION',
    description:
      'Multimedia content developed to communicate tourism and cultural discovery.',
    video: 'https://www.youtube.com/watch?v=jyrHiSxQ9U8&t=78s',
    image: '',
    type: 'CAMPAIGN',
  },
  {
    title: 'Broadcast Promo',
    description:
      'Radio spots, audio content and other multimedia experiments created during the project.',
    video: '/Sequence 01_2.mp4',
    image: '',
    type: 'MULTIMEDIA',
  },
];

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number} / ARCHIVE</span>
      <span className="label-line" />
      <span>{children}</span>
    </div>
  );
}

function ProjectImage({ image, number, title, className = '' }) {
  return (
    <div className={`project-image ${className}`}>
      {image ? (
        <img src={image} alt={title} loading="lazy" />
      ) : (
        <div className="image-placeholder">
          <span className="placeholder-number">{number}</span>
          <span className="placeholder-caption">IMAGE TO BE ARCHIVED</span>
          <span className="placeholder-cross">✳</span>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="design-card">
      <ProjectImage
        image={project.image}
        number={project.number}
        title={project.title}
      />

      <div className="design-card-info">
        <span className="card-category">
          CASE {project.number} / {project.category}
        </span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <span className="card-pin" />
    </article>
  );
}

function App() {
  const [isOn, setIsOn] = useState(true);

  const toggleLight = () => setIsOn((previous) => !previous);

  return (
    <main className={`portfolio ${isOn ? 'lights-on' : 'lights-off'}`}>
      <div className="wall-texture" aria-hidden="true" />
      <div className="wall-vignette" aria-hidden="true" />
      <div className="light-beam" aria-hidden="true" />
      {/* Navigation */}
      <nav className="navigation">
        <a className="nav-logo" href="#home">
          P<span>·</span>M
        </a>

        <span className="nav-project">PRAXIS / MEDIART</span>

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#design">WORK</a>
          <a href="#radio">RADIO</a>
          <a href="#activities">ACTIVITIES</a>
        </div>

        <a className="nav-contact" href="#contact">
          CONTACT ↗
        </a>
      </nav>
      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-coordinates">
          <span>FIELD ARCHIVE / 2026</span>
          <span>SERRES, GREECE</span>
        </div>
        {/* Interactive hanging bulb */}

        {/* Realistic hanging bulb */}
        <button
          className="bulb-container"
          onClick={toggleLight}
          type="button"
          aria-label={isOn ? 'Turn the light off' : 'Turn the light on'}
          aria-pressed={isOn}
        >
          <span className="bulb-cord" />

          <span className="bulb-socket" />

          <span className="bulb-glow" />

          <img
            className="bulb-image"
            src="https://static.vecteezy.com/system/resources/previews/010/916/162/original/transparent-realistic-glowing-light-bulb-isolated-free-png.png"
            alt="Realistic hanging light bulb"
            draggable="false"
          />

          <span className="bulb-hint">{isOn ? 'LIGHT ON' : 'LIGHT OFF'}</span>
        </button>
        <div className="hero-content">
          <span className="case-number">PERSONAL FILE — NO. 027</span>

          <div className="name-paper">
            <span className="paper-label">SUBJECT IDENTIFIED</span>
            <h1>
              IRINA
              <br />
              BOJKOVSKA
            </h1>
            <span className="red-mark" />
          </div>

          <p className="hero-profession">
            GRAPHIC DESIGNER <span>×</span> MULTIMEDIA CREATOR
          </p>

          <p className="hero-description">
            A creative journey through design, radio, youth activities and
            cultural exchange.
          </p>

          <a className="discover-link" href="#about">
            <span>↓</span> OPEN THE ARCHIVE
          </a>
        </div>
        {/* Investigation notes */}
        <div className="evidence-note note-left">
          <span>FIELD NOTE / 001</span>
          <p>
            Every project
            <br />
            leaves a trace.
          </p>
          <div className="note-stamp">DOCUMENTED</div>
        </div>
        <div className="evidence-note note-right">
          <span>WORKING METHOD</span>
          <p>
            Observe.
            <br />
            Connect.
            <br />
            Create.
          </p>
        </div>
        <svg
          className="red-strings"
          viewBox="0 0 1440 850"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M 80 650 C 260 510, 340 290, 490 340" />
          <path d="M 490 340 C 700 420, 800 590, 1010 430" />
          <path d="M 1010 430 C 1130 340, 1150 230, 1330 170" />
          <path d="M 250 170 C 380 250, 390 400, 490 340" />
        </svg>
        <div className="hero-footer">
          <span>41°05' N / 23°33' E</span>
          <span>EUROPEAN SOLIDARITY CORPS</span>
          <span>2026 / PRAXIS</span>
        </div>
      </section>
      {/* About me */}
      <section className="section about-section" id="about">
        <SectionLabel number="01">THE PERSON BEHIND THE WORK</SectionLabel>

        <div className="about-grid">
          <div className="about-heading">
            <span className="eyebrow">A LITTLE ABOUT ME</span>
            <h2>
              DESIGNING
              <br />
              <span>WITH PURPOSE.</span>
            </h2>
            <div className="heading-underline" />
          </div>

          <div className="about-copy">
            <p className="large-copy">
              I am Irina Bojkovska, a graphic designer from Skopje, North
              Macedonia, exploring the ways creativity connects people, ideas
              and cultures.
            </p>

            <p>
              With a background in graphic design and an interest in digital
              media, I joined PRAXIS in Serres, Greece, through the European
              Solidarity Corps project MEDIART.
            </p>

            <p>
              During my volunteering experience, I contributed to visual
              campaigns, radio programmes, educational activities and community
              events. Each experience allowed me to explore a different form of
              communication and storytelling.
            </p>

            <div className="about-facts">
              <div>
                <span>01 / EDUCATION</span>
                <strong>Graphic Design</strong>
                <small>Faculty of Fine Arts, UKIM</small>
              </div>

              <div>
                <span>02 / PROJECT</span>
                <strong>MEDIART</strong>
                <small>European Solidarity Corps</small>
              </div>

              <div>
                <span>03 / LOCATION</span>
                <strong>Serres, Greece</strong>
                <small>PRAXIS / 2026</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Graphic design */}
      <section className="section design-section" id="design">
        <SectionLabel number="02">VISUAL COMMUNICATION</SectionLabel>

        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED PROJECTS</span>
            <h2>
              GRAPHIC
              <br />
              <span>DESIGN.</span>
            </h2>
          </div>

          <p>
            Posters, campaigns, social media content and visual experiments
            created during my experience with PRAXIS.
          </p>
        </div>

        <div className="design-grid">
          {designProjects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        <p className="archive-note">MORE WORK TO BE ADDED TO THE ARCHIVE ↗</p>
      </section>
      {/* Radio */}
      <section className="section radio-section" id="radio">
        <SectionLabel number="03">SOUND / VOICE / STORY</SectionLabel>
        <div className="radio-header">
          <div>
            <span className="eyebrow">BEHIND THE MICROPHONE</span>
            <h2>
              RODON
              <br />
              <span>FM.</span>
            </h2>
          </div>

          <div className="radio-frequency">
            <span>ON AIR</span>
            <div className="sound-wave" aria-hidden="true">
              {Array.from({ length: 35 }, (_, index) => (
                <i key={index} style={{ '--i': index }} />
              ))}
            </div>
            <p>Stories beyond borders.</p>
          </div>
        </div>
        <p className="radio-intro">
          Radio became another way to tell stories, explore cultures and share
          ideas. From programme research and scriptwriting to music selections
          and audio productions, this archive documents my work behind the
          microphone.
        </p>
        <div className="radio-grid">
          {radioProjects.map((project) => (
            <article className="radio-card" key={project.number}>
              <span className="radio-card-number">{project.number}</span>
              <span className="radio-card-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="radio-card-arrow">↗</span>
            </article>
          ))}
        </div>

        <div className="audio-archive" id="audio-archive">
          <div className="audio-archive-heading">
            <span className="eyebrow">AUDIO ARCHIVE / 001—008</span>
            <h3>Listen to the stories.</h3>
            <p>
              Radio broadcasts and audio spots produced during my volunteering
              experience at PRAXIS in Serres, Greece.
            </p>
          </div>

          <h4 className="audio-subheading">01 / RODON FM BROADCASTS</h4>

          <div className="audio-player-grid">
            <article className="audio-player-card">
              <span className="audio-track-number">TRACK 001</span>
              <h4>Radio Broadcast 01</h4>
              <p>A radio programme from Rodon FM.</p>
              <audio controls preload="none">
                <source
                  src="/AUDIO/Broadcast World Photography Day.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support audio.
              </audio>
            </article>

            <article className="audio-player-card">
              <span className="audio-track-number">TRACK 002</span>
              <h4>Radio Broadcast 02</h4>
              <p>Stories, music and cultural discoveries.</p>
              <audio controls preload="none">
                <source
                  src="/AUDIO/Campaign Broadcast - International Day of Play.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support audio.
              </audio>
            </article>

            <article className="audio-player-card">
              <span className="audio-track-number">TRACK 003</span>
              <h4>Radio Broadcast 03</h4>
              <p>International music and cultural exchange.</p>
              <audio controls preload="none">
                <source
                  src="/AUDIO/Faustine and irina favorite broadcast.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support audio.
              </audio>
            </article>

            <article className="audio-player-card">
              <span className="audio-track-number">TRACK 004</span>
              <h4>Radio Broadcast 04</h4>
              <p>Another story from behind the microphone.</p>
              <audio controls preload="none">
                <source
                  src="/AUDIO/Nelson Mandela Special Broadcast.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support audio.
              </audio>
            </article>
          </div>

          <h4 className="audio-subheading">02 / CAMPAIGN AUDIO SPOTS</h4>

          <div className="audio-player-grid">
            <article className="audio-player-card spot-card">
              <span className="audio-track-number">SPOT 001</span>
              <h4>Bee Day Campaign</h4>
              <audio controls preload="none">
                <source src="/AUDIO/RadioSpot BeeDay.wav" type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
            </article>

            <article className="audio-player-card spot-card">
              <span className="audio-track-number">SPOT 002</span>
              <h4>International Day of Friendship</h4>
              <audio controls preload="none">
                <source src="/AUDIO/friendshipspot.wav" type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
            </article>

            <article className="audio-player-card spot-card">
              <span className="audio-track-number">SPOT 003</span>
              <h4>Photography Day Spot</h4>
              <audio controls preload="none">
                <source
                  src="/AUDIO/spot World PhotographyDay sok and irina.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support audio.
              </audio>
            </article>
          </div>
        </div>
      </section>
      {/* Youth activities */}
      <section className="section activities-section" id="activities">
        <SectionLabel number="04">
          PEOPLE / PARTICIPATION / COMMUNITY
        </SectionLabel>

        <div className="section-heading">
          <div>
            <span className="eyebrow">BEYOND THE SCREEN</span>
            <h2>
              YOUTH
              <br />
              <span>ACTIVITIES.</span>
            </h2>
          </div>

          <p>
            Educational activities, international days, workshops and community
            events that brought people together.
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <article className="activity-card" key={activity.title}>
              <ProjectImage
                image={activity.image}
                number={String(index + 1).padStart(2, '0')}
                title={activity.title}
                className="activity-image"
              />

              <div className="activity-info">
                <span className="activity-date">{activity.date}</span>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* Video and multimedia */}
      ```jsx
      {/* Video and multimedia */}
      <section className="section video-section" id="video">
        <SectionLabel number="05">MOVING IMAGES / SOUND / IDEAS</SectionLabel>

        <div className="section-heading">
          <div>
            <span className="eyebrow">STORIES IN MOTION</span>
            <h2>
              VIDEO &
              <br />
              <span>MULTIMEDIA.</span>
            </h2>
          </div>

          <p>
            Videos, campaign films and audiovisual stories created during my
            volunteering experience at PRAXIS in Serres.
          </p>
        </div>

        <div className="video-grid">
          {videoProjects.map((project) => (
            <article className="video-card" key={project.number}>
              <div className="video-player">
                <iframe
                  src={
                    project.video.includes('youtube.com/watch?v=')
                      ? `https://www.youtube.com/embed/${new URL(project.video).searchParams.get('v')}?start=${new URL(project.video).searchParams.get('t')?.replace('s', '') || 0}`
                      : project.video
                  }
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <span className="video-number">{project.number}</span>
              </div>

              <div className="video-info">
                <span className="card-category">{project.type}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="archive-note">EVERY FRAME TELLS A STORY ↗</p>
      </section>
      {/* Experience and skills */}
      <section className="section experience-section" id="experience">
        <SectionLabel number="06">WHAT REMAINS</SectionLabel>

        <div className="experience-heading">
          <span className="eyebrow">MORE THAN A PORTFOLIO</span>
          <h2>
            AN EXPERIENCE.
            <br />
            <span>A NEW PERSPECTIVE.</span>
          </h2>
        </div>

        <p className="experience-copy">
          Volunteering at PRAXIS was an opportunity to take creativity beyond
          the screen. Through design, radio and youth activities, I learned to
          communicate with different audiences, collaborate with people from
          different backgrounds and turn ideas into meaningful experiences.
        </p>

        <div className="skills-grid">
          <div>
            <span>01</span>
            <h3>VISUAL DESIGN</h3>
            <p>Posters, branding, campaigns and digital content.</p>
          </div>

          <div>
            <span>02</span>
            <h3>RADIO & AUDIO</h3>
            <p>Research, scriptwriting, storytelling and audio production.</p>
          </div>

          <div>
            <span>03</span>
            <h3>COMMUNITY</h3>
            <p>Youth engagement, workshops and collaborative activities.</p>
          </div>

          <div>
            <span>04</span>
            <h3>MULTIMEDIA</h3>
            <p>Video, photography and creative digital communication.</p>
          </div>

          <div>
            <span>05</span>
            <h3>TEAMWORK</h3>
            <p>Collaboration, adaptability and intercultural communication.</p>
          </div>

          <div>
            <span>06</span>
            <h3>STORYTELLING</h3>
            <p>Connecting ideas, visuals, sound and human experiences.</p>
          </div>
        </div>
      </section>
      {/* Contact */}
      <footer className="contact-section" id="contact">
        <div className="contact-top">
          <span>PRAXIS / MEDIART / SERRES</span>
          <span>END OF FILE? NEVER.</span>
        </div>

        <span className="eyebrow">THE ARCHIVE CONTINUES</span>

        <h2>
          LET'S MAKE
          <br />
          <span>AN IMPACT.</span>
        </h2>

        <p>
          Every project tells a story.
          <br />
          This is one chapter of mine.
        </p>

        <div className="contact-links">
          <a
            href="https://www.behance.net/irianbojkovska"
            target="_blank"
            rel="noreferrer"
          >
            BEHANCE ↗
          </a>

          <a href="#home">BACK TO THE BEGINNING ↑</a>
        </div>

        <div className="footer-bottom">
          <span>IRINA BOJKOVSKA © 2026</span>
          <span>DESIGNED & BUILT WITH CURIOSITY.</span>
          <span>SKOPJE / SERRES</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
