import './CSS/AboutMe.css';

export default function AboutMe(props) {
    props.changePage(0);
    return (
        <div className='am_everything'>
            {/* Animated Text */}
            <main class="container_01">
                <p>Hello 👋 I'm</p>
                <section class="animation">
                    <div class="first"><div>Mehul Grover</div></div>
                    <div class="second"><div>Student</div></div>
                    <div class="third"><div>Web Developer</div></div>
                </section>
            </main>

            <p className='main_text'>
                Hi! I am Mehul Grover a second year Honors Mathematics student at the University of Waterloo.
                As someone who is always been interested in Mathematics, I was introudced to a few CS courses here at UWaterloo,
                decided to delve more into CS and found it quite intresting, first trying my hand out web development, now studying ML, Deep Learning and AI, alongside it, whilst crushing my first term at the University. This is my portfolio, I hope you enjoy it 😃.
            </p>

        </div>

    );
}
