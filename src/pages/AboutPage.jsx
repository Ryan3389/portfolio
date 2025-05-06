import RevealOnScroll from "../components/RevealOnScroll"
function AboutPage() {
    const languages = ["HTML", "CSS", "JavaScript", "Java", "Python"]
    const frameworks = ["React", "Node.js", "Express.js", "Spring Boot", "Flask", "Tailwind CSS"]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <article className="max-w-3xl mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                    <article className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 translate-all ">
                        <p className="text-gray-300 mb-6 text-xl leading-loose">Passionate developer with expertise in building scalable web applications and creating innovative solutions</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((tech, index) => (
                                        <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.2)] transition">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frameworks.map((tech, index) => (
                                        <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.2)] transition">{tech}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </article>



                </article>
            </RevealOnScroll>
        </section>
    )
}

export default AboutPage