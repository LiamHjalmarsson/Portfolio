import Header from '../components/layout/header/Header';
import About from './about/About';
import Background from './background/Background';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Cursor from '../components/cursor/Cursor';

const Root = () => {
    return (
        <>
            <Cursor />
            <Header />

            <main className='text-stone-800 dark:text-stone-100 bg-stone-100 dark:bg-stone-800'>
                <About />
                <Skills />
                <Projects />
                <Background />
                <Contact />
            </main>
        </>
    );
}

export default Root;
